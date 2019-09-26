var xTurn = true;
function gamePiece(ID) {
  if (xTurn) {
    document.getElementById(ID).innerHTML = "X";
  } else {
    document.getElementById(ID).innerHTML = "O";
  }
  xTurn = !xTurn;
}

function changeMarkerToX() {
  var gameMarker = "X";
  console.log("The X Button Has Been Clicked");
}

function changeMarkerToO() {
  var gameMarker = "O";
  console.log("The O Button Has Been Clicked");
}
