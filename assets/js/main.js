const chessBoard = document.querySelector(".chess-board");
const whitePlayer = document.querySelector(".white-player");
const blackPlayer = document.querySelector(".black-player");
const chessRows = 8;
const chessColumns = 8;
let chessBoardFields = [
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7]];
let activeField = "0";
let lastActiveField = "empty";
let allChessFields = [];
let activeFieldArray = [];
let attackFieldArray = [];

const CreateChessField = () => {
  for(let y = 0; y < chessColumns;y++){
    for(let x = 0; x < chessRows; x++){
        let newChessField = document.createElement("div");
        newChessField.setAttribute("ondrop", "drop(event)");
        newChessField.setAttribute("ondragover", 'allowDrop(event)');
        newChessField.id = NumberToLetter(y)+(x+1);
        newChessField.classList.add("chessField");
        newChessField.textContent = NumberToLetter(y)+(x+1);
        chessBoard.appendChild(newChessField);
    }
  }
}

const CreateNewGame = () => {
  CreateChessField();
  allChessFields = document.querySelectorAll(".chessField");
  whitePlayer.innerHTML += King[0].tower;
  whitePlayer.innerHTML += Queen[0].tower;
  blackPlayer.innerHTML += King[1].tower;
  blackPlayer.innerHTML += Queen[1].tower;
  for(let i = 0; i < 2; i++){
    whitePlayer.innerHTML += Rook[i].tower;
    blackPlayer.innerHTML += Rook[i+2].tower;
    whitePlayer.innerHTML += Knight[i].tower;
    blackPlayer.innerHTML += Knight[i+2].tower;
    whitePlayer.innerHTML += Bishop[i].tower;
    blackPlayer.innerHTML += Bishop[i+2].tower;
  }
  for(let i = 0; i < 8; i++){
    whitePlayer.innerHTML += Pawn[i].tower;
    blackPlayer.innerHTML += Pawn[i+8].tower;
  }
}
//Packt die Figur in ein Feld in dem Array
  const SetArrayPointer = (x,y,gamepiece) => {
    chessBoardFields[x-1][y-1] = gamepiece;
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

//setzt das active Feld und entfernt alle felder die zu ihm gehören
  const SetActiveField = (field) => {

   /* if(activeField == field){ //geht nicht, weil active beim clicken wegen dem click auf dem feld direkt neu gesetzt wird.
      console.log("gleiche feld");
    } */

    activeField = field;
    if(lastActiveField == "empty"){
      lastActiveField = field;
      field.classList.toggle("active2");
      return;
    } 

    if(lastActiveField != activeField){
      lastActiveField.classList.toggle("active2");
      lastActiveField = activeField;
      activeFieldArray.forEach(field => {
        field.classList.remove("active");
      });
      attackFieldArray.forEach(field => {
        field.classList.remove("canAttack");
      });
      field.classList.toggle("active2");
    } 
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    try{
      ev.target.appendChild(document.getElementById(data));
    }catch(error){/*console.error(error)*/}
    // setzt die figur in ein array
    let chessboardRow = LetterToNumber(ev.target.id.slice(0,1));
    let chessboardColumn = Number(ev.target.id.slice(1,2));
    SetArrayPointer(chessboardRow,chessboardColumn,data);
    allChessFields.forEach(field => { //das angeklickte feld auch wieder abwählen können
      field.addEventListener("click", () => {
        SetActiveField(field); 
        let fieldLetter = Number(LetterToNumber(field.id.slice(0,1)));
        let fieldNumber = Number(field.id.slice(1,2));
        //alle Pawn ids ausloggen
        GamePiece.forEach(gamePiece => {
          gamePiece.forEach(figure => {
            if(figure.id == chessBoardFields[fieldLetter-1][fieldNumber-1]){ //wenn das Feld eine der Figuren enthält
              let currentFigure = figure.id;
              colorCurrentFigure = currentFigure.slice(0,1) == "w" ? colorCurrentFigure = "b" : colorCurrentFigure = "w";
              currentFigure = currentFigure.slice(1,currentFigure.length-1); // Überprüfe ob die Figur vom Weißen(w...) oder Schwarzen(b...) Spieler ist
              switch(currentFigure){
                case "Pawn": ShowFigureOptions(field, "straight", "fork", colorCurrentFigure);break;
                case "King": ShowFigureOptions(field, "around", "around", colorCurrentFigure);break;
                case "Bishop": ShowFigureOptions(field, "cross", "cross", colorCurrentFigure);break;
                case "Rook": ShowFigureOptions(field, "plus", "plus", colorCurrentFigure);break;  
                case "Queen": ShowFigureOptions(field, "queen", "queen", colorCurrentFigure);break;  
                case "Knight": ShowFigureOptions(field, "jump", "jump", colorCurrentFigure);break;    
              }
            } 
          });
        });
      })
    })
  }

  CreateNewGame();
