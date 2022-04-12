const screatNumber = Math.floor(Math.random()*20 +1);
console.log(screatNumber);
let score = 20;
let highScore=0;

function setMessage(classNmae,message){
    document.querySelector(`.${classNmae}`).textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
   const guessing= document.querySelector('.guess').value;
   console.log(guessing);

   if(guessing == screatNumber){
    //    document.querySelector('.message').textContent = "You idiot won";
    //    document.querySelector('.highscore').textContent = score;
    setMessage('message','Idiot You won');
    setMessage('highscore',score);
    document.querySelector('body').style.backgroundColor = '#60b347';

   }else if(guessing>screatNumber){
    //    document.querySelector('.message').textContent= "idiot its to high";
    setMessage('message','idiot its to high');
       score--;
    //    document.querySelector('.score').textContent=score;
    setMessage('score',score);
   }else if(guessing<screatNumber){
    // document.querySelector('.message').textContent= "idiot its to low";
    setMessage('message','idiot its to low');
    score--;
    // document.querySelector('.score').textContent=score;
    setMessage('score',score);
}

})

const reset = document.querySelector('.again').addEventListener('click',function(){
    reset.clear();
})