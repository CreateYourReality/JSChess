


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
    tower:'<i id="wBishop1" draggable="true" ondragstart="drag(event)"class="las la-chess-bishop"></i>',
    id:"wBishop1",
    canWalk:"cross",
    canAttack:"cross",
  },
  {
    tower:'<i id="wBishop2" draggable="true" ondragstart="drag(event)"class="las la-chess-bishop"></i>',
    id:"wBishop2",
    canWalk:"cross",
    canAttack:"cross",
  },
  {
    tower:'<i id="bBishop1" draggable="true" ondragstart="drag(event)"class="las la-chess-bishop"></i>',
    id:"bBishop1",
    canWalk:"cross",
    canAttack:"cross",
  },
  {
    tower:'<i id="bBishop2" draggable="true" ondragstart="drag(event)"class="las la-chess-bishop"></i>',
    id:"bBishop2",
    canWalk:"cross",
    canAttack:"cross",
  }
  ],
  Pawn = [
    {
      tower:  "<i id='wPawn1' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"wPawn1",
      canWalk: "straight",
      canAttack: "fork"    
    },
    {
      tower:  "<i id='wPawn2' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"wPawn2",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='wPawn3' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"wPawn3",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='wPawn4' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"wPawn4",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='wPawn5' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"wPawn5",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='wPawn6' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"wPawn6",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='wPawn7' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"wPawn7",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='wPawn8' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"wPawn8",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='bPawn1' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"bPawn1",
      canWalk: "straight",
      canAttack: "fork"    
    },
    {
      tower:  "<i id='bPawn2' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"bPawn2",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='bPawn3' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"bPawn3",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='bPawn4' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"bPawn4",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='bPawn5' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"bPawn5",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='bPawn6' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"bPawn6",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='bPawn7' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"bPawn7",
      canWalk: "straight",
      canAttack: "fork" 
    },
    {
      tower:  "<i id='bPawn8' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      id:"bPawn8",
      canWalk: "straight",
      canAttack: "fork" 
    },
  ],
  Knight = [
    {
      tower: '<i id="wKnight1" draggable="true" ondragstart="drag(event)"class="las la-chess-knight"></i>',
      id: "wKnight1",
      canWalk: "jump",
      canAttack: "jump"
    },
    {
      tower: '<i id="wKnight2" draggable="true" ondragstart="drag(event)"class="las la-chess-knight"></i>',
      id: "wKnight2",
      canWalk: "jump",
      canAttack: "jump"
    },
    {
      tower: '<i id="bKnight1" draggable="true" ondragstart="drag(event)"class="las la-chess-knight"></i>',
      id: "bKnight1",
      canWalk: "jump",
      canAttack: "jump"
    },
    {
      tower: '<i id="bKnight2" draggable="true" ondragstart="drag(event)"class="las la-chess-knight"></i>',
      id: "bKnight2",
      canWalk: "jump",
      canAttack: "jump"
    }
  ],
  Rook = [
    {
      tower: '<i id="wRook1" draggable="true" ondragstart="drag(event)"class="las la-chess-rook"></i>',
      id: "wRook1",
      canWalk: "plus",
      canAttack: "plus"
    },
    {
      tower: '<i id="wRook2" draggable="true" ondragstart="drag(event)"class="las la-chess-rook"></i>',
      id: "wRook2",
      canWalk: "plus",
      canAttack: "plus"
    },
    {
      tower: '<i id="bRook1" draggable="true" ondragstart="drag(event)"class="las la-chess-rook"></i>',
      id: "bRook1",
      canWalk: "plus",
      canAttack: "plus"
    },
    {
      tower: '<i id="bRook2" draggable="true" ondragstart="drag(event)"class="las la-chess-rook"></i>',
      id: "bRook2",
      canWalk: "plus",
      canAttack: "plus"
    }
  ],
  King = [
    {
      tower: '<i id="wKing1" draggable="true" ondragstart="drag(event)"class="las la-chess-king"></i>',
      id: "wKing1",
      canWalk: "around",
      canAttack: "around"
    },
    {
      tower: '<i id="bKing1" draggable="true" ondragstart="drag(event)"class="las la-chess-king"></i>',
      id: "bKing1",
      canWalk: "around",
      canAttack: "around"
    }
  ],
  Queen = [
    {
      tower: '<i id="wQueen1" draggable="true" ondragstart="drag(event)"class="las la-chess-queen"></i>',
      id: "wQueen1",
      canWalk: "queen",
      canAttack: "queen"
    },
    {
      tower: '<i id="bQueen1" draggable="true" ondragstart="drag(event)"class="las la-chess-queen"></i>',
      id: "bQueen1",
      canWalk: "queen",
      canAttack: "queen"
    }
  ]
]

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


