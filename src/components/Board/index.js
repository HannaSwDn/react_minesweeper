import React, { Component } from 'react';
import Row from '../Row'

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

        // adding mines to random places on the board
        for (let i = 0; i < props.mines; i++) {
            let randomRow = Math.floor(Math.random() * props.rows)
            let randomColumn = Math.floor(Math.random() * props.columns)

            let cell = board[randomRow][randomColumn]
            
            // checks if cell already has a mine
            // if it is true, subtract i to go back one step in the for loop
            if (cell.hasMine) {
                i--;
            } else {
                cell.hasMine = true;
            }
        }

        return board
    }

    render() {
        // creates rows
        let rows = this.state.rows.map((row, index) => {
            return (
                <Row
                    cells={row}
                    key={index}
                />
            )
        })

        return (
            <div className="board">
                {rows}
            </div>
        )
    }
}

export default Board;