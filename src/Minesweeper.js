import React, { Component } from 'react';
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
        
      </div>
    );
  }
}

export default Minesweeper;
