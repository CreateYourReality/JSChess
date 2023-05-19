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
    if(activeField !=  null){
      activeField.classList.add("active");
      activeFieldArray.push(activeField);
    }  
  }

  const SetAttackField = (field,a,b,player) => {
    let attackField = getDirection(field,[a, b]);      
    if(attackField !=  null) {
      CanIAttackOnThisField(attackField,player);
      attackFieldArray.push(attackField);
    }
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
      if(up !=  null){
        activeFieldArray.push(up);
        up.classList.add("active");
      }
      
    }else{
      let down = getDirection(field,directions.straightDown); 
      if(down !=  null){
        activeFieldArray.push(down);
        down.classList.add("active");
      }
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