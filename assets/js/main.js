
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

const CreateNewGame = () => {
  CreateChessField();
for(let i = 0; i < 8; i++){
  whitePlayer.innerHTML += Pawn[i].tower;
  blackPlayer.innerHTML += Pawn[i+8].tower;
}

for(let i = 0; i < 2; i++){
  whitePlayer.innerHTML += Rook[i].tower;
  blackPlayer.innerHTML += Rook[i+2].tower;

  whitePlayer.innerHTML += Knight[i].tower;
  blackPlayer.innerHTML += Knight[i+2].tower;

  whitePlayer.innerHTML += Bishop[i].tower;
  blackPlayer.innerHTML += Bishop[i+2].tower;
}

whitePlayer.innerHTML += King[0].tower;
blackPlayer.innerHTML += King[1].tower;
whitePlayer.innerHTML += Queen[0].tower;
blackPlayer.innerHTML += Queen[1].tower;
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

       

        let fieldLetter = Number(LetterToNumber(field.id.slice(0,1)));
        let fieldNumber = Number(field.id.slice(1,2));

  //     console.log("ich habe geklickt: "+field.id + "("+fieldLetter+" "+fieldNumber+")");
  //     console.log("Auf diesem Feld befindet sich: "+chessBoardFields[fieldLetter-1][fieldNumber-1]);

        //alle Pawn ids ausloggen
        GamePiece.forEach(gamePiece => {
          gamePiece.forEach(figure => {
            if(figure.id == chessBoardFields[fieldLetter-1][fieldNumber-1]){ //wenn das Feld eine der Figuren enthält
              let currentFigure = figure.id;
              currentFigure = currentFigure.slice(0,-1); // Überprüfe ob die Figur vom Weißen(w...) oder Schwarzen(b...) Spieler ist

// ###### WHITE PAWN #######
              if(currentFigure == "wPawn"){
            //   if(){ //Wenn noch nicht bewegt
            //      document.getElementById(NumberToLetter(fieldLetter-3)+String(fieldNumber)).classList.add("active");  
            //   }
                ShowWhereICanMove(field,"straight","b");
                ShowWhereICanAttack(field,"fork","b");
              } //END WHITE PAWN
// ###### BLACK PAWN #######
              if(currentFigure == "bPawn"){   
            //   if(){ //Wenn noch nicht bewegt
            //      document.getElementById(NumberToLetter(fieldLetter-3)+String(fieldNumber)).classList.add("active");  
            //   }
                ShowWhereICanMove(field,"straight","w");
                ShowWhereICanAttack(field,"fork","w");
              } // END BLACK PAWN
// ###### WHITE KING ######           
              if(currentFigure == "wKing"){
                ShowWhereICanMove(field,"around");
                ShowWhereICanAttack(field,"around","b");
              }
// ###### BLACK KING ######     
              if(currentFigure == "bKing"){
                ShowWhereICanMove(field,"around");
                ShowWhereICanAttack(field,"around","w");
              }
// ###### WHITE BISHOP ######     
              if(currentFigure == "wBishop"){
                ShowWhereICanMove(field,"cross");
                ShowWhereICanAttack(field,"cross","b");
              }
// ###### BLACK BISHOP ######  
              if(currentFigure == "bBishop"){
                ShowWhereICanMove(field,"cross");
                ShowWhereICanAttack(field,"cross","w");
              }
// ###### WHITE ROOK ######     
              if(currentFigure == "wRook"){
                ShowWhereICanMove(field,"plus");
                ShowWhereICanAttack(field,"plus","b");
              }
// ###### BLACK ROOK ######  
              if(currentFigure == "bRook"){
                ShowWhereICanMove(field,"plus");
                ShowWhereICanAttack(field,"plus","w");
              }
// ###### WHITE QUEEN ######     
              if(currentFigure == "wQueen"){
                ShowWhereICanMove(field,"queen");
                ShowWhereICanAttack(field,"queen","b");
              }
// ###### BLACK QUEEN ######  
              if(currentFigure == "bQueen"){
                ShowWhereICanMove(field,"queen");
                ShowWhereICanAttack(field,"queen","w");
              }
// ###### WHITE KNIGHT ######     
              if(currentFigure == "wKnight"){
                ShowWhereICanMove(field,"jump");
                ShowWhereICanAttack(field,"jump","b");
              }
// ###### BLACK KNIGHT ######  
              if(currentFigure == "bKight"){
                ShowWhereICanMove(field,"jump");
                ShowWhereICanAttack(field,"jump","w");
              }
            } 
             });
        });
    })
  })


  //  console.log(allChessFields);
   // console.log(chessboardRow);
   // console.log(chessboardColumn);
   // console.log(data);
  }


  const CanIAttackOnThisField = (field,player) => {
    try{
      let canAttackField = field.querySelector(":first-child").id;
      if(canAttackField.slice(0,1) == player){
        field.classList.add("canAttack");      
      } 
    }catch (error){/*console.error(error);*/}
  }

  const ShowWhereICanAttack = (field,canAttack,player) => {
    let fieldLetter = Number(LetterToNumber(field.id.slice(0,1)));
    let fieldNumber = Number(field.id.slice(1,2));
    console.log("ich habe geklickt: "+field.id + "("+fieldLetter+" "+fieldNumber+")");
    console.log("Auf diesem Feld befindet sich: "+chessBoardFields[fieldLetter-1][fieldNumber-1]);
    let straight = document.getElementById(NumberToLetter(fieldLetter-2)+String(fieldNumber));
    let forkLeft = document.getElementById(NumberToLetter(fieldLetter-2)+String(fieldNumber-1));
    let forkRight = document.getElementById(NumberToLetter(fieldLetter-2)+String(fieldNumber+1));
    let sideLeft = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber-1));
    let sideRight = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber+1));
    let straightDown = document.getElementById(NumberToLetter(fieldLetter)+String(fieldNumber));
    let forkLeftDown = document.getElementById(NumberToLetter(fieldLetter)+String(fieldNumber-1));
    let forkRightDown = document.getElementById(NumberToLetter(fieldLetter)+String(fieldNumber+1));   

    if(canAttack == "around"){
        forkLeft ==  null ? true : CanIAttackOnThisField(forkLeft,player);
        forkRight ==  null ? true : CanIAttackOnThisField(forkRight,player);
        forkRightDown ==  null ? true : CanIAttackOnThisField(forkRightDown,player);
        forkLeftDown ==  null ? true : CanIAttackOnThisField(forkLeftDown,player);
        sideLeft == null ? true : CanIAttackOnThisField(sideLeft,player);
        sideRight == null ? true : CanIAttackOnThisField(sideRight,player);
        straight == null ? true : CanIAttackOnThisField(straight,player);
        straightDown == null ? true : CanIAttackOnThisField(straightDown,player);
    } 

    if(canAttack == "plus"){
      for(let i = 0; i < 8;i++){
        let left = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber-1-i));
        let right = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber+1+i));
        let up = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber));
        let down = document.getElementById(NumberToLetter(fieldLetter-2+i)+String(fieldNumber));

        left ==  null ? true : CanIAttackOnThisField(left,player);
        right ==  null ? true : CanIAttackOnThisField(right,player);
        up ==  null ? true : CanIAttackOnThisField(up,player);
        down ==  null ? true : CanIAttackOnThisField(down,player);
      }
    }

    if(canAttack == "cross"){
      for(let i = 0; i < 8;i++){
        let crossLeft = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber-1-i));
        let crossRight = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber+1+i));
        let crossRightDown = document.getElementById(NumberToLetter(fieldLetter+i)+String(fieldNumber+1+i));
        let crossLeftDown = document.getElementById(NumberToLetter(fieldLetter+i)+String(fieldNumber-1-i));
        crossLeft ==  null ? true : CanIAttackOnThisField(crossLeft,player);
        crossRight ==  null ? true : CanIAttackOnThisField(crossRight,player);
        crossRightDown ==  null ? true : CanIAttackOnThisField(crossRightDown,player);
        crossLeftDown ==  null ? true : CanIAttackOnThisField(crossLeftDown,player);
      }
    }

    if(canAttack == "fork"){
      if(player == "b"){
        forkLeft ==  null ? true : CanIAttackOnThisField(forkLeft,player);
        forkRight ==  null ? true : CanIAttackOnThisField(forkRight,player);
      }else{
        forkRightDown ==  null ? true : CanIAttackOnThisField(forkRightDown,player);
        forkLeftDown ==  null ? true : CanIAttackOnThisField(forkLeftDown,player);
      }
    }

    if(canAttack == "jump"){

    }

    if(canAttack == "queen"){

      //cross
      for(let i = 0; i < 8;i++){
        let crossLeft = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber-1-i));
        let crossRight = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber+1+i));
        let crossRightDown = document.getElementById(NumberToLetter(fieldLetter+i)+String(fieldNumber+1+i));
        let crossLeftDown = document.getElementById(NumberToLetter(fieldLetter+i)+String(fieldNumber-1-i));
        crossLeft ==  null ? true : CanIAttackOnThisField(crossLeft,player);
        crossRight ==  null ? true : CanIAttackOnThisField(crossRight,player);
        crossRightDown ==  null ? true : CanIAttackOnThisField(crossRightDown,player);
        crossLeftDown ==  null ? true : CanIAttackOnThisField(crossLeftDown,player);
      }

      //plus
      for(let i = 0; i < 8;i++){
        let left = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber-1-i));
        let right = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber+1+i));
        let up = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber));
        let down = document.getElementById(NumberToLetter(fieldLetter-2+i)+String(fieldNumber));

        left ==  null ? true : CanIAttackOnThisField(left,player);
        right ==  null ? true : CanIAttackOnThisField(right,player);
        up ==  null ? true : CanIAttackOnThisField(up,player);
        down ==  null ? true : CanIAttackOnThisField(down,player);
      }

      //around
      forkLeft ==  null ? true : CanIAttackOnThisField(forkLeft,player);
      forkRight ==  null ? true : CanIAttackOnThisField(forkRight,player);
      forkRightDown ==  null ? true : CanIAttackOnThisField(forkRightDown,player);
      forkLeftDown ==  null ? true : CanIAttackOnThisField(forkLeftDown,player);
      sideLeft == null ? true : CanIAttackOnThisField(sideLeft,player);
      sideRight == null ? true : CanIAttackOnThisField(sideRight,player);
      straight == null ? true : CanIAttackOnThisField(straight,player);
      straightDown == null ? true : CanIAttackOnThisField(straightDown,player);

    }




  }

  const ShowWhereICanMove = (field,canWalk,player) => {
    
        let fieldLetter = Number(LetterToNumber(field.id.slice(0,1)));
        let fieldNumber = Number(field.id.slice(1,2));

        console.log("ich habe geklickt: "+field.id + "("+fieldLetter+" "+fieldNumber+")");
        console.log("Auf diesem Feld befindet sich: "+chessBoardFields[fieldLetter-1][fieldNumber-1]);

        let straight = document.getElementById(NumberToLetter(fieldLetter-2)+String(fieldNumber));
        let forkLeft = document.getElementById(NumberToLetter(fieldLetter-2)+String(fieldNumber-1));
        let forkRight = document.getElementById(NumberToLetter(fieldLetter-2)+String(fieldNumber+1));

        let sideLeft = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber-1));
        let sideRight = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber+1));

        let straightDown = document.getElementById(NumberToLetter(fieldLetter)+String(fieldNumber));
        let forkLeftDown = document.getElementById(NumberToLetter(fieldLetter)+String(fieldNumber-1));
        let forkRightDown = document.getElementById(NumberToLetter(fieldLetter)+String(fieldNumber+1));


    if(canWalk == "cross"){
        for(let i = 0; i < 8;i++){
          let crossLeft = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber-1-i));
          let crossRight = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber+1+i));
          let crossRightDown = document.getElementById(NumberToLetter(fieldLetter+i)+String(fieldNumber+1+i));
          let crossLeftDown = document.getElementById(NumberToLetter(fieldLetter+i)+String(fieldNumber-1-i));

          crossLeft ==  null ? true : crossLeft.classList.add("active");
          crossRight ==  null ? true : crossRight.classList.add("active");
          crossRightDown ==  null ? true : crossRightDown.classList.add("active");
          crossLeftDown ==  null ? true : crossLeftDown.classList.add("active");
        }
    }

    if(canWalk == "straight"){
      if(player == "b"){
        straight ==  null ? true : straight.classList.add("active");

      }else{
        straightDown ==  null ? true : straightDown.classList.add("active");
      }
    }

    if(canWalk == "plus"){
      for(let i = 0; i < 8;i++){
        let left = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber-1-i));
        let right = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber+1+i));
        let up = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber));
        let down = document.getElementById(NumberToLetter(fieldLetter-2+i)+String(fieldNumber));

        left ==  null ? true : left.classList.add("active");
        right ==  null ? true : right.classList.add("active");
        up ==  null ? true : up.classList.add("active");
        down ==  null ? true : down.classList.add("active");
      }
    }

    if(canWalk == "around"){
      forkLeft ==  null ? true : forkLeft.classList.add("active");
      forkRight ==  null ? true : forkRight.classList.add("active");
      forkRightDown ==  null ? true : forkRightDown.classList.add("active");
      forkLeftDown ==  null ? true : forkLeftDown.classList.add("active");
      sideLeft == null ? true : sideLeft.classList.add("active");
      sideRight == null ? true : sideRight.classList.add("active");
      straight == null ? true : straight.classList.add("active");
      straightDown == null ? true : straightDown.classList.add("active");

  }


  if(canWalk == "queen"){

    //cross
    for(let i = 0; i < 8;i++){
      let crossLeft = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber-1-i));
      let crossRight = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber+1+i));
      let crossRightDown = document.getElementById(NumberToLetter(fieldLetter+i)+String(fieldNumber+1+i));
      let crossLeftDown = document.getElementById(NumberToLetter(fieldLetter+i)+String(fieldNumber-1-i));
      crossLeft ==  null ? true : crossLeft.classList.add("active");
      crossRight ==  null ? true : crossRight.classList.add("active");
      crossRightDown ==  null ? true : crossRightDown.classList.add("active");
      crossLeftDown ==  null ? true : crossLeftDown.classList.add("active");
    }

    //plus
    for(let i = 0; i < 8;i++){
      let left = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber-1-i));
      let right = document.getElementById(NumberToLetter(fieldLetter-1)+String(fieldNumber+1+i));
      let up = document.getElementById(NumberToLetter(fieldLetter-2-i)+String(fieldNumber));
      let down = document.getElementById(NumberToLetter(fieldLetter-2+i)+String(fieldNumber));

      left ==  null ? true : left.classList.add("active");
      right ==  null ? true : right.classList.add("active");
      up ==  null ? true : up.classList.add("active");
      down ==  null ? true : down.classList.add("active");
    }

    //around
    forkLeft ==  null ? true : forkLeft.classList.add("active");
    forkRight ==  null ? true : forkRight.classList.add("active");
    forkRightDown ==  null ? true : forkRightDown.classList.add("active");
    forkLeftDown ==  null ? true : forkLeftDown.classList.add("active");
    sideLeft == null ? true : sideLeft.classList.add("active");
    sideRight == null ? true : sideRight.classList.add("active");
    straight == null ? true : straight.classList.add("active");
    straightDown == null ? true : straightDown.classList.add("active");

  }

  }

  CreateNewGame();
