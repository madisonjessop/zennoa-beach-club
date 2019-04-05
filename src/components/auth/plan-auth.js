import React, { Component } from 'react';

import LoginImg from "../../../static/assets/zennoa-website-images/marketing/login-img.jpg";

export default class PlanAuth extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="auth-page-wrapper">
        <div 
          className="left-column"
          style={{
            backgroundImage: `url(${LoginImg})`
          }} 
        />

        <div className="right-column">
          <h1>Plan Your Trip</h1>

          <p>Please verify your ZENNOA Affiliate Account to plan your Beach Club trip to Thailand!</p>

          <a href="https://app.zennoasandbox.com/auth?api_key=bti2v6gaySbqXFAkMBPujz6P&redirect_to=http%3A%2F%2Flocalhost%3A3000%2Fplan" className="verify-btn">VERIFY</a>
        </div>
      </div>
    )
  }
}