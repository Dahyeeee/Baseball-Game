function creatComputerNumber(){
    const computerNumber1 = [];
    for(let i=0; computerNumber1.length<3; i++){
        let randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
        if(!computerNumber1.includes(randomNumber)){
        computerNumber1.push(randomNumber);
    }
    }return computerNumber1;}

function checkRepeatNumber(arr){
    return (new Set(arr)).size !== arr.length;
}

function getUserNumber(){  
    const userNumberinput = document.getElementById("user-input").value;
    const userNumberArray = Array.from(userNumberinput, Number);
    if(userNumberArray.length != 3){
    //  userNumberinput = "";
    alert("You need to type 3 numbers.");
    }
    else if(checkRepeatNumber(userNumberArray)){
     //  userNumberinput = "";
        alert("Three different Numbers I said.");
    }
    else{
     return userNumberArray;
     }   
    } 

function figureOutHowManyStrike(computer,user){
    const newComputer= computer.filter((item,index)=>{return item !==user[index];});
    const newUser= user.filter((item,index)=>{return item !==computer[index];});
    if(computer[1] === user[1] && computer[0]===user[0] && computer[2] === user[2]){
        return 3;}
    else if((computer[1] === user[1] && computer[0]===user[0] && computer[2] !== user[2])||
            (computer[1] === user[1] && computer[2] ===user[2] && computer[0] !== user[0])||
            (computer[0] ===user[0] && computer[2]===user[2] && computer[1] !== user[1])){
        return 2;
        }
    for(let i=0; i<3; i++){
        if(computer[i] === user[i]) {
         return 1;
     }}
     if(!user.includes(computer)){
         return 0;
     }
    }

function figureOutHowManyBall(computer,user){
    const nostrike = (computer[0]!==user[0] && computer[1]!==user[1] && computer[2]!==user[2])
    const newUser = user.filter((item,index)=> item !== computer[index]);
    const notStrikeNumber = newUser.filter((item) =>computer.includes(item))
    if(nostrike
        && computer.includes(user[0])&& computer.includes(user[1]) && computer.includes(user[2]))
        {return 3;}
    else if(notStrikeNumber.length === 2)
        {return 2;}
    else if(notStrikeNumber.length === 1)
        {return 1;}
    else if(!user.includes(computer)){
        return 0;}
    }

function convertStrike(numOfStrike){
    const strikemessage = `${numOfStrike} Strike`
    if(numOfStrike === 0){
        return ""
    }
    for(let i= 1; i<3 ; i++){
        if(numOfStrike === i){
        return strikemessage;
         }
    }
    if(numOfStrike ===3){
        restart.style.display='block';
        return 'Home Run!'
    }
}

function convertBall(numOfBall){
    const ballmessage = `${numOfBall} Ball`
    if(numOfBall === 0){
        return '';}
    for(let i= 1; i<4 ; i++){
        if(numOfBall === i){
            return ballmessage;
         }
        }
    }

function showOnScreen(numOfStrike,numOfBall){
   let result = `${numOfStrike} ${numOfBall}`;
    if(result == " "){
        return 'Nothing';}
    else{
        return result;}
    }

function refresh(){
    document.location.reload(true);
}

const restart = document.querySelector("#game-restart-button");
restart.style.display = "none";
restart.addEventListener('click',refresh);

const result = document.querySelector('#result')

function play(computer, user){
  const ballnumber = figureOutHowManyBall(computer,user);
  const strikenumber = figureOutHowManyStrike(computer,user);
  const ballmessage = convertBall(ballnumber);
  const strikemessage = convertStrike(strikenumber);
  const finalresult = showOnScreen(strikemessage, ballmessage);
  return finalresult;
}

const computerNumber = creatComputerNumber();

function baseBallGame(event){
    event.preventDefault();
    console.log(computerNumber);
    const userNumber = getUserNumber();
    console.log(userNumber);
    const compare = play(computerNumber, userNumber);
    result.innerHTML = compare;
}

submit.addEventListener('click',baseBallGame);
