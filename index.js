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

function figureOutHowManyStrike(computer, user) {
  const strikeNum = user.filter((item, ind) => item === computer[ind]);
  return strikeNum.length;
}

function figureOutHowManyBall(computer, user) {
  const noStrikeNum = user.filter((item, index) => item !== computer[index]);
  const BallNum = noStrikeNum.filter((item) => computer.includes(item));
  return BallNum.length;
}

function convertStrike(numOfStrike) {
  if (numOfStrike === 0) {
    return "";
  }
  if (numOfStrike === 3) {
    restartBtn.style.display = "block";
    return "Home Run!";
  }
  return `${numOfStrike} strike`;
}

function convertBall(numOfBall) {
  if (numOfBall === 0) {
    return "";
  }
  return `${numOfBall} Ball`;
}

function showOnScreen(numOfStrike, numOfBall) {
  let result = `${numOfStrike} ${numOfBall}`;
  if (result == " ") {
    return "Nothing";
  } else {
    return result;
  }
}

function refresh() {
  document.location.reload(true);
}

const restartBtn = document.querySelector("#game-restart-button");
restartBtn.style.display = "none";
restartBtn.addEventListener("click", refresh);

const result = document.querySelector("#result");

function play(computer, user) {
  const ballnumber = figureOutHowManyBall(computer, user);
  const strikenumber = figureOutHowManyStrike(computer, user);
  const ballmessage = convertBall(ballnumber);
  const strikemessage = convertStrike(strikenumber);
  const finalresult = showOnScreen(strikemessage, ballmessage);
  return finalresult;
}

const computerNumber = creatComputerNumber();

function baseBallGame(event) {
  event.preventDefault();
  console.log(computerNumber);
  const userNumber = getUserNumber();
  const compare = play(computerNumber, userNumber);
  result.innerHTML = compare;
}

submit.addEventListener("click", baseBallGame);
