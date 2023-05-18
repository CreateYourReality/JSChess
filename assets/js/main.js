
const chessBoard = document.querySelector(".chess-board");
const whitePlayer = document.querySelector(".white-player");
const blackPlayer = document.querySelector(".black-player");
const chessRows = 8;
const chessColumns = 8;

let allChessFields = [];


let activeField = "0";
let lastActiveField = "1";

let chessBoardFields = [
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7]
];

const CreateChessField = () => {
  for(let y = 0; y < chessColumns;y++){
    for(let x = 0; x < chessRows; x++){
        chessBoard.innerHTML += "<div id='" +NumberToLetter(y) + (x+1)+"' ondrop='drop(event)' ondragover='allowDrop(event)' class='chessField'>"+NumberToLetter(y)+(x+1) +"</div>";
    }
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
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));


    let chessboardRow = LetterToNumber(ev.target.id.slice(0,1));
    let chessboardColumn = Number(ev.target.id.slice(1,2));

    console.log("test: "+typeof data);

    SetArrayPointer(chessboardRow,chessboardColumn,data);
    allChessFields = document.querySelectorAll(".chessField");


    allChessFields.forEach(field => { //das angeklickte feld auch wieder abwählen können
      field.addEventListener("click", () => {
        activeField = field;

        if(lastActiveField == "1"){
          lastActiveField = field;
          field.classList.toggle("active");
        }
        if(lastActiveField == activeField){
          
        }else{
          lastActiveField.classList.toggle("active");
          lastActiveField = activeField;
          field.classList.toggle("active");

        }

        console.log("ich habe geklickt: "+field.id);

        let fieldLetter = Number(LetterToNumber(field.id.slice(0,1)));
        let fieldNumber = Number(field.id.slice(1,2));

        console.log(fieldLetter,fieldNumber);

        if(chessBoardFields[fieldLetter-1][fieldNumber-1] == "wPawn2"){
          document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber-1)).classList.add("active");      
          document.getElementById(NumberToLetter(fieldLetter-2)+String(fieldNumber-1)).classList.add("active");      
        } 

    })
  })

  //  console.log(allChessFields);
   // console.log(chessboardRow);
   // console.log(chessboardColumn);
   // console.log(data);
  }




CreateChessField();
whitePlayer.innerHTML += Pawn[0].tower;
whitePlayer.innerHTML += Pawn[1].tower;
