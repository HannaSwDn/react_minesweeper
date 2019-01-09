import React, { Component } from 'react';
import Board from './components/Board'
import './Minesweeper.css';

class Minesweeper extends Component {
  state = {
    rows: 10,
    columns: 10,
    flags: 10,
    mines: 10
  }

  render() {
    return (
      <div className="minesweeper">
          <Board />
      </div>
    );
  }
}

export default Minesweeper;
