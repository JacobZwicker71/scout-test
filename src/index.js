import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import Grid from './Grid.js';
import Community from './Community.js';

class Field extends React.Component {
  render() {
    return (
      <div className="field-container">
        <div className="game-field">
          <Grid />
        </div>
        <div className="Community-container">
          <Community />
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Field />);
