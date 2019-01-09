import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rows: this.createBoard(props)
        }
    }

    createBoard = (props) => {
        let board = []
        
        // creates a column of cells for each row on the board
        for (let i = 0; i < props.rows; i++) {
            board.push([])

            for (let j = 0; j < props.columns; j++) {
                board[i].push({
                    x: j,
                    y: i,
                    count: 0,
                    isOpen: false,
                    hasMine: false,
                    hasFlag: false
                    // x: cell placement in the row
                    // y: cell placement in the column
                    // count: how many mines around the cell
                    // isOpen: if cell is open or closed
                    // hasMine: if cell has a mine on it
                    // hasFlag: if cell has a flag on it
                })
            }
        }
        console.table(board)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Board;