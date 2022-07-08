function creatComputerNumber() {
  const computerNumber1 = [];
  for (let i = 0; computerNumber1.length < 3; i++) {
    let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber1.includes(randomNumber)) {
      computerNumber1.push(randomNumber);
    }
  }
  return computerNumber1;
}

function checkRepeatNumber(arr) {
  return new Set(arr).size !== arr.length;
}

function getUserNumber() {
  const userNumberinput = document.getElementById("user-input").value;
  const userNumberArray = Array.from(userNumberinput, Number);
  if (userNumberArray.length != 3) {
    alert("You need to type 3 numbers.");
  } else if (checkRepeatNumber(userNumberArray)) {
    alert("Three different Numbers I said.");
  } else {
    return userNumberArray;
  }
}

function matchNumbers(computer, user) {
  const strikeNum = user.filter((item, ind) => item === computer[ind]);

  const noStrikeNum = user.filter((item, index) => item !== computer[index]);
  const BallNum = noStrikeNum.filter((item) => computer.includes(item));

  return [strikeNum.length, BallNum.length];
}

function convertToMessage(matchNum) {
  const [strikeNum, BallNum] = matchNum;

  if (matchNum.every((item) => item === 0)) return "Nothing";
  if (strikeNum === 3) {
    restartBtn.style.display = "block";
    return "Home Run!";
  }

  return `${strikeNum !== 0 ? strikeNum + "strike" : ""} ${
    BallNum !== 0 ? BallNum + "Ball" : ""
  }`;
}

function refresh() {
  document.location.reload(true);
}

const restartBtn = document.querySelector("#game-restart-button");
restartBtn.style.display = "none";
restartBtn.addEventListener("click", refresh);

const result = document.querySelector("#result");

function play(computer, user) {
  const matchNumber = matchNumbers(computer, user);
  const result = convertToMessage(matchNumber);
  return result;
}
const computerNumber = creatComputerNumber();

function baseBallGame(event) {
  event.preventDefault();
  console.log(computerNumber);
  const userNumber = getUserNumber();
  const finalReuslt = play(computerNumber, userNumber);
  result.innerHTML = finalReuslt;
}

submit.addEventListener("click", baseBallGame);
