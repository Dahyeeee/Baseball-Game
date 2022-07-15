export class BaseballGame {
  #computerNumber;
  #restartBtnEl;
  #resultEl;
  #submitEl;

  constructor() {
    this.#creatComputerNumber();
    console.log(this.#computerNumber);
    this.#getDomElemet();
    this.#addEventListener();
  }

  #getDomElemet() {
    this.#submitEl = document.querySelector("#submit");
    this.#restartBtnEl = document.querySelector("#game-restart-button");
    this.#resultEl = document.querySelector("#result");
    this.#restartBtnEl.style.display = "none";
  }

  #addEventListener() {
    this.#restartBtnEl.addEventListener("click", this.#refresh);
    this.#submitEl.addEventListener("click", this.#play);
  }

  #creatComputerNumber() {
    const computerNumber = [];
    for (let i = 0; computerNumber.length < 3; i++) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    this.#computerNumber = computerNumber;
  }

  #getUserNumber() {
    const userNumberinput = document.getElementById("user-input").value;
    const userNumberArray = Array.from(userNumberinput, Number);
    if (userNumberArray.length != 3) {
      alert("You need to type 3 numbers.");
    } else if (this.#checkRepeatNumber(userNumberArray)) {
      alert("Three different Numbers I said.");
    } else {
      return userNumberArray;
    }
  }

  #checkRepeatNumber(arr) {
    return new Set(arr).size !== arr.length;
  }

  #matchNumbers(userNum) {
    const strikeNum = userNum.filter(
      (item, ind) => item === this.#computerNumber[ind]
    ).length;

    const ballNum = userNum
      .filter((item, index) => item !== this.#computerNumber[index])
      .filter((item) => this.#computerNumber.includes(item)).length;

    return [strikeNum, ballNum];
  }

  #convertToMessage(matchNum) {
    const [strikeNum, BallNum] = matchNum;

    let message = `${strikeNum ? strikeNum + "strike" : ""} ${
      BallNum ? BallNum + "Ball" : ""
    }`;

    if (matchNum.every((item) => item === 0)) {
      message = "Nothing";
    } else if (strikeNum === 3) {
      this.#restartBtnEl.style.display = "block";
      message = "Home Run!";
    }

    return message;
  }

  #play = (e) => {
    e.preventDefault();
    const userNum = this.#getUserNumber();
    const matchNumber = this.#matchNumbers(userNum);
    const result = this.#convertToMessage(matchNumber);
    this.#resultEl.innerHTML = result;
  };

  #refresh() {
    document.location.reload(true);
  }
}
