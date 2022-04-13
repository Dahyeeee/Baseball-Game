function creatComputerNumber(){
    const computerNumber1 = [];
   // let randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
    for(let i=0; computerNumber1.length<3; i++){
        let randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
        if(!computerNumber1.includes(randomNumber)){
        computerNumber1.push(randomNumber);
    }
    }return computerNumber1;}

function checkRepeatNumber(arr){
    return (new Set(arr)).size !== arr.length;
}
// function checkValidity(){
//     const userNumberArray = this.value.Array.from(this.value, Number);
//     if(userNumberArray.length != 3){
//         //  userNumberinput = "";
//         alert("You need to type 3 numbers.");
//     }
//     else if(checkRepeatNumber(userNumberArray)){
//          //  userNumberinput = "";
//             alert("Three different Numbers I said.");
//             }
// }

// function getUserNumber(){
//     const userNumberinput = document.getElementById("user-input").value;
//     const userNumberArray = Array.from(userNumberinput, Number);
//     const checkValidtiy = checkValidity();
//     return userNumberArray;
// }

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

// function oneStrike(computer,user){
//     const newComputer= computer.filter((item,index)=>{return item !==user[index];});
//     const newUser= user.filter((item,index)=>{return item !==computer[index];});
//     for(let i=0; i<3; i++){
//         if(computer[i] === user[i] 
//      //       || computer[1] === user[1] ||computer[2] === user[2]
//      && newUser.every((item)=>!newComputer.includes(item))){
//         return 'onestrike';
//     }
//     else if(computer[i] === user[i]
//         && newUser.every((item)=>newComputer.includes(item))){
//            return 'onestriketwoball';
//        }
//     else if(computer[i] === user[i]
//         && newUser.some((item)=>newComputer.includes(item))){
//            return 'onestrikeoneball';
//        }
// }}

// function oneStriketwoBall(computer,user){
//     const newComputer= computer.filter((item,index)=>{return item !==user[index];});
//     const newUser= user.filter((item,index)=>{return item !==computer[index];});
//     for(let i=0; i<3; i++){
//         if(computer[i] === user[i]
//      && newUser.every((item)=>newComputer.includes(item))){
//         return true;
//     }
// }}

// function oneStrikeOneBall(computer,user){
//     const newComputer= computer.filter((item,index)=>{return item !==user[index];});
//     const newUser= user.filter((item,index)=>{return item !==computer[index];});
//     for(let i=0; i<3; i++){
//         if(computer[i] === user[i]
//      && newUser.some((item)=>newComputer.includes(item))){
//         return true;
//     }
// }}

// function twoStrike(computer,user){
//     if((computer[1] === user[1] && computer[0]===user[0] && computer[2] !== user[2])||
//     (computer[1] === user[1] && computer[2] ===user[2] && computer[0] !== user[0])||
//     (computer[0] ===user[0] && computer[2]===user[2] && computer[1] !== user[1]))
//     return true;
// }

// function Ball(computer, user){
//        const newUser = user.filter((item)=> computer.includes(item));
//        if((computer[0]!==user[0] && computer[1]!==user[1] && computer[2]!==user[2])
//         && computer.includes(user[0])&& computer.includes(user[1]) && computer.includes(user[2]))
//         {return 'threeBall';}
//         else if((computer[0]!==user[0] && computer[1]!==user[1] && computer[2]!==user[2])
//         && newUser.length === 2)
//         {return 'twoBall';}
//         else if((computer[0]!==user[0] && computer[1]!==user[1] && computer[2]!==user[2])
//              && newUser.length ===1)
//              {return 'oneBall';}
//     }

// function twoBall(computer, user){
//             const newUser = user.filter((item)=> computer.includes(item));
//            if((computer[0]!==user[0] && computer[1]!==user[1] && computer[2]!==user[2])
//             && newUser.length === 2)
//             {return true;}
//         }

//  function OneBall(computer, user){
//      //    for(let i=0; i<3;i++){
//         const newUser = user.filter((item)=> computer.includes(item));
//             if((computer[0]!==user[0] && computer[1]!==user[1] && computer[2]!==user[2])
//              && newUser.length ===1)
//              {return true;}
//          }

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



    // if(computer[0] === user[0] && computer[1] ===user[1] && computer[2]===user[2]){
    //      restart.style.display = "block";
    //      result.innerHTML="홈런!";}
    // else if (user.every((item)=>!computer.includes(item))){
    //     result.innerHTML="Nothing!"
    // }
    // else if(twoStrike(computer,user)){
    //     result.innerHTML ="2 스트라이크";
    //     }
    // else if (oneStrike(computer,user)=== 'onestrike'){
    //      result.innerHTML="1 스트라이크";}
    // else if(oneStrike(computer,user)==='onestriketwoball'){
    //      result.innerHTML='1 스트라이크 2볼';
    // }
    // else if(oneStrike(computer,user)==='onestrikeoneball'){
    //      result.innerHTML='1스트라이크 1볼';
    // }
    // else if (Ball(computer,user)==='threeBall'){
    //     result.innerHTML="3 볼";}
    // else if(Ball(computer,user)==='twoBall'){
    //         result.innerHTML='2 볼';
    //     }
    // else if(Ball(computer,user)==='oneBall'){
    //         result.innerHTML='1 볼';
    //     }
    // }


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

// const arry1=[2,8,3];
// const arry2=[5,8,2];
// const newArry1= arry1.forEach((item)=>{if(arry2.includes(item)){return true;}});
// const newArry2= arry2.filter((item,index)=>{return item !== arry1[index]});
// console.log(newArry1);
// console.log(newArry2.includes(2));

// for(let i=0; i<3; i++){
//     console.log(arry1.includes(arry2[i]));}