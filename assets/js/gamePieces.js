
/*
König - King.
Dame - Queen.
Turm - Rook.
Läufer - Bishop.
Springer - Knight.
Bauer - Pawn. 
*/
const GamePiece = [

  Bishop = [
  {
    tower:'<img src="./assets/img/wBishop.png" alt"wBishop1" id="wBishop1" draggable="true" ondragstart="drag(event)">',
    id:"wBishop1",
    canWalk:"cross",
    canAttack:"cross",
  },
  {
    tower:'<img src="./assets/img/wBishop.png" alt"wBishop2" id="wBishop2" draggable="true" ondragstart="drag(event)">',
    id:"wBishop2",
    canWalk:"cross",
    canAttack:"cross",
  },
  {
    tower:'<img src="./assets/img/bBishop.png" alt"bBishop1" id="bBishop1" draggable="true" ondragstart="drag(event)">',
    id:"bBishop1",
    canWalk:"cross",
    canAttack:"cross",
  },
  {
    tower:'<img src="./assets/img/bBishop.png" alt"bBishop2" id="bBishop2" draggable="true" ondragstart="drag(event)">',
    id:"bBishop2",
    canWalk:"cross",
    canAttack:"cross",
  }
  ],
  Pawn = [
    {
      tower:  "<img src='./assets/img/wPawn.png' alt'wPawn1' id='wPawn1' draggable='true' ondragstart='drag(event)'>",
      id:"wPawn1",
      canWalk: "straight",
      canAttack: "fork"    
    },
    {
      tower:  "<img src='./assets/img/wPawn.png' alt'wPawn2' id='wPawn2' draggable='true' ondragstart='drag(event)'>",
      id:"wPawn2",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/wPawn.png' alt'wPawn3'  id='wPawn3' draggable='true' ondragstart='drag(event)'>",
      id:"wPawn3",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/wPawn.png' alt'wPawn4' id='wPawn4' draggable='true' ondragstart='drag(event)'>",
      id:"wPawn4",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/wPawn.png' alt'wPawn5' id='wPawn5' draggable='true' ondragstart='drag(event)'>",
      id:"wPawn5",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/wPawn.png' alt'wPawn6' id='wPawn6' draggable='true' ondragstart='drag(event)'>",
      id:"wPawn6",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/wPawn.png' alt'wPawn7' id='wPawn7' draggable='true' ondragstart='drag(event)'>",
      id:"wPawn7",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/wPawn.png' alt'wPawn8' id='wPawn8' draggable='true' ondragstart='drag(event)'>",
      id:"wPawn8",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/bPawn.png' alt'wPawn1' id='bPawn1' draggable='true' ondragstart='drag(event)'>",
      id:"bPawn1",
      canWalk: "straight",
      canAttack: "fork"    
    },
    {
      tower:  "<img src='./assets/img/bPawn.png' alt'wPawn2' id='bPawn2' draggable='true' ondragstart='drag(event)' >",
      id:"bPawn2",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/bPawn.png' alt'wPawn3' id='bPawn3' draggable='true' ondragstart='drag(event)'>",
      id:"bPawn3",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/bPawn.png' alt'wPawn4' id='bPawn4' draggable='true' ondragstart='drag(event)'>",
      id:"bPawn4",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/bPawn.png' alt'wPawn5' id='bPawn5' draggable='true' ondragstart='drag(event)'>",
      id:"bPawn5",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/bPawn.png' alt'wPawn6' id='bPawn6' draggable='true' ondragstart='drag(event)'>",
      id:"bPawn6",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/bPawn.png' alt'wPawn7' id='bPawn7' draggable='true' ondragstart='drag(event)'>",
      id:"bPawn7",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<img src='./assets/img/bPawn.png' alt'wPawn8' id='bPawn8' draggable='true' ondragstart='drag(event)'>",
      id:"bPawn8",
      canWalk: "straight",
      canAttack: "fork" 
    },
  ],
  Knight = [
    {
      tower: '<img src="./assets/img/wKnight.png" alt="wKnight1" id="wKnight1" draggable="true" ondragstart="drag(event)">',
      id: "wKnight1",
      canWalk: "jump",
      canAttack: "jump"
    },
    {
      tower: '<img src="./assets/img/wKnight.png" alt="wKnight2" id="wKnight2" draggable="true" ondragstart="drag(event)">',
      id: "wKnight2",
      canWalk: "jump",
      canAttack: "jump"
    },
    {
      tower: '<img src="./assets/img/bKnight.png" alt="bKnight1" id="bKnight1" draggable="true" ondragstart="drag(event)">',
      id: "bKnight1",
      canWalk: "jump",
      canAttack: "jump"
    },
    {
      tower: '<img src="./assets/img/bKnight.png" alt="bKnight2" id="bKnight2" draggable="true" ondragstart="drag(event)">',
      id: "bKnight2",
      canWalk: "jump",
      canAttack: "jump"
    }
  ],
  Rook = [
    {
      tower: '<img src="./assets/img/wRook.png" alt="wRook1" id="wRook1" draggable="true" ondragstart="drag(event)">',
      id: "wRook1",
      canWalk: "plus",
      canAttack: "plus"
    },
    {
      tower: '<img src="./assets/img/wRook.png" alt="wRook2" id="wRook2" draggable="true" ondragstart="drag(event)">',
      id: "wRook2",
      canWalk: "plus",
      canAttack: "plus"
    },
    {
      tower: '<img src="./assets/img/bRook.png" alt="bRook1" id="bRook1" draggable="true" ondragstart="drag(event)">',
      id: "bRook1",
      canWalk: "plus",
      canAttack: "plus"
    },
    {
      tower: '<img src="./assets/img/bRook.png" alt="bRook2" id="bRook2" draggable="true" ondragstart="drag(event)">',
      id: "bRook2",
      canWalk: "plus",
      canAttack: "plus"
    }
  ],
  King = [
    {
      tower: '<img src="./assets/img/wKing.png" alt="wKing1" id="wKing1" draggable="true" ondragstart="drag(event)">',
      id: "wKing1",
      canWalk: "around",
      canAttack: "around"
    },
    {
      tower: '<img src="./assets/img/bKing.png" alt="bKing1" id="bKing1" draggable="true" ondragstart="drag(event)">',
      id: "bKing1",
      canWalk: "around",
      canAttack: "around"
    }
  ],
  Queen = [
    {
      tower: '<img src="./assets/img/wQueen.png" alt="wQueen1" id="wQueen1" draggable="true" ondragstart="drag(event)">',
      id: "wQueen1",
      canWalk: "queen",
      canAttack: "queen"
    },
    {
      tower: '<img src="./assets/img/bQueen.png" alt="bQueen1" id="bQueen1" draggable="true" ondragstart="drag(event)">',
      id: "bQueen1",
      canWalk: "queen",
      canAttack: "queen"
    }
  ]
]

const scoreBarPlayer = document.createElement("h2");
const borderCheckBox = document.createElement("input");
const darkmodeCheckBox = document.createElement("input");
const main = document.querySelector("main"); 

const CreateNewGame = () => {
  CreateChessField();
  allChessFields = document.querySelectorAll(".chessField");
  document.getElementById("H4").innerHTML += King[0].tower;
  SetArrayPointer(8,4,"wKing1");
  document.getElementById("H5").innerHTML += Queen[0].tower;
  SetArrayPointer(8,5,"wQueen1");
  document.getElementById("A4").innerHTML += King[1].tower;
  SetArrayPointer(1,4,"bKing1");
  document.getElementById("A5").innerHTML += Queen[1].tower;
  SetArrayPointer(1,5,"bQueen1");
  document.getElementById("H1").innerHTML += Rook[0].tower;
  SetArrayPointer(8,1,"wRook1");
  document.getElementById("H8").innerHTML += Rook[1].tower;
  SetArrayPointer(8,8,"wRook2");
  document.getElementById("A1").innerHTML += Rook[2].tower;
  SetArrayPointer(1,1,"bRook1");
  document.getElementById("A8").innerHTML += Rook[3].tower;
  SetArrayPointer(1,8,"bRook2");
  document.getElementById("H2").innerHTML += Knight[0].tower;
  SetArrayPointer(8,2,"wKnight1");
  document.getElementById("H7").innerHTML += Knight[1].tower;
  SetArrayPointer(8,7,"wKnight2");
  document.getElementById("A2").innerHTML += Knight[2].tower;
  SetArrayPointer(1,2,"bKnight1");
  document.getElementById("A7").innerHTML += Knight[3].tower;
  SetArrayPointer(1,7,"bKnight2");
  document.getElementById("H3").innerHTML += Bishop[0].tower;
  SetArrayPointer(8,3,"wBishop1");
  document.getElementById("H6").innerHTML += Bishop[1].tower;
  SetArrayPointer(8,6,"wBishop2");
  document.getElementById("A3").innerHTML += Bishop[2].tower;
  SetArrayPointer(1,3,"bBishop1");
  document.getElementById("A6").innerHTML += Bishop[3].tower;
  SetArrayPointer(1,6,"bBishop2");
  for(let i = 0; i < 8; i++){
    document.getElementById("G"+(i+1)).innerHTML += Pawn[i].tower;
    document.getElementById("B"+(i+1)).innerHTML += Pawn[i+8].tower;
    SetArrayPointer(7,(i+1),"wPawn"+(i+1));
    SetArrayPointer(2,(i+1),"bPawn"+(i+1));
  }
}

const ChangePlayerTurnText = () => {
  if(playerturn == false){
    scoreBarPlayer.textContent = "BLUE TURN";
  }else {
    scoreBarPlayer.textContent =  "RED TURN";
  }
}

const ToogleBorder = () => {
    allChessFields.forEach((field) => {
      field.classList.toggle("showGrid");
    }) 
}

const ToogleDarkmode = () => {
  main.classList.toggle("darkmode")
}

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
  const scoreBar = document.createElement("aside");
  ChangePlayerTurnText();
  scoreBar.appendChild(scoreBarPlayer);
  borderCheckBox.addEventListener("click",ToogleBorder);
  borderCheckBox.setAttribute("type","checkbox");
  borderCheckBox.setAttribute("name","showGrid");
  darkmodeCheckBox.addEventListener("click",ToogleDarkmode);
  darkmodeCheckBox.setAttribute("type","checkbox");
  darkmodeCheckBox.setAttribute("name","darkMode");
  let div = document.createElement("div");
  let div2 = document.createElement("div"); 
  borderCheckBoxText = document.createElement("label");
  darkmodeCheckBoxText = document.createElement("label");
  darkmodeCheckBoxText.setAttribute("for","darkMode");
  borderCheckBoxText.setAttribute("for","showGrid");
  darkmodeCheckBoxText.textContent = "Dark Mode";
  borderCheckBoxText.textContent = "Show Grid";
  div.appendChild(borderCheckBox);
  div.appendChild(borderCheckBoxText);
  div2.appendChild(darkmodeCheckBox);
  div2.appendChild(darkmodeCheckBoxText);
  scoreBar.appendChild(div);
  scoreBar.appendChild(div2);
  let pTag = document.createElement("p");
  pTag.classList.add("infoText");
  pTag.textContent = "DRAG & DROP TO MOVE AND ATTACK!";
  scoreBar.appendChild(pTag);
  chessBoard.appendChild(scoreBar)
}

function allowDrop(ev) {
  ev.preventDefault();
}
  
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

  const NumberToLetter = (zahl) =>{
    switch(zahl){
        case 0: return "A"; break;
        case 1: return "B"; break;
        case 2: return "C"; break;
        case 3: return "D"; break;
        case 4: return "E"; break;
        case 5: return "F"; break;
        case 6: return "G"; break;
        case 7: return "H"; break;
        default : break;
    }
}

const LetterToNumber = (letter) => {
  switch(letter){
      case "A": return 1; break;
      case "B": return 2; break;
      case "C": return 3; break;
      case "D": return 4; break;
      case "E": return 5; break;
      case "F": return 6; break;
      case "G": return 7; break;
      case "H": return 8; break;
      default : break;
  }
}