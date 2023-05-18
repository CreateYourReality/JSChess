const Pawn = [
    {
      tower:  "<i id='wPawn1' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      position: "",
      id:1,
      canWalk: 2,
      canAttack: 1,  // 1 2 1   
      directions: 2 // Y Y Y
                     // N X N
                     // N N N
    },
    {
      tower:  "<i id='wPawn2' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      position: "",
      id:2,
      canWalk: 2,
      canAttack: 1,  // 1 2 1   
      directions: 2// Y Y Y
                     // N X N
                     // N N N
    },
    {
      tower:  "<i id='wPawn3' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      position: "",
      id:3,
      canWalk: 2,
      canAttack: 1,  // 1 2 1   
      directions: 2// Y Y Y
                     // N X N
                     // N N N
    },
    {
      tower:  "<i id='wPawn4' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      position: "",
      id:4,
      canWalk: 2,
      canAttack: 1,  // 1 2 1   
      directions: 2// Y Y Y
                     // N X N
                     // N N N
    },
    {
      tower:  "<i id='wPawn5' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      position: "",
      id:5,
      canWalk: 2,
      canAttack: 1,  // 1 2 1   
      directions: 2// Y Y Y
                     // N X N
                     // N N N
    },
    {
      tower:  "<i id='wPawn6' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      position: "",
      id:6,
      canWalk: 2,
      canAttack: 1,  // 1 2 1   
      directions: 2// Y Y Y
                     // N X N
                     // N N N
    },
    {
      tower:  "<i id='wPawn7' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      position: "",
      id:7,
      canWalk: 2,
      canAttack: 1,  // 1 2 1   
      directions: 2// Y Y Y
                     // N X N
                     // N N N
    },
    {
      tower:  "<i id='wPawn8' draggable='true' ondragstart='drag(event)' class='las la-chess-pawn'></i>",
      position: "",
      id:8,
      canWalk: 2,
      canAttack: 1,  // 1 2 1   
      directions: 2// Y Y Y
                     // N X N
                     // N N N
    },
  ];


   
    //     <i id="bBishop1" draggable="true" ondragstart="drag(event)"class="las la-chess-bishop"></i>
    //     <i id="bBishop2" draggable="true" ondragstart="drag(event)"class="las la-chess-bishop"></i>

    //     <i id="bKing" draggable="true" ondragstart="drag(event)"class="las la-chess-king"></i>
    //     <i id="bQueen" draggable="true" ondragstart="drag(event)"class="las la-chess-queen"></i>


    //     <i id="bKnight1" draggable="true" ondragstart="drag(event)"class="las la-chess-knight"></i>
    //     <i id="bKnight2" draggable="true" ondragstart="drag(event)"class="las la-chess-knight"></i>

    //     <i id="bRook1" draggable="true" ondragstart="drag(event)"class="las la-chess-rook"></i>
    //     <i id="bRook2" draggable="true" ondragstart="drag(event)"class="las la-chess-rook"></i>

    //     <i id="bPawn1" draggable="true" ondragstart="drag(event)"class="las la-chess-pawn"></i>
    //     <i id="bPawn2" draggable="true" ondragstart="drag(event)"class="las la-chess-pawn"></i>
    //     <i id="bPawn3" draggable="true" ondragstart="drag(event)"class="las la-chess-pawn"></i>
    //     <i id="bPawn4" draggable="true" ondragstart="drag(event)"class="las la-chess-pawn"></i>
    //     <i id="bPawn5" draggable="true" ondragstart="drag(event)"class="las la-chess-pawn"></i>
    //     <i id="bPawn6" draggable="true" ondragstart="drag(event)"class="las la-chess-pawn"></i>
    //     <i id="bPawn7" draggable="true" ondragstart="drag(event)"class="las la-chess-pawn"></i>
    //     <i id="bPawn8" draggable="true" ondragstart="drag(event)"class="las la-chess-pawn"></i> 

     
        // <i id="wBishop1" draggable="true" ondragstart="drag(event)"class="las la-chess-bishop"></i>
        // <i id="wBishop2" draggable="true" ondragstart="drag(event)"class="las la-chess-bishop"></i>

        // <i id="wKing" draggable="true" ondragstart="drag(event)"class="las la-chess-king"></i>
        // <i id="wQueen" draggable="true" ondragstart="drag(event)"class="las la-chess-queen"></i>


        // <i id="wKnight1" draggable="true" ondragstart="drag(event)"class="las la-chess-knight"></i>
        // <i id="wKnight2" draggable="true" ondragstart="drag(event)"class="las la-chess-knight"></i>

        // <i id="wRook1" draggable="true" ondragstart="drag(event)"class="las la-chess-rook"></i>
        // <i id="wRook2" draggable="true" ondragstart="drag(event)"class="las la-chess-rook"></i>




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


