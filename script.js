// Start with completing lines 2-20, then go on to clicked
let game = document.querySelector('.game');

function createBoxes(){
  for(let i = 0; i < 42; i++){
    let box = document.createElement('div');
    box.id = i;
    box.className = 'box';
    box.addEventListener('click', clicked);
    game.appendChild(box);  
  }
}
createBoxes()
let playerTurn = document.querySelector('.player-turn');

let currentPlayer = "X";
let gameState = Array(42);
let gameActive = true;

playerTurn.innerHTML = currentPlayer + "'s turn";

let winningConditions=[
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
];

function fillBox(clickedCell){
  clickedCell = Number(clickedCell)
  console.log(clickedCell+7, gameState[clickedCell+7])
  console.log(clickedCell+7 < 41, gameState[clickedCell+7] === undefined)
  if(clickedCell+7 < 42 && gameState[clickedCell+7] === undefined){
    console.log('the box below is empty')
    fillBox(clickedCell+7)
  } else {
    console.log('fillBox')
    gameState[clickedCell] = currentPlayer;
    game.childNodes.forEach(box => {
      return Number(box.id) === clickedCell ? box.innerText = currentPlayer : null
    })
  }
}

function playerChange(){
  if(currentPlayer === 'X'){
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  
  playerTurn.innerHTML = currentPlayer + "'s turn";
}

function restart(){
  gameState = Array(42);
  document.querySelectorAll('.box').forEach(box => {box.innerHTML = ""; box.style.backgroundColor = 'transparent'});
  currentPlayer='X';
  playerTurn.innerHTML = currentPlayer + "'s turn";
  gameActive = true;
}

function checkWin(){
  // no point creating a for loop without them understanding, just go right for HoF to save time
  // after writing this function create the restart function and attach it to restart button in HTML (helps test faster if this works early)
  winningConditions.forEach(condition => {
    if(gameState[condition[0]] === undefined || gameState[condition[1]] === undefined || gameState[condition[2]] === undefined){
      null;
    } else if(gameState[condition[0]] === gameState[condition[1]] && gameState[condition[0]] === gameState[condition[2]] && gameState[condition[0]] === gameState[condition[3]]){
      console.log('winner')
      playerTurn.innerHTML = currentPlayer + " won!";
      document.querySelectorAll('.box').forEach(box => {
        if(Number(box.getAttribute('id')) == condition[0] ||  Number(box.getAttribute('id')) == condition[1] || Number(box.getAttribute('id')) == condition[2] || Number(box.getAttribute('id')) == condition[3]){
          box.style.backgroundColor = 'green'
        }
      });
      // you can bring this in secondarily
      gameActive = false;
    }
  })
  // you can bring this in lastly for this function
  if(gameState.includes(undefined) === false){
      playerTurn.innerHTML = "DRAW!"
      gameActive = false;
  }
}
// start by creating a clicked function which log's "hi"
// return to html and add all clicked event listeners
// come back here and log e.target
// call the fillBox fn 
// create the fill box fn (should fill with all X's)
// call the playerChange fn
// create the playerChange fn
// call the checkWin function
// create the checkWin function
function clicked(e){
  // the following line should be one of the LAST items completed
  if(gameActive === false){return};
  // the following condition should be one of the LAST items completed
  if(e.target.innerHTML === ''){
    fillBox(e.target.getAttribute('id'));

    checkWin();
    if(gameActive === false){return};
    // the following line should be one of the FIRST items completed
    playerChange();
  }
}