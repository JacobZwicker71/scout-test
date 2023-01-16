import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class Node {
  #out = null;
  #pointsNode = 0;
  constructor(out, points) {
    this.#out = out;
    this.#pointsNode = points;
  }

  get out() { return (this.#out); }
  get pointsNode() { return (this.#pointsNode); }

  set out(out) { this.#out = out; }
  set pointsNode(points) { this.#pointsNode = points; }
}

function NodeOut(props) {
  return (
    <button className="node" onClick={props.onClick}>
      {props.Node.out}
    </button>
  );
}

class ChargeStation {
  #out = null;
  #pointsCharge = 0;
  constructor(out, points) {
    this.#out = out;
    this.#pointsCharge = points;
  }

  get out() { return (this.#out); }
  get pointsCharge() { return (this.#pointsCharge); }

  set out(out) { this.#out = out; }
  set pointsCharge(points) { this.#pointsCharge = points; }
}

function ChargeOut(props) {
  return (
    <button className="chargeStation" onClick={props.onClick}>
      {props.ChargeStation.out}
    </button>
  )
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

  score(i) {
    const nodes = this.state.nodes.slice();
    
    if (i % 3 === 2) {
      if (nodes[i].out == null) {
        nodes[i].out = 'x';
      } else {
        nodes[i].out = nodes[i].out === 'x' ? 'o' : null;
      }
    } else {
      if ((i % 9 !== 3) && (i % 9 !== 4)) {
        nodes[i].out = nodes[i].out == null ? 'o' : null;
      } else {
        nodes[i].out = nodes[i].out == null ? 'x' : null;
      }
    }

    if (i % 3 === 0) {
      nodes[i].pointsNode = nodes[i].out == null ? 0 : 5;
    }
    else if (i % 3 === 1) {
      nodes[i].pointsNode = nodes[i].out == null ? 0 : 3;
    }
    else {
      nodes[i].pointsNode = nodes[i].out == null ? 0 : 2;
    }

    console.log(nodes[i].pointsNode);

    this.setState({
      nodes: nodes,
    });
  }

  renderNode(i) {
    return(
      <NodeOut
        Node={this.state.nodes[i]}
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
            {this.renderNode(26)}
          </div>
        </div>
      </div>
    );
  }
}

class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chargeStation: new ChargeStation(),
    }
  }

  score() {
    const chargeStation = this.state.chargeStation;

    if (chargeStation.out == null) {
      chargeStation.out = "-";
      chargeStation.pointsCharge = 6;
    }
    else if (chargeStation.out === "-") {
      chargeStation.out = "+";
      chargeStation.pointsCharge = 10;
    }
    else {
      chargeStation.out = null;
      chargeStation.pointsCharge = 0;
    }

    this.setState({
      chargeStation: chargeStation,
    });
  }

  renderCharge() {
    return(
      <ChargeOut
        ChargeStation={this.state.chargeStation}
        onClick={() => this.score()}
      />
    );
  }

  render() {
    return(
      <div className="Community">
        {this.renderCharge()}
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
