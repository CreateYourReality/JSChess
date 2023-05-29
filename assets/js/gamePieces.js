
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
