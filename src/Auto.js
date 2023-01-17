import React from 'react';
import './style.css';

function AutoButton(props) {
  return (
    <button className='auto' onClick={props.onClick}>
      {"Auto\n"}
      {props.auto ? "on" : "off"}
    </button>
  )
}

class Auto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoState: true,
    }
  }

  autoToggle() {
    const autoState = this.state.autoState;

    this.setState({
      autoState: !autoState
    });
  }

  renderAuto() {
    return (
      <AutoButton
        auto={this.state.autoState}
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

export default function auto() {
  return (
    <section>
      <Auto />
    </section>
  )
}