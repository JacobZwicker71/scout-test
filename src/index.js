import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class Node {
  #value = 0;
  constructor(value) {
    this.#value = value;
  }

  get value() {
    return (this.#value);
  }

  set value(_value) {
    this.#value = _value;
  }
}

function NodeOut(props) {
  return (
    <button className="node" onClick={props.onClick}>
      {props.Node.value}
    </button>
  );
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: Array.from(Array(27), () => new Array(2))
    };
    for (let i = 0; i < this.state.nodes.length; i++) {
      this.state.nodes[i] = new Node();
    }
  }

  update(i) {
    const nodes = this.state.nodes.slice();
    
    if (i % 3 === 2) {
      if (nodes[i].value == null) {
        nodes[i].value = 'x';
      } else {
        nodes[i].value = nodes[i].value === 'x' ? 'o' : null;
      }
    } else {
      if ((i % 9 !== 3) && (i % 9 !== 4)) {
        nodes[i].value = nodes[i].value == null ? 'o' : null;
      } else {
        nodes[i].value = nodes[i].value == null ? 'x' : null;
      }
    }

    this.setState({
      nodes: nodes,
    });

    console.log("click");
  }

  renderNode(i) {
    return(
      <NodeOut
        Node={this.state.nodes[i]}
        onClick={() => this.update(i)}
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
            {this.renderNode(26)}
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
