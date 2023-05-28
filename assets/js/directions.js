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

const ShowFigureOptions = (field,moveDir,attDir,enemy) => {
  ShowWhereICanMove(field,moveDir,enemy);
  ShowWhereICanAttack(field,attDir,enemy);
}

const ShowWhereICanMove = (field,canWalk,enemy) => {
  switch(canWalk){
    case cross: CrossMove(field);break;
    case straight: StraightMove(field,enemy);break;
    case plus: PlusMove(field);break;
    case around: AroundMove(field);break;
    case jump: JumpMove(field);break;
    case queen: CrossMove(field);PlusMove(field); AroundMove(field);break;
  }
}

const ShowWhereICanAttack = (field,canAttack,enemy) => {
  switch(canAttack) {
    case around: AroundAttack(field,enemy);break;
    case plus: PlusAttack(field,enemy);break;
    case cross: CrossAttack(field,enemy);break;
    case fork: StraightAttack(field,enemy);
    case jump: JumpAttack(field,enemy);break;
    case queen:CrossAttack(field,enemy);PlusAttack(field,enemy);AroundAttack(field,enemy);break;
  }
}

const CanIAttackOnThisField = (field,enemy) => {
  try{
    let canAttackField = field.querySelector(firstChild).id;
    if(canAttackField.slice(0,1) == enemy){
      field.classList.add(attackFieldClass);
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
      activeField.classList.add(moveFieldClass);
      activeFieldArray.push(activeField);
      return true;
    }
    return false;
  }
}

const SetAttackField = (field,a,b,enemy) => {
  let attackField = getDirection(field,[a, b]);
  if(attackField !=  null) {
    if(enemy == bluePlayerLetter){
      try{
        if(attackField.querySelector(firstChild).id.slice(0,1) == redPlayerLetter){
          return false;
        }
      }catch(error){/*console.error(error)*/}
    }
    if(enemy == redPlayerLetter){
      try{
        if(attackField.querySelector(firstChild).id.slice(0,1) == bluePlayerLetter){
          return false;
        } 
      }catch(error){/*console.error(error);*/}
    }
    if(CanIAttackOnThisField(attackField,enemy)){
      attackFieldArray.push(attackField);
      return false;
    }
  }
  return true;
}
// ############################### ATTACK SECTION #####################################
const LoopAttack = (field,direction,x,y,enemy) => {
  for(let i = 0; i < 8;i++){
    if(!SetAttackField(field,direction[0]+(i*x),direction[1]+(i*y),enemy)){
      break;
    }
  }
}
//Bishop & Queen attack
const CrossAttack = (field,enemy) => {
  LoopAttack(field,directions.forkLeft,-1,-1,enemy);
  LoopAttack(field,directions.forkRight,-1,1,enemy);
  LoopAttack(field,directions.forkRightDown,1,1,enemy);
  LoopAttack(field,directions.forkLeftDown,1,-1,enemy);
}
//Rook & Queen attack
const PlusAttack = (field,enemy) => {
  LoopAttack(field,directions.sideLeft,0,-1,enemy);
  LoopAttack(field,directions.sideRight,0,1,enemy);
  LoopAttack(field,directions.straight,-1,0,enemy);
  LoopAttack(field,directions.straightDown,1,0,enemy);
}
//King & Queen attack
const AroundAttack = (field,enemy) => {
  let directionArray = Object.values(directions);
  for(let i = 0; i < directionArray.length; i++){
    SetAttackField(field,directionArray[i][0],directionArray[i][1],enemy);
  }
}
//Pawn attack
const StraightAttack = (field,enemy) => {
  if(enemy == redPlayerLetter){
    SetAttackField(field,directions.forkLeft[0],directions.forkLeft[1],enemy);
    SetAttackField(field,directions.forkRight[0],directions.forkRight[1],enemy);
  }else{
    SetAttackField(field,directions.forkLeftDown[0],directions.forkLeftDown[1],enemy);
    SetAttackField(field,directions.forkRightDown[0],directions.forkRightDown[1],enemy);
  }
}
//Knight attack
const JumpAttack = (field, enemy) => {
  JumpAttackCalc(enemy,field,directions.straight,directions.sideLeft);
  JumpAttackCalc(enemy,field,directions.straight,directions.sideRight);
  JumpAttackCalc(enemy,field,directions.sideRight,directions.straight);
  JumpAttackCalc(enemy,field,directions.sideRight,directions.straightDown);
  JumpAttackCalc(enemy,field,directions.sideLeft,directions.straight);
  JumpAttackCalc(enemy,field,directions.sideLeft,directions.straightDown);
  JumpAttackCalc(enemy,field,directions.straightDown,directions.sideLeft);
  JumpAttackCalc(enemy,field,directions.straightDown,directions.sideRight);
}

const JumpAttackCalc = (enemy,field,fristDirection,secondDirection) => {
  try{
    let jumpField = getDirection(field,fristDirection);
    if(jumpField != null ){
      jumpField = getDirection(jumpField,fristDirection);
      SetAttackField(jumpField,secondDirection[0],secondDirection[1],enemy)
    }
  }catch(error){}  
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
  if(enemy == redPlayerLetter){
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

const JumpMoveCalc = (field,fristDirection,secondDirection) => {
  try{
    let jumpField = getDirection(field,fristDirection);
    if(jumpField != null ){
      jumpField = getDirection(jumpField,fristDirection);
      jumpField = getDirection(jumpField,secondDirection);
      if(jumpField.children[0] == undefined){
        activeFieldArray.push(jumpField);
        jumpField.classList.add(moveFieldClass);
      }
    }
  }catch(error){}  
}

const JumpMove = (field) => {
  JumpMoveCalc(field,directions.straight,directions.sideLeft);
  JumpMoveCalc(field,directions.straight,directions.sideRight);
  JumpMoveCalc(field,directions.sideRight,directions.straight);
  JumpMoveCalc(field,directions.sideRight,directions.straightDown);
  JumpMoveCalc(field,directions.sideLeft,directions.straight);
  JumpMoveCalc(field,directions.sideLeft,directions.straightDown);
  JumpMoveCalc(field,directions.straightDown,directions.sideLeft);
  JumpMoveCalc(field,directions.straightDown,directions.sideRight);
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
  let chooseNewFigure = prompt(chooseNewFigureText);
    switch(Number(chooseNewFigure)){
      case 1: console.log("PAWN DIGITIERT ZUUUUUU... ROOOOOOK");return 1;
      case 2: console.log("PAWN DIGITIERT ZUUUUUU... QUEEEEEN");return 2;
      case 3: console.log("PAWN DIGITIERT ZUUUUUU... KNIIIGHT");return 3;
      case 4: console.log("PAWN DIGITIERT ZUUUUUU... BIIISHOP");return 4;
      default: ChooseNewFigure();
    }
}

const CalcNewFigure = (letter,figure,counter,field,figureObject,move) => {
    const newFigure = {
      tower: GetTowerText(letter,figure,counter),
      id: letter+figure+counter,
      canWalk: move,
      canAttack: move
    }
    figureObject.push(newFigure);
    document.getElementById(field.id).innerHTML += figureObject[counter].tower;
    SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+figure+counter);
    console.log(Queen);
}

const GetNewFigure = (field,figure) => {
  playerturn ? whitePlayer.appendChild(document.getElementById(figure)) : blackPlayer.appendChild(document.getElementById(figure));
  let pickNewFigure = ChooseNewFigure();
  let letter =  playerturn ? bluePlayerLetter : redPlayerLetter;
  switch(pickNewFigure){
    case 1: CalcNewFigure(letter,ROOK,rookCounter,field,Rook,plus); rookCounter++; break;
    case 2: CalcNewFigure(letter,QUEEN,queenCounter,field,Queen,queen); queenCounter++;break;
    case 3: CalcNewFigure(letter,KNIGHT,knightCounter,field,Knight,jump); knightCounter++;break;
    case 4: CalcNewFigure(letter,BISHOP,bishopCounter,field,Bishop,cross); bishopCounter++;break;
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

 

  