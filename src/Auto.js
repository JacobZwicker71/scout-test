import React from 'react';
import './style.css';

function AutoButton(props) {
  return (
    <button className='auto' onClick={props.onClick}>
      {"Auto "}
      {props.auto ? "on" : "off"}
    </button>
  )
}

class Auto extends React.Component {
  // static autoState = true;
  constructor(props) {
    super(props);
    this.state = {
      autoState: true,
    }
  }

  get autoState() { console.log(this.state.autoState); return this.state.autoState; }

  autoToggle() {
    const autoState = this.autoState;

    this.setState({
      autoState: !autoState
    });
  }

  renderAuto() {
    return (
      <AutoButton
        auto={this.autoState}
        onClick={() => this.autoToggle()}
      />
    );
  }

  render() {
    return (
      <div className='autoButton'>
        {this.renderAuto()}
      </div>
    )
  }
}

const getState = true;

export { getState, Auto };