score = 0;
cross = true;

audio = new Audio('bgmusic.mp3');
audiogo = new Audio('gameover.wav');
setTimeout(()=>{
  audio.play()
})
//const scoreCont = document.querySelector('.scoreCont');
document.onkeydown = function(e){
    console.log("Key code is: ",e.keyCode);
    if(e.keyCode == 38){
      dino = document.querySelector('.dino');
      dino.classList.add('animateDino');
      setTimeout(()=>{
          dino.classList.remove('animateDino')
      },700);
    }
    if(e.keyCode == 39){
      const dino = document.querySelector('.dino');
      let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
      dino.style.left=dinoX + 112 + "px";
    }
    if(e.keyCode == 37){
      const dino = document.querySelector('.dino');
      let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
      dino.style.left=(dinoX - 112 )+ "px";
    }
};

setInterval(()=>{
  const dino = document.querySelector('.dino');
  const gameOver = document.querySelector('.gameOver');
  const obstacle = document.querySelector('.obstacle');

  const dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
  const dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
  const ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  const oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  const offsetX = Math.abs(dx-ox);
  const offsetY = Math.abs(dy-oy);
  //console.log(offsetX,offsetY)
  if(offsetX<120 && offsetY<49){
    gameOver.innerHTML = "Game over - Reload to start over"
    obstacle.classList.remove('obstacleani');
    audiogo.play();
    setTimeout(()=>{
      audiogo.pause();
      audio.pause();
    },1000);
    
  }
  else if(offsetX<145 && cross){
    score+=1;
    updateScore(score);
    cross = false;
    setTimeout(()=>{
      cross = true;
    },1000);
    setTimeout(() =>{
      const anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
      const newdur = anidur - 0.1;
      obstacle.style.animationDuration = newdur + 's';
    },500);
      
  }

},10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score
}
