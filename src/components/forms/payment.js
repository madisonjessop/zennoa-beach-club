import React, { Component } from 'react';


export default class Payment extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    let url_string = "https://api.zennoasandbox.com/api/users/" + this.props.user.id + "/beach_club";
    return (
      <div className="payment">
        <div className="payment-wrapper">
          <div className="payment-description">
            <h1>{this.props.user.first_name},</h1>
            <h1>Reserve Your Spot!</h1>
            <p>Make a payment towards your 2019 Beach Club trip to Thailand! Deposits are due no later than June 20, 2019. If you fully qualify for your trip, your deposit will be refunded by November 1, 2019.</p>
          </div>

          <div className="payment-amount">
            <h4>$150</h4>
            <p>USD, plus applicable tax.</p>
          </div>
          
          <div className="payment-form">
            <form id="payment" method="post" action={url_string}>
              <div className="pay-row">
                <div className="pay-input">
                  <input type="text" name="full_name" placeholder="Name on Card"/>
                </div>

                <div className="pay-input">
                  <input type="text" name="cc_number" placeholder="CC Number" />
                </div>
              </div>
              
              <div className="pay-row">
                <div className="pay-input">
                  <input type="text" name="month" placeholder="Exp. MM"/>
                </div>

                <div className="pay-input">
                  <input type="text" name="year" placeholder="Exp. YYYY"/>
                </div>
              </div>

              <div className="pay-btn">
                <input type="submit" value="Make Payment"/>
              </div>
            </form> 
          </div>
        </div>
     </div>
    )
  }
}