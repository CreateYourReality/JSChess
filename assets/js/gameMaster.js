
let chessBoardFields = [
    ["FIELD0","FIELD1","FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"],
    ["FIELD0","FIELD1","FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"],
    ["FIELD0","FIELD1","FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"],
    ["FIELD0","FIELD1","FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"],
    ["FIELD0","FIELD1","FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"],
    ["FIELD0","FIELD1","FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"],
    ["FIELD0","FIELD1","FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"],
    ["FIELD0","FIELD1","FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"]];
  
  //wildcards
  const firstChild = ":first-child";
  const cross = "cross";
  const straight = "straight";
  const plus = "plus";
  const around = "around";
  const jump = "jump";
  const queen = "queen";
  const fork = "fork";
  const empty = "empty";
  
  const fieldX = "FIELDX";
  
  const PAWN = "Pawn";
  const QUEEN = "Queen";
  const KING = "King";
  const ROOK = "Rook";
  const BISHOP = "Bishop";
  const KNIGHT = "Knight";
  
  const scoreBarPlayer = document.createElement("h2");
  const borderCheckBox = document.createElement("input");
  const darkmodeCheckBox = document.createElement("input");
  const main = document.querySelector("main");
  
  const moveFieldClass = "moveHere";
  const activeFieldClass = "active";
  const attackFieldClass = "canAttack";
  const scanFieldClass = "scanHere";
  const showGridClass = "showGrid";
  const darkModeClass = "darkMode";
  const chessFieldClass = "chessField";
  const infoTextClass = "infoText";
  
  const blueTurnText = "Blue Turn";
  const redTurnText = "Red Turn";
  const darkModeText = "Dark Mode";
  const showGridText = "Show Grid";
  const infoText = "DRAG & DROP TO MOVE AND ATTACK!";
  const chooseNewFigureText = "Bauernumwandlung - [1]ROOK [2]QUEEN [3]KNIGHT [4]BISHOP";
  
  const bluePlayerLetter = "w";
  const redPlayerLetter = "b";
  
  let rookCounter = 4;
  let queenCounter = 2;
  let knightCounter = 4;
  let bishopCounter = 4;
  
  let activeField = "0";
  let lastActiveField = empty;
  let allChessFields = [];
  let activeFieldArray = [];
  let scanFieldArray = [];
  let attackFieldArray = [];
  let playerturn = false; //false = white | true = black
  
  const chessBoard = document.querySelector(".chess-board");
  const whitePlayer = document.querySelector(".white-player");
  const blackPlayer = document.querySelector(".black-player");
  const chessRows = 8;
  const chessColumns = 8;
  
  const GetTowerText = (letter,figure,counter) => {
    return `<img src="./assets/img/${letter}${figure}.png" alt="${letter}${figure}${counter}" id="${letter}${figure}${counter}" draggable="true" ondragstart="drag(event)">`;
  }
  
  const CreateNewGame = () => {
    CreateChessField();
    allChessFields = document.querySelectorAll("."+chessFieldClass);
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
    !playerturn ? scoreBarPlayer.textContent = blueTurnText : scoreBarPlayer.textContent = redTurnText;
  }
  
  const ToogleBorder = () => {
      allChessFields.forEach((field) => {
        field.classList.toggle(showGridClass);
      }) 
  }
  
  const ToogleDarkmode = () => {
    main.classList.toggle(darkModeClass)
  }
  
  const CreateChessField = () => {
    for(let y = 0; y < chessColumns;y++){
      for(let x = 0; x < chessRows; x++){
          let newChessField = document.createElement("div");
          newChessField.setAttribute("ondrop", "drop(event)");
          newChessField.setAttribute("ondragover", 'allowDrop(event)');
          newChessField.id = NumberToLetter(y)+(x+1);
          newChessField.classList.add(chessFieldClass);
          newChessField.textContent = NumberToLetter(y)+(x+1);
          chessBoard.appendChild(newChessField);
      }
    }
    const scoreBar = document.createElement("aside");
    ChangePlayerTurnText();
    scoreBar.appendChild(scoreBarPlayer);
    borderCheckBox.addEventListener("click",ToogleBorder);
    borderCheckBox.setAttribute("type","checkbox");
    borderCheckBox.setAttribute("name",showGridClass);
    darkmodeCheckBox.addEventListener("click",ToogleDarkmode);
    darkmodeCheckBox.setAttribute("type","checkbox");
    darkmodeCheckBox.setAttribute("name",darkModeClass);
    let div = document.createElement("div");
    let div2 = document.createElement("div"); 
    borderCheckBoxText = document.createElement("label");
    darkmodeCheckBoxText = document.createElement("label");
    darkmodeCheckBoxText.setAttribute("for",darkModeClass);
    borderCheckBoxText.setAttribute("for",showGridClass);
    darkmodeCheckBoxText.textContent = darkModeText;
    borderCheckBoxText.textContent = showGridText;
    div.appendChild(borderCheckBox);
    div.appendChild(borderCheckBoxText);
    div2.appendChild(darkmodeCheckBox);
    div2.appendChild(darkmodeCheckBoxText);
    scoreBar.appendChild(div);
    scoreBar.appendChild(div2);
    let pTag = document.createElement("p");
    pTag.classList.add(infoTextClass);
    pTag.textContent = infoText;
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
      case 0: return "A";
      case 1: return "B";
      case 2: return "C";
      case 3: return "D";
      case 4: return "E";
      case 5: return "F";
      case 6: return "G";
      case 7: return "H";
      default : break;
    }
  }
  
  const LetterToNumber = (letter) => {
    switch(letter){
      case "A": return 1;
      case "B": return 2;
      case "C": return 3;
      case "D": return 4;
      case "E": return 5;
      case "F": return 6;
      case "G": return 7;
      case "H": return 8;
      default : break;
    }
  }