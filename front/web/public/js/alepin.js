window.onload = initAll;
var usedNums = new Array(76);
function initAll() {
  if (document.getElementById) {
    // document.getElementById("reload").onclick = anotherCard;
    newCardA();
    newCardB();
    newCardC();
  }
}
function newCardA() {
  for (var i = 0; i < 24; i++) {
    setSquareA(i);
  }
}
function newCardB() {
  for (var i = 0; i < 24; i++) {
    setSquareB(i);
  }
}
function newCardC() {
  for (var i = 0; i < 24; i++) {
    setSquareC(i);
  }
}

function setSquareA(thisSquare) {
  var currSquare = "squareA" + thisSquare;
  var colPlace = new Array(
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4
  );
  var colBasis = colPlace[thisSquare] * 15;
  var newNum;
  do {
    newNum = colBasis + getNewNum() + 1;
  } while (usedNums[newNum]);
  usedNums[newNum] = true;
  document.getElementById(currSquare).innerHTML = newNum;
  document.getElementById(currSquare).className = "";
  document.getElementById(currSquare).onmousedown = toggleColor;
}

function setSquareB(thisSquare) {
  var currSquare = "squareB" + thisSquare;
  var colPlace = new Array(
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4
  );
  var colBasis = colPlace[thisSquare] * 15;
  var newNum;
  do {
    newNum = colBasis + getNewNum() + 1;
  } while (usedNums[newNum]);
  usedNums[newNum] = true;
  document.getElementById(currSquare).innerHTML = newNum;
  document.getElementById(currSquare).className = "";
  document.getElementById(currSquare).onmousedown = toggleColor;
}

function setSquareC(thisSquare) {
  var currSquare = "squareC" + thisSquare;
  var colPlace = new Array(
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4
  );
  var colBasis = colPlace[thisSquare] * 15;
  var newNum;
  do {
    newNum = colBasis + getNewNum() + 1;
  } while (usedNums[newNum]);
  usedNums[newNum] = true;
  document.getElementById(currSquare).innerHTML = newNum;
  document.getElementById(currSquare).className = "";
  document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}
function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  }
  newCard();
  return false;
}

function toggleColor(evt) {
  if (evt) {
    var thisSquare = evt.target;
  } else {
    var thisSquare = window.event.srcElement;
  }

  if (thisSquare.className == "") {
    thisSquare.className = "pickedBG";
  } else {
    thisSquare.className = "";
  }

  // checkWin();
}

function checkWin() {
  var winningOption = -1;
  var setSquares = 0;
  var winners = new Array(
    31,
    992,
    15360,
    507904,
    541729,
    557328,
    1083458,
    2162820,
    4329736,
    8519745,
    8659472,
    16252928
  );
  for (var i = 0; i < 25; i++) {
    var currSquare = "square" + i;
    if (document.getElementById(currSquare).className != "") {
      document.getElementById(currSquare).className = "pickedBG";
      setSquares = setSquares | Math.pow(2, i);
    }
  }
  for (var i = 0; i < winners.length; i++) {
    if ((winners[i] & setSquares) == winners[i]) {
      winningOption = i;
    }
  }
  if (winningOption > -1) {
    for (var i = 0; i < 25; i++) {
      if (winners[winningOption] & Math.pow(2, i)) {
        currSquare = "square" + i;
        document.getElementById(currSquare).className = "winningBG";
      }
    }
  }
}
