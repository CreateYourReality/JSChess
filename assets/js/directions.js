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
      case "jump": break;
      case "queen":CrossAttack(field,player);PlusAttack(field,player);AroundAttack(field,player);break;
    }
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

// ######## ATTACK #########

  const CrossAttack = (field,player) => {
    for(let i = 0; i < 8;i++){
      if(!SetAttackField(field,directions.forkLeft[0]-i,directions.forkLeft[1]-i,player)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetAttackField(field,directions.forkRight[0]-i,directions.forkRight[1]+i,player)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetAttackField(field,directions.forkRightDown[0]+i,directions.forkRightDown[1]+i,player)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetAttackField(field,directions.forkLeftDown[0]+i,directions.forkLeftDown[1]-i,player)){
        break;
      }
    } 
  }

  const PlusAttack = (field,player) => {
    for(let i = 0; i < 8;i++){
      if(!SetAttackField(field,directions.sideLeft[0],directions.sideLeft[1]-i,player)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetAttackField(field,directions.sideRight[0],directions.sideRight[1]+i,player)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetAttackField(field,directions.straight[0]-i,directions.straight[1],player)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetAttackField(field,directions.straightDown[0]+i,directions.straightDown[1],player)){
        break;
      }
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
  
  const StraightAttack = (field,player) => {
    if(player == "b"){
      SetAttackField(field,directions.forkLeft[0],directions.forkLeft[1],player);
      SetAttackField(field,directions.forkRight[0],directions.forkRight[1],player);
    }else{
      SetAttackField(field,directions.forkLeftDown[0],directions.forkLeftDown[1],player);
      SetAttackField(field,directions.forkRightDown[0],directions.forkRightDown[1],player);
    }
  }

// ######## MOVEMENT #########
  const CrossMove = (field) => {
    for(let i = 0; i < 8;i++){
      if(!SetMoveField(field,directions.forkLeft[0]-i,directions.forkLeft[1]-i)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetMoveField(field,directions.forkRight[0]-i,directions.forkRight[1]+i)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetMoveField(field,directions.forkRightDown[0]+i,directions.forkRightDown[1]+i)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetMoveField(field,directions.forkLeftDown[0]+i,directions.forkLeftDown[1]-i)){
        break;
      }
    } 
  }

  const PlusMove = (field) => {
    for(let i = 0; i < 8;i++){
      if(!SetMoveField(field,directions.sideLeft[0],directions.sideLeft[1]-i)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetMoveField(field,directions.sideRight[0],directions.sideRight[1]+i)){
        break;
      }
    }
    for(let i = 0; i < 8;i++){
      if(!SetMoveField(field,directions.straight[0]-i,directions.straight[1])){
        break;
      }  
    }
    for(let i = 0; i < 8;i++){
      if(!SetMoveField(field,directions.straightDown[0]+i,directions.straightDown[1])){
        break;
      }  
    } 
  }


 /* const SetJumpField = (field,a,b) => {
    let activeField = getDirection(field,[a, b]);      
    if(activeField !=  null){
          activeField.classList.add("active");
          activeFieldArray.push(activeField);
    }
  } */

  //...xD
  const JumpMove = (field,player) => {

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

  let rookCounter = 3;
  let queenCounter = 2;
  let knightCounter = 3;
  let bishopCounter = 3;
  
  const GetNewFigure = (field,figure) => {
    playerturn ? whitePlayer.appendChild(document.getElementById(figure)) : blackPlayer.appendChild(document.getElementById(figure));
    let pickNewFigure = ChooseNewFigure();
    let letter;
    let chooseTeam;
    let chooseTeam2;
    if(playerturn){
      letter = "w";
      chooseTeam = 0;
      chooseTeam2 = 0;
    }else{
      letter = "b";
      chooseTeam = 2;
      chooseTeam2 = 1;
    }
    if(pickNewFigure==1){
      document.getElementById(field.id).innerHTML += Rook[chooseTeam].tower;
      document.getElementById(field.id).children[0].id =letter+"Rook"+rookCounter;
      SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+"Rook"+2); //rookCounter. muss eine zahl hier haben die in gamepiece vorhanden ist
      rookCounter++;
    }else if(pickNewFigure==2){
      document.getElementById(field.id).innerHTML += Queen[chooseTeam2].tower;
      document.getElementById(field.id).children[0].id =letter+"Queen"+queenCounter;
      SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+"Queen"+1); 
      queenCounter++;
    }else if(pickNewFigure==3){
      document.getElementById(field.id).innerHTML += Knight[chooseTeam].tower;
      document.getElementById(field.id).children[0].id =letter+"Knight"+knightCounter;
      SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+"Knight"+2); 
      knightCounter++;
    }else if(pickNewFigure==4){
      document.getElementById(field.id).innerHTML += Bishop[chooseTeam].tower;
      document.getElementById(field.id).children[0].id =letter+"Bishop"+bishopCounter;
      SetArrayPointer(LetterToNumber(field.id.slice(0,1)),field.id.slice(1,2),letter+"Bishop"+2); 
      bishopCounter++;
    }
  }

  // Bauernumwandlung
  const PawnPromotion = (field,figure) => {
    if(field.id.slice(0,1) == "A" && figure.slice(0,-1) == "wPawn"){
      console.log("w choose your new figure");
      GetNewFigure(field,figure);
    }

    if(field.id.slice(0,1) == "H" && figure.slice(0,-1) == "bPawn"){
      console.log("b choose your new figure");
      GetNewFigure(field,figure);
    }
  }

  const StraightMove = (field,enemy) => {
    if(enemy == "b"){
      SetMoveField(field,directions.straight[0],directions.straight[1]);
      if(field.id.slice(0,1) == "G"){ //Blauer Spieler hat sein Bauern noch nicht bewegt
        const newField = getDirection(field,directions.straight);
        SetMoveField(newField,directions.straight[0],directions.straight[1]);  
      }
    }else{
      SetMoveField(field,directions.straightDown[0],directions.straightDown[1]);
      if(field.id.slice(0,1) == "B"){ //Roter Spieler hat sein Bauern noch nicht bewegt
        const newField = getDirection(field,directions.straightDown);
        SetMoveField(newField,directions.straightDown[0],directions.straightDown[1]);
      }
    }
  }