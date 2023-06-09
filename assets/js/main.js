
//Packt die Figur in ein Feld in dem Array
const SetArrayPointer = (x,y,gamepiece) => {
  chessBoardFields[x-1][y-1] = gamepiece;
}

//setzt das active Feld und entfernt alle felder die zu ihm gehören
  const SetActiveField = (field) => {
   /* if(activeField == field){ //geht nicht, weil active beim clicken wegen dem click auf dem feld direkt neu gesetzt wird.
      console.log("gleiche feld");
    } */

    activeField = field;
    if(lastActiveField == empty){
      lastActiveField = field;
      field.classList.toggle(activeFieldClass);
      return;
    } 
    if(lastActiveField != activeField){
      lastActiveField.classList.toggle(activeFieldClass);
      lastActiveField = activeField;
      activeFieldArray.forEach(field => {
        field.classList.remove(moveFieldClass);
      });
      attackFieldArray.forEach(field => {
        field.classList.remove(attackFieldClass);
      });
      field.classList.toggle(activeFieldClass);
    } 
  }

  const CreateOptions = () => {
    allChessFields.forEach(field => { //das angeklickte feld auch wieder abwählen können
      field.addEventListener("click", () => {
        SetActiveField(field); 
        let fieldLetter = Number(LetterToNumber(field.id.slice(0,1)));
        let fieldNumber = Number(field.id.slice(1,2));
        //alle Pawn ids ausloggen
        GamePiece.forEach(gamePiece => {
          gamePiece.forEach(figure => {
            if(figure.id == chessBoardFields[fieldLetter-1][fieldNumber-1]){ //wenn das Feld eine der Figuren enthält
              let currentFigure = figure.id;
              colorCurrentFigure = currentFigure.slice(0,1) == bluePlayerLetter ? colorCurrentFigure = redPlayerLetter : colorCurrentFigure = bluePlayerLetter;
              currentFigure = currentFigure.slice(1,currentFigure.length-1); // Überprüfe ob die Figur vom Weißen(w...) oder Schwarzen(b...) Spieler ist
              if(colorCurrentFigure == redPlayerLetter && playerturn == false){
                switch(currentFigure){
                  case PAWN: ShowFigureOptions(field, straight, fork, colorCurrentFigure);break;
                  case KING: ShowFigureOptions(field, around, around, colorCurrentFigure);break;
                  case BISHOP: ShowFigureOptions(field, cross, cross, colorCurrentFigure);break;
                  case ROOK: ShowFigureOptions(field, plus, plus, colorCurrentFigure);break;  
                  case QUEEN: ShowFigureOptions(field, queen, queen, colorCurrentFigure);break;  
                  case KNIGHT: ShowFigureOptions(field, jump, jump, colorCurrentFigure);break;    
                }
              }

              if(colorCurrentFigure == bluePlayerLetter && playerturn == true){
           //     console.log("schwarzer spieler ist dran");
                switch(currentFigure){
                  case PAWN: ShowFigureOptions(field, straight, fork, colorCurrentFigure);break;
                  case KING: ShowFigureOptions(field, around, around, colorCurrentFigure);break;
                  case BISHOP: ShowFigureOptions(field, cross, cross, colorCurrentFigure);break;
                  case ROOK: ShowFigureOptions(field, plus, plus, colorCurrentFigure);break;  
                  case QUEEN: ShowFigureOptions(field, queen, queen, colorCurrentFigure);break;  
                  case KNIGHT: ShowFigureOptions(field, jump, jump, colorCurrentFigure);break;    
                }
              }
            } 
          });
        });
      })
    })
  }

  const ChangePlayer = () => {
    playerturn = !playerturn;
 //   playerturn == true ? alert("BLACK") : alert("WHITE");
    ChangePlayerTurnText();
    askForCheck();
  }

  const RemoveActiveFields = () => {
    activeFieldArray.forEach(field => {
      if(field != null)
        field.classList.remove(moveFieldClass);
    });
    attackFieldArray.forEach(field => {
      if(field != null)
        field.classList.remove(attackFieldClass);
    });
    scanFieldArray.forEach(field => {
      if(field != null)
        field.classList.remove(scanFieldClass);
    });
    lastActiveField = empty;
    activeField.classList.toggle(activeFieldClass);
      
  }

  const SetNewPositions = (tempTarget,data) => {
    //Wenn Figur bewegt wird, setze hiermit ihre Position im Array fest
    let chessboardRow = LetterToNumber(tempTarget.id.slice(0,1));
    let chessboardColumn = Number(tempTarget.id.slice(1,2));
    SetArrayPointer(chessboardRow,chessboardColumn,data);
    CreateOptions();
    ChangePlayer();
  }

  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    try{
      let tempTarget = ev.target;
      if(ev.target.classList.contains(moveFieldClass) && document.getElementById(data).parentElement.classList.contains(activeFieldClass)){
        //idee, jedes mal wenn das feld betreten wurde, +x und fußstapfen einfügen
        let x = LetterToNumber(document.getElementById(data).parentElement.id.slice(0,1));
        let y = document.getElementById(data).parentElement.id.slice(1,2);
        SetArrayPointer(x,y,fieldX); 
        ev.target.appendChild(document.getElementById(data));
        RemoveActiveFields();
        SetNewPositions(tempTarget,data);
        PawnPromotion(tempTarget,data);
        return;  
      }
      if(ev.target.classList.contains(attackFieldClass) && document.getElementById(data).parentElement.classList.contains(activeFieldClass)){
          //idee, jedes mal wenn das feld betreten wurde, +x und fußstapfen einfügen
          let x = LetterToNumber(document.getElementById(data).parentElement.id.slice(0,1));
          let y = document.getElementById(data).parentElement.id.slice(1,2);
          SetArrayPointer(x,y,fieldX); 
          ev.target.appendChild(document.getElementById(data));
          playerturn ? whitePlayer.appendChild(ev.target.children[0]) : blackPlayer.appendChild(ev.target.children[0]);
          RemoveActiveFields();
          SetNewPositions(tempTarget,data);
          PawnPromotion(tempTarget,data);
          return;
        }
      if(ev.target.parentElement.classList.contains(attackFieldClass) && document.getElementById(data).parentElement.classList.contains(activeFieldClass)){
          //idee, jedes mal wenn das feld betreten wurde, +x und fußstapfen einfügen
          let x = LetterToNumber(document.getElementById(data).parentElement.id.slice(0,1));
          let y = document.getElementById(data).parentElement.id.slice(1,2);
          SetArrayPointer(x,y,fieldX); 
          tempTarget = ev.target.parentElement;
          playerturn ? whitePlayer.appendChild(ev.target) : blackPlayer.appendChild(ev.target);
          tempTarget.appendChild(document.getElementById(data));
          RemoveActiveFields();
          SetNewPositions(tempTarget,data);
          PawnPromotion(tempTarget,data);
          return;
      }    
    }catch(error){console.error(error)}
  }

// START NEW GAME
  CreateNewGame();
  CreateOptions();

