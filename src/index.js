import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function Node(props) {
  return(
    <button className="node" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: Array(9).fill(null),
    };
  }

  score(i) {
    const nodes = this.state.nodes.slice();
    if ((i + 1) % 3 !== 0) {
      if (nodes[i] === null) {
        nodes[i] = ((i !== 3  && i !== 4) ? 'o' : 'x');
      } else {
        nodes[i] = null;
      }
    } else {
      if (nodes[i] === null) {
        nodes[i] = ((nodes[i] === 'x') ? 'o' : 'x');
      }
      else if (nodes[i] === 'x') {
        nodes[i] = 'o';
      }
      else {
        nodes[i] = null;
      }
    }
    this.setState({
      nodes: nodes,
    });
  }

  renderNode(i) {
    return(
      <Node
        value={this.state.nodes[i]}
        onClick={() => this.score(i)}
      />
    );
  }

  render() {
    return (
      <div className="grid-container">
      {/* outer 1 */}
          <div className="node-container">
          <div className="node-row">
            {this.renderNode(0)}
            {this.renderNode(1)}
            {this.renderNode(2)}
          </div>
          <div className="node-row">
            {this.renderNode(3)}
            {this.renderNode(4)}
            {this.renderNode(5)}
          </div>
          <div className="node-row">
            {this.renderNode(6)}
            {this.renderNode(7)}
            {this.renderNode(8)}
          </div>
        </div>

      {/* coopertition */}
        <div className="node-container">
          <div className="node-row">
            {this.renderNode(9)}
            {this.renderNode(10)}
            {this.renderNode(11)}
          </div>
          <div className="node-row">
            {this.renderNode(12)}
            {this.renderNode(13)}
            {this.renderNode(14)}
          </div>
          <div className="node-row">
            {this.renderNode(15)}
            {this.renderNode(16)}
            {this.renderNode(17)}
          </div>
        </div>

        {/* outer 2 */}
        <div className="node-container">
          <div className="node-row">
            {this.renderNode(18)}
            {this.renderNode(19)}
            {this.renderNode(20)}
          </div>
          <div className="node-row">
            {this.renderNode(21)}
            {this.renderNode(22)}
            {this.renderNode(23)}
          </div>
          <div className="node-row">
            {this.renderNode(24)}
            {this.renderNode(25)}
            {this.renderNode(27)}
          </div>
        </div>
      </div>
    );
  }
}

class Field extends React.Component {
  render() {
    return (
      <div className="field-container">
        <div className="game-field">
          <Grid />
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Field />);
