const directions = {
    straight: [-2,0],
    forkLeft:[-2,-1],
    forkRight:[-2,1],
    sideLeft:[-1,-1],
    sideRight:[-1,1],
    straightDown:[0,0],
    forkLeftDown:[0,-1],
    forkRightDown:[0,1]
  }

const ShowFigureOptions = (field,moveDir,attDir,player) => {
  ShowWhereICanMove(field,moveDir,player);
  ShowWhereICanAttack(field,attDir,player);
}

const ShowWhereICanMove = (field,canWalk,player) => {
  switch(canWalk){
    case "cross": CrossMove(field);break;
    case "straight": StraightMove(field,player);break;
    case "plus": PlusMove(field);break;
    case "around": AroundMove(field);break;
    case "jump": JumpMove(field);break;
    case "queen": CrossMove(field);PlusMove(field); AroundMove(field);break;
  }
}

const ShowWhereICanAttack = (field,canAttack,player) => {
  switch(canAttack) {
    case "around": AroundAttack(field,player);break;
    case "plus": PlusAttack(field,player);break;
    case "cross": CrossAttack(field,player);break;
    case "fork": StraightAttack(field,player);
    case "jump": break;//JumpAttack(field,player);break;
    case "queen":CrossAttack(field,player);PlusAttack(field,player);AroundAttack(field,player);break;
  }
}

const CanIAttackOnThisField = (field,player) => {
  try{
    let canAttackField = field.querySelector(":first-child").id;
    if(canAttackField.slice(0,1) == player){
      field.classList.add("canAttack");
      return true;      
    }else{
      return false;
    } 
  }catch (error){/*console.error(error);*/}
}
  
const getDirection = (field,[x,y]) => {
  let fieldLetter = Number(LetterToNumber(field.id.slice(0,1)));
  let fieldNumber = Number(field.id.slice(1,2));
  return document.getElementById(NumberToLetter(fieldLetter+x)+String(fieldNumber+y));
}

const SetMoveField = (field,a,b) => {
  let activeField = getDirection(field,[a, b]);      
  if(activeField !=  null){
    if(activeField.children[0] == undefined){
      activeField.classList.add("active");
      activeFieldArray.push(activeField);
      return true;
    }
    return false;
  }
}

const SetAttackField = (field,a,b,player) => {
  let attackField = getDirection(field,[a, b]);
  if(attackField !=  null) {
    if(player == "w"){
      try{
        if(attackField.querySelector(":first-child").id.slice(0,1) == "b"){
          return false;
        }
      }catch(error){/*console.error(error)*/}
    }
    if(player == "b"){
      try{
        if(attackField.querySelector(":first-child").id.slice(0,1) == "w"){
          return false;
        } 
      }catch(error){/*console.error(error);*/}
    }
    if(CanIAttackOnThisField(attackField,player)){
      attackFieldArray.push(attackField);
      return false;
    }
  }
  return true;
}
// ############################### ATTACK SECTION #####################################
const LoopAttack = (field,direction,x,y,player) => {
  for(let i = 0; i < 8;i++){
    if(!SetAttackField(field,direction[0]+(i*x),direction[1]+(i*y),player)){
      break;
    }
  }
}
//Bishop & Queen attack
const CrossAttack = (field,player) => {
  LoopAttack(field,directions.forkLeft,-1,-1,player);
  LoopAttack(field,directions.forkRight,-1,1,player);
  LoopAttack(field,directions.forkRightDown,1,1,player);
  LoopAttack(field,directions.forkLeftDown,1,-1,player);
}
//Rook & Queen attack
const PlusAttack = (field,player) => {
  LoopAttack(field,directions.sideLeft,0,-1,player);
  LoopAttack(field,directions.sideRight,0,1,player);
  LoopAttack(field,directions.straight,-1,0,player);
  LoopAttack(field,directions.straightDown,1,0,player);
}
//King & Queen attack
const AroundAttack = (field,player) => {
  let directionArray = Object.values(directions);
  for(let i = 0; i < directionArray.length; i++){
    SetAttackField(field,directionArray[i][0],directionArray[i][1],player);
  }
}
//Pawn attack
const StraightAttack = (field,player) => {
  if(player == "b"){
    SetAttackField(field,directions.forkLeft[0],directions.forkLeft[1],player);
    SetAttackField(field,directions.forkRight[0],directions.forkRight[1],player);
  }else{
    SetAttackField(field,directions.forkLeftDown[0],directions.forkLeftDown[1],player);
    SetAttackField(field,directions.forkRightDown[0],directions.forkRightDown[1],player);
  }
}
//Knight attack
const JumpAttack = () => {
//  SetAttackField(field,directions.sideLeft[0],directions.sideLeft[1]-i,player)
}


// ############################### MOVEMENT SECTION #####################################
const LoopMove = (field,direction,x,y) => {
  for(let i = 0; i < 8;i++){
    if(!SetMoveField(field,direction[0]+(i*x),direction[1]+(i*y))){
      break;
    }
  }
}
// Bishop & Queen move
const CrossMove = (field) => {
  LoopMove(field,directions.forkLeft,-1,-1);
  LoopMove(field,directions.forkRight,-1,+1);
  LoopMove(field,directions.forkRightDown,+1,+1);
  LoopMove(field,directions.forkLeftDown,+1,-1);
}
// Rook & Queen move
const PlusMove = (field) => {
  LoopMove(field,directions.sideLeft,0,-1);
  LoopMove(field,directions.sideRight,0,+1);
  LoopMove(field,directions.straight,-1,0);
  LoopMove(field,directions.straightDown,+1,0);
}
//King & Queen move
const AroundMove = (field) => {
  let directionArray = Object.values(directions);
  for(let i = 0; i < directionArray.length; i++){
    SetMoveField(field,directionArray[i][0],directionArray[i][1]);
  }
}
//Pawn move
const StraightMove = (field,enemy) => {
  if(enemy == "b"){
    SetMoveField(field,directions.straight[0],directions.straight[1]);
    if(field.id.slice(0,1) == "G"){ //Blauer Spieler hat sein Bauern noch nicht bewegt
      const newField = getDirection(field,directions.straight);
      if(newField.children[0] == undefined){
        SetMoveField(newField,directions.straight[0],directions.straight[1]); 
      } 
    }
  }else{
    SetMoveField(field,directions.straightDown[0],directions.straightDown[1]);
    if(field.id.slice(0,1) == "B"){ //Roter Spieler hat sein Bauern noch nicht bewegt
      const newField = getDirection(field,directions.straightDown);
      if(newField.children[0] == undefined){
        SetMoveField(newField,directions.straightDown[0],directions.straightDown[1]);
      }
    }
  }
}


  //...xD
  const JumpMove = (field) => {

    try{
      let first = getDirection(field,directions.straight);
      if(first != null ){
        first = getDirection(first,directions.straight);
        first = getDirection(first,directions.sideLeft);
        if(first.children[0] == undefined){
          activeFieldArray.push(first);
          first.classList.add("active");
        }
      }
    }catch(error){}
  try{
      let second = getDirection(field,directions.straight);
      if(second != null ){
        second = getDirection(second,directions.straight);
        second = getDirection(second,directions.sideRight);
        if(second.children[0] == undefined){
          activeFieldArray.push(second);
          second.classList.add("active");
        }
      }
    }catch(error){}
    try{
      let third = getDirection(field,directions.sideRight);
      if(third != null){
        third = getDirection(third,directions.sideRight);
        third = getDirection(third,directions.straight);
        if(third.children[0] == undefined){
          activeFieldArray.push(third);
          third.classList.add("active");
        }
      }
    }catch(error){}
   try{
      let fourth = getDirection(field,directions.sideLeft);
      if(fourth != null){
        fourth = getDirection(fourth,directions.sideLeft);
        fourth = getDirection(fourth,directions.straight);
        if(fourth.children[0] == undefined){
          activeFieldArray.push(fourth);
          fourth.classList.add("active");
        }
      }
    }catch(error){}
     try{
      let fifth = getDirection(field,directions.sideLeft);
      if(fifth != null){
        fifth = getDirection(fifth,directions.sideLeft);
        fifth = getDirection(fifth,directions.straightDown);
        if(fifth.children[0] == undefined){
          activeFieldArray.push(fifth);
          fifth.classList.add("active");
        }
      }
    }catch(error){}
    
    try{
      let six = getDirection(field,directions.sideRight);
      if(six != null){
        six = getDirection(six,directions.sideRight);
        six = getDirection(six,directions.straightDown);
        if(six.children[0] == undefined){
          activeFieldArray.push(six);
          six.classList.add("active");
        }
      }
    }catch(error){} 
    try{
      let seven = getDirection(field,directions.straightDown);
      if(seven != null){
        seven = getDirection(seven,directions.straightDown);
        seven = getDirection(seven,directions.sideLeft);
        if(seven.children[0] == undefined){
          activeFieldArray.push(seven);
          seven.classList.add("active");
        }
      }
    }catch(error){}
    try{
      let eight = getDirection(field,directions.straightDown);
      if(eight != null){
        eight = getDirection(eight,directions.straightDown);
        eight = getDirection(eight,directions.sideRight);
        if(eight.children[0] == undefined){
          activeFieldArray.push(eight);
          eight.classList.add("active");
        }
    }
    }catch(error){} 
  }

// Bauernumwandlung
const PawnPromotion = (field,figure) => {
  if(field.id.slice(0,1) == "A" && figure.slice(0,-1) == "wPawn"){
    GetNewFigure(field,figure);
  }
  if(field.id.slice(0,1) == "H" && figure.slice(0,-1) == "bPawn"){
    GetNewFigure(field,figure);
  }
}
//Auswahl einer neuen Figur bei der Bauernumwandlung
const ChooseNewFigure = () => {
  let chooseNewFigure = prompt("In was soll sich der Bauer verwandeln? [1]ROOK [2]QUEEN [3]KNIGHT [4]BISHOP");
    switch(Number(chooseNewFigure)){
      case 1: console.log("PAWN DIGITIERT ZUUUUUU... ROOOOOOK");return 1;
      case 2: console.log("PAWN DIGITIERT ZUUUUUU... QUEEEEEN");return 2;
      case 3: console.log("PAWN DIGITIERT ZUUUUUU... KNIIIGHT");return 3;
      case 4: console.log("PAWN DIGITIERT ZUUUUUU... BIIISHOP");return 4;
      default: ChooseNewFigure();
    }
}

let rookCounter = 4;
let queenCounter = 2;
let knightCounter = 4;
let bishopCounter = 4;

  const GetNewFigure = (field,figure) => {
    playerturn ? whitePlayer.appendChild(document.getElementById(figure)) : blackPlayer.appendChild(document.getElementById(figure));
    let pickNewFigure = ChooseNewFigure();
    let letter;
    playerturn ? letter = "w" : letter = "b";
    if(pickNewFigure==1){
      const newRook = {
        tower: `<img src="./assets/img/${letter}Rook.png" alt="${letter}Rook${rookCounter}" id="${letter}Rook${rookCounter}" draggable="true" ondragstart="drag(event)">`,
        id: letter+"Rook"+rookCounter,
        canWalk: "plus",
        canAttack: "plus"
      }
      Rook.push(newRook);
      document.getElementById(field.id).innerHTML += Rook[rookCounter].tower;
      SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+"Rook"+rookCounter);
      rookCounter++;
    }else if(pickNewFigure==2){
      const newQueen = {
        tower: `<img src="./assets/img/${letter}Queen.png" alt="${letter}Queen${queenCounter}" id="${letter}Queen${queenCounter}" draggable="true" ondragstart="drag(event)">`,
        id: letter+"Queen"+queenCounter,
        canWalk: "queen",
        canAttack: "queen"
      }
      Queen.push(newQueen);
      document.getElementById(field.id).innerHTML += Queen[queenCounter].tower;
      SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+"Queen"+queenCounter); 
      queenCounter++;
    }else if(pickNewFigure==3){
      const newKnight = {
        tower: `<img src="./assets/img/${letter}Knight.png" alt="${letter}Knight${knightCounter}" id="${letter}Knight${knightCounter}" draggable="true" ondragstart="drag(event)">`,
        id: letter+"Knight"+knightCounter,
        canWalk: "jump",
        canAttack: "jump"
      }
      Knight.push(newKnight);
      document.getElementById(field.id).innerHTML += Knight[knightCounter].tower;
      SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+"Knight"+knightCounter); 
      knightCounter++;
    }else if(pickNewFigure==4){
      const newBishop = {
        tower: `<img src="./assets/img/${letter}Bishop.png" alt"${letter}Bishop${bishopCounter}" id="${letter}Bishop${bishopCounter}" draggable="true" ondragstart="drag(event)">`,
        id: letter+"Bishop"+bishopCounter,
        canWalk:"cross",
        canAttack:"cross",
      }
      Bishop.push(newBishop);
      document.getElementById(field.id).innerHTML += Bishop[bishopCounter].tower;
      SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+"Bishop"+bishopCounter); 
      bishopCounter++;
    }
  }

  const EnPassant = () => {
    //NUR VON BAUERN AUSFÜHRBAR
    //NUR GEGEN BAUERN AUSFÜHRBAR
    //NUR MÖGLICH WENN BRETTHÄLFTE UM GENAU 1 ÜBERQUERT WURDE (w = D | b = E)
    //DER GEGENERBAUER MUSS EINEN DOPPELSCHRITT NEBEN DEINEN BAUERN MACHEN
    //DER NUR EINEN ZUG DANACH ZEIT
    //WENN ALLES ERFÜLLT : DU KANNST DEN FEINDLICHEN BAUERN EN PASSANT ANGREIFEN (NORMALER ANRIFF UND DANN 1 FELD VORRÜCKEN)
    //(Der Bauer wird geschlagen, als hätte er nur einen einfachen Schritt gemacht)
  }

  const Rochade = () => {
    //BENÖTIGT DEN KÖNIG UND EINEN VON BEIDEN TÜRMEN
    //DARF NUR EINMAL PRO PARTIE GEMACHT WERDEN
    //ES GIBT EINE KURZE UND EINE LANGE ROCHADE
    //KÖNIG UND BETROFFENER TURM DÜRFEN NOCH NICHT BEWEGT WORDEN SEIN
    //KÖNIG DARF NICHT ROCHADE MACHEN WENN ER IM SCHACH STEHT
    //DIE FELDER ZWISCHEN KÖNIG UND AUSGEWÄHLTEM TURM MÜSSEN FREI SEIN
    //KURZ WEIß: DIE FELDER H4,H5 und H6 dürfen nicht im Schach stehen (bedroht sein)
    //LANG WEIß: DIE FELDER H4,H3 und H2 dürfen nicht im Schach stehen (bedroht sein)
    //KURZ SCHWARZ: DIE FELDER A4,A5 und A6 dürfen nicht im Schach stehen (bedroht sein)
    //LANG SCHWARZ: DIE FELDER A4,A3 und A2 dürfen nicht im Schach stehen (bedroht sein)
    //KURZ WEIß: König von H4 nach H2 (zwei Felder) - Turm überspringt dann den König auf H3
    //LANG WEIß: König von H4 nach H6 (zwei Felder) - Turm überspringt dann den König auf H5
    //KURZ SCHWARZ: König von A4 nach H2 (zwei Felder) - Turm überspringt dann den König auf A3
    //LANG SCHWARZ: König von A4 nach H6 (zwei Felder) - Turm überspringt dann den König auf A5
  }

 

  