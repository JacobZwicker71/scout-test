import React from 'react';
import './style.css';

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

export default function community() {
  return (
    <section>
      <Community />
    </section>
  )
}