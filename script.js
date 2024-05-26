const chessboard = document.getElementById('chess-board')


for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (row % 2 === 0) {
            if (col % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
        } else {
            if (col % 2 === 0) {
                square.classList.add('black');
            } else {
                square.classList.add('white');
            }
        }
        chessboard.appendChild(square);
    }
}
