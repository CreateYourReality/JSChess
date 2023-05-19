
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
  whitePlayer.innerHTML += King[0].tower;
  whitePlayer.innerHTML += Queen[0].tower;
  blackPlayer.innerHTML += King[1].tower;
  blackPlayer.innerHTML += Queen[1].tower;
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

 //   console.log("test: "+typeof data);

    SetArrayPointer(chessboardRow,chessboardColumn,data);//setzt die figur in ein array
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

   // console.log(chessBoardFields);
   // console.log(allChessFields);
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

  const directions = {
      straight: [-2,0],
      forkLeft:[-2,-1],
      forkRight:[-2,1],
      sideLeft:[-1,-1],
      sideRight:[-1,1],
      straightDown:[0,0],
      forkLeftDown:[0,-1],
      forkRightDown:[0,+1]
    }

  const getDirection = (field,[x,y]) => {
    let fieldLetter = Number(LetterToNumber(field.id.slice(0,1)));
    let fieldNumber = Number(field.id.slice(1,2));
//    console.log("ich habe geklickt: "+field.id + "("+fieldLetter+" "+fieldNumber+")");
//    console.log("Auf diesem Feld befindet sich: "+chessBoardFields[fieldLetter-1][fieldNumber-1]);
    return document.getElementById(NumberToLetter(fieldLetter+x)+String(fieldNumber+y));
  }

  const ShowWhereICanMove = (field,canWalk,player) => {
    switch(canWalk){
      case "cross": CrossMove(field);break;
      case "straight": StraightMove(field,player);break;
      case "plus": PlusMove(field);break;
      case "around": AroundMove(field);break;
      case "jump": break;
      case "queen": CrossMove(field);PlusMove(field); AroundMove(field);break;
    }
  }

  const ShowWhereICanAttack = (field,canAttack,player) => {
    switch(canAttack) {
      case "around": AroundAttack(field,player);break;
      case "plus": PlusAttack(field,player);break;
      case "cross": CrossAttack(field,player);break;
      case "fork": StraightAttack(field,player);
      case "jump": break;
      case "queen":CrossAttack(field,player);PlusAttack(field,player);AroundAttack(field,player);break;
    }
  }

  const SetMoveField = (field,a,b) => {
    let activeField = getDirection(field,[a, b]);      
    activeField ==  null ? true : activeField.classList.add("active");
  }

  const SetAttackField = (field,a,b,player) => {
    let attackField = getDirection(field,[a, b]);      
    attackField ==  null ? true : CanIAttackOnThisField(attackField,player);
  }

  const CrossAttack = (field,player) => {
    for(let i = 0; i < 8;i++){
      SetAttackField(field,directions.forkLeft[0]-i,directions.forkLeft[1]-i,player);
      SetAttackField(field,directions.forkRight[0]-i,directions.forkRight[1]+i,player);
      SetAttackField(field,directions.forkRightDown[0]+i,directions.forkRightDown[1]+i,player);
      SetAttackField(field,directions.forkLeftDown[0]+i,directions.forkLeftDown[1]-i,player);
    }
  }

  const CrossMove = (field) => {
    for(let i = 0; i < 8;i++){
      SetMoveField(field,directions.forkLeft[0]-i,directions.forkLeft[1]-i);
      SetMoveField(field,directions.forkRight[0]-i,directions.forkRight[1]+i);
      SetMoveField(field,directions.forkRightDown[0]+i,directions.forkRightDown[1]+i);
      SetMoveField(field,directions.forkLeftDown[0]+i,directions.forkLeftDown[1]-i);
    }
  }

  const PlusMove = (field) => {
    for(let i = 0; i < 8;i++){
      SetMoveField(field,directions.sideLeft[0],directions.sideLeft[1]-i);
      SetMoveField(field,directions.sideRight[0],directions.sideRight[1]+i);
      SetMoveField(field,directions.straight[0]-i,directions.straight[1]);
      SetMoveField(field,directions.straightDown[0]+i,directions.straightDown[1]);
    }
  }

  const PlusAttack = (field,player) => {
    for(let i = 0; i < 8;i++){
      SetAttackField(field,directions.sideLeft[0],directions.sideLeft[1]-i,player);
      SetAttackField(field,directions.sideRight[0],directions.sideRight[1]+i,player);
      SetAttackField(field,directions.straight[0]-i,directions.straight[1],player);
      SetAttackField(field,directions.straightDown[0]+i,directions.straightDown[1],player);
    }
  }

  const AroundMove = (field) => {
    let directionArray = Object.values(directions);
    for(let i = 0; i < directionArray.length; i++){
      SetMoveField(field,directionArray[i][0],directionArray[i][1]);
    }
  }

  const AroundAttack = (field,player) => {
    let directionArray = Object.values(directions);
    for(let i = 0; i < directionArray.length; i++){
      SetAttackField(field,directionArray[i][0],directionArray[i][1],player);
    }
  }

  const StraightMove = (field,player) => {
    if(player == "b"){
      let up = getDirection(field,directions.straight); 
      up ==  null ? true : up.classList.add("active");
    }else{
      let down = getDirection(field,directions.straightDown); 
      down ==  null ? true : down.classList.add("active");
    }
  }

  const StraightAttack = (field,player) => {
    if(player == "b"){
      SetAttackField(field,directions.forkLeft[0],directions.forkLeft[1],player);
      SetAttackField(field,directions.forkRight[0],directions.forkRight[1],player);
    }else{
      SetAttackField(field,directions.forkLeftDown[0],directions.forkLeftDown[1],player);
      SetAttackField(field,directions.forkRightDown[0],directions.forkRightDown[1],player);
    }
  }


  CreateNewGame();
