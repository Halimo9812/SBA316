
  const playerOne = document.getElementById('p1btn'); // Cache at least one element using selectElementById.
  const resetButton = document.querySelector("#reset");
  const playerTwo = document.querySelector('#p2btn'); // Cache at least one element using querySelector or querySelectorAll.
  const player1 = document.querySelector('#player1')
  const player2 = document.querySelector('#player2')
  const winningScoreSelect = document.querySelector('#playUpTo');

  let p1score = 0
  let p2score = 0
  let winningScore =3
  let isGameOver = false;
  
  //Register at least two different event listeners and create the associated event handler functions.
p1btn.addEventListener('click', function(){
  if(!isGameOver){
    p1score += 1;
  if (p1score === winningScore){
    isGameOver = true;
    player1.classList.add('winner');
    player2.classList.add('loser');
  }
  player1.textContent = p1score;
 
  }
})


p2btn.addEventListener('click', function(){
  if(!isGameOver){
    p2score += 1;
  if (p2score === winningScore){
    isGameOver = true;
    player2.classList.add('winner');
    player1.classList.add('loser');
  }
  player2.textContent = p2score;
}
})

winningScoreSelect.addEventListener('change', function(){
  //alert('CHANGE')
  winningScore = parseInt(this.value);
  reset();
})
resetButton.addEventListener('click', reset)

function reset(){
  isGameOver = false;
  p1score = 0;
  p2score = 0;
  player1.textContent = 0;
  player2.textContent = 0;
  player1.classList.remove('winner', 'loser')
  player2.classList.remove('winner', 'loser')
}

