import React, { Component } from 'react';

import Payment from '../forms/payment';

export default class PlanMyTrip extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div className="plan-trip">
        <div className="plan-title">
          <h1>Welcome, {this.props.user.first_name}</h1>
        </div>

        <div className="plan-trip-apps">
          <Payment user={this.props.user} />
        </div>

      </div>
    );
  }
}

