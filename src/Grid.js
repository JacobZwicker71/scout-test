import React from 'react';
import './style.css';

import { autoState } from './Auto.js';

class Node {
  #out = null;

  #nodeUp = null;
  #nodeDown = null;

  #pointsNode = 0;

  #id = 0;

  constructor(out, nodeUp, nodeDown, points, id) {
      this.#out = out;
      this.#pointsNode = points;

      this.#nodeUp = nodeUp;
      this.#nodeDown = nodeDown;

      this.#id = id;
  }

  get out() { return this.#out; }
  get nodeUp() { return this.#nodeUp; }
  get nodeDown() { return this.#nodeDown; }
  get pointsNode() { return this.#pointsNode; }
  get id() { return this.#id; }

  set out(out) { this.#out = out; }
  set nodeUp(nodeUp) { this.#nodeUp = nodeUp; }
  set nodeDown(nodeDown) { this.#nodeDown = nodeDown; }
  set pointsNode(points) { this.#pointsNode = points; }

  link() {
    let head = this;
    while (head.#nodeUp != null) {
      head = head.#nodeUp;
      console.log("going up");
    }
    while (head.#nodeDown != null) {
      if (head.#pointsNode !== 0) { return false; }
      head = head.#nodeDown;
      console.log("going down");
    }
    return true;
  }
}
  
function NodeOut(props) {
  return (
    <button className="node" onClick={props.onClick}>
      {props.Node.out}
    </button>
  );
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: Array(27).fill(null)
    };
    // initiallize list via traversal
    for (let i = 0; i < this.state.nodes.length; i++) {
      this.state.nodes[i] = new Node(null, null, null, 0, i)
      if (i % 9 >= 3) {
        this.state.nodes[i].nodeUp = this.state.nodes[i - 3];
        this.state.nodes[i - 3].nodeDown = this.state.nodes[i];
      }
      // if (i % 9 < 6) {
        
      // }
      // i % 3 === 2 ? this.state.nodes[i].nodeUp : this.state.nodes[i].nodeUp
      // this.state.nodes[i] = new Node(null,
      //                               i % 9 < 3 ? null : this.state.nodes[i - 3],
      //                               i % 9 >= 6 ? null : this.state.nodes[i + 3],
      //                               0,
      //                               i);
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
    
    nodes[i].pointsNode += autoState.state && nodes[i].pointsNode !== 0 ? 1 : 0;
    console.log(nodes[i].pointsNode)

    this.setState({
      nodes: nodes,
    });

    console.log(nodes[i].link() ? "true" : false);

    // console.log(nodes[i].nodeDown.id == null ? nodes[i].nodeDown.id : "null");
    // console.log(nodes[i].nodeUp.id == null ? nodes[i].nodeUp.id : "null");
  }

  renderNode(i) {
    return(
      <NodeOut
        Node = {this.state.nodes[i]}
        onClick = {() => this.score(i)}
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

export default Grid;