const game = {
    turn : 'w',
    start: true,
    pieces: {
        "w-pawn1":{
            startingPosition:{
                column:'a',
                row:'7'
            },
            className:"fas fa-chess-pawn iw",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "w-pawn2":{
            startingPosition:{
                column:'b',
                row:'7'
            },
            className:"fas fa-chess-pawn iw",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "w-pawn3":{
            startingPosition:{
                column:'c',
                row:'7'
            },
            className:"fas fa-chess-pawn iw",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "w-pawn4":{
            startingPosition:{
                column:'d',
                row:'7'
            },
            className:"fas fa-chess-pawn iw",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "w-pawn5":{
            startingPosition:{
                column:'e',
                row:'7'
            },
            className:"fas fa-chess-pawn iw",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "w-pawn6":{
            startingPosition:{
                column:'f',
                row:'7'
            },
            className:"fas fa-chess-pawn iw",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "w-pawn7":{
            startingPosition:{
                column:'g',
                row:'7'
            },
            className:"fas fa-chess-pawn iw",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "w-pawn8":{
            startingPosition:{
                column:'h',
                row:'7'
            },
            className:"fas fa-chess-pawn iw",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "w-rook1":{
            startingPosition:{
                column:'a',
                row:'8'
            },
            className:"fas fa-chess-rook iw",
            removed:false,
            direction:"H_V"
        },
        "w-rook2":{
            startingPosition:{
                column:'h',
                row:'8'
            },
            className:"fas fa-chess-rook iw",
            removed:false,
            direction:"H_V"
        },
        "w-knight1":{
            startingPosition:{
                column:'b',
                row:'8'
            },
            className:"fas fa-chess-knight iw",
            removed:false,
            direction:"L",
        },
        "w-knight2":{
            startingPosition:{
                column:'g',
                row:'8'
            },
            className:"fas fa-chess-knight iw",
            removed:false,
            direction:"L",
        },
        "w-bishop1":{
            startingPosition:{
                column:'c',
                row:'8'
            },
            className:"fas fa-chess-bishop iw",
            removed:false,
            direction:"D",
        },
        "w-bishop2":{
            startingPosition:{
                column:'f',
                row:'8'
            },
            className:"fas fa-chess-bishop iw",
            removed:false,
            direction:"D",
        },
        "w-queen":{
            startingPosition:{
                column:'d',
                row:'8'
            },
            className:"fas fa-chess-queen iw",
            removed:false,
            direction:"H_V_D",
        },
        "w-king":{
            startingPosition:{
                column:'e',
                row:'8'
            },
            className:"fas fa-chess-king iw",
            removed:false,
            direction:"H_V_D",
            steps:1
        },
        "b-pawn1":{
            startingPosition:{
                column:'a',
                row:'2'
            },
            className:"fas fa-chess-pawn",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "b-pawn2":{
            startingPosition:{
                column:'b',
                row:'2'
            },
            className:"fas fa-chess-pawn",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "b-pawn3":{
            startingPosition:{
                column:'c',
                row:'2'
            },
            className:"fas fa-chess-pawn",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "b-pawn4":{
            startingPosition:{
                column:'d',
                row:'2'
            },
            className:"fas fa-chess-pawn",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "b-pawn5":{
            startingPosition:{
                column:'e',
                row:'2'
            },
            className:"fas fa-chess-pawn",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "b-pawn6":{
            startingPosition:{
                column:'f',
                row:'2'
            },
            className:"fas fa-chess-pawn",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "b-pawn7":{
            startingPosition:{
                column:'g',
                row:'2'
            },
            className:"fas fa-chess-pawn",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "b-pawn8":{
            startingPosition:{
                column:'h',
                row:'2'
            },
            className:"fas fa-chess-pawn",
            removed:false,
            steps: 1,
            direction:"forward",
            firstStep:true,
        },
        "b-rook1":{
            startingPosition:{
                column:'a',
                row:'1'
            },
            className:"fas fa-chess-rook",
            removed:false,
            direction:"H_V",
        },
        "b-rook2":{
            startingPosition:{
                column:'h',
                row:'1'
            },
            className:"fas fa-chess-rook",
            removed:false,
            direction:"H_V",
        },
        "b-knight1":{
            startingPosition:{
                column:'b',
                row:'1'
            },
            className:"fas fa-chess-knight",
            direction:"L",
            removed:false,
        },
        "b-knight2":{
            startingPosition:{
                column:'g',
                row:'1'
            },
            className:"fas fa-chess-knight",
            removed:false,
            direction:"L",
        },
        "bishop1":{
            startingPosition:{
                column:'c',
                row:'1'
            },
            className:"fas fa-chess-bishop",
            removed:false,
            direction:"D",
        },
        "b-bishop2":{
            startingPosition:{
                column:'f',
                row:'1'
            },
            className:"fas fa-chess-bishop",
            removed:false,
            direction:"D",
        },
        "b-queen":{
            startingPosition:{
                column:'d',
                row:'1'
            },
            className:"fas fa-chess-queen",
            removed:false,
            direction:"H_V_D",
        },
        "b-king":{
            startingPosition:{
                column:'e',
                row:'1'
            },
            className:"fas fa-chess-king",
            removed:false,
            direction:"H_V_D",
            steps:1
        }
    }
}

const board = document.getElementById("board");
board.addEventListener("click",selectPeice);

function alignPieces () {
    for(let piece in game.pieces){
        if(game.pieces[piece].removed) continue;
        let { column, row } = game.pieces[piece].startingPosition;
        const el = document.getElementById(`${column}${row}`);
        if(el.childNodes.length > 0) el.removeChild(el.childNodes[0]);
        let icon = document.createElement('i');
        icon.setAttribute("class",game.pieces[piece].className);
        icon.setAttribute("id",`${column}${row}`);
        el.setAttribute("data-piece",`${piece}`);
        el.append(icon);
    }
}

function selectPeice(e){
    const piece = document.getElementById(e.target.id);
    console.log(piece.dataset.piece);
    availablePosition(piece.dataset.piece);
    // show the available places 
    // move the piece to selected position
    // remove the previously placed icons
    // check for king-check
}

function availablePosition(piece){
    console.log(game.pieces[piece]);
    const {steps,direction,firstStep} = game.pieces[piece];
    const {column,row} = game.pieces[piece].startingPosition;
    console.log(steps,direction,firstStep);
    if(firstStep === true){
        if(game.turn === 'w'){
            hcolumn = column;
            hrow = parseInt(row)-1;
            let hel = document.getElementById(`${hcolumn}${hrow}`);
            hel.classList.add('active');
        }
    }
    alignPieces();
}

if(game.start){
    alignPieces();
}