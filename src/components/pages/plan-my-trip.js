import React, { Component } from 'react';

import RSVP from '../forms/rsvp';
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
        
        {/* <RSVP /> */}
        <div className="plan-trip-apps">
          <div className="agreement-wrapper">
            {/* <div id="ds-terms-of-service"></div>

            <script src="https://demo.docusign.net/clickapi/sdk/latest/docusign-click.js"></script>

            <script>docuSignClick.Clickwrap.render({
              environment: 'https://demo.docusign.net',
              accountId: '2b65f8cc-8eaf-4a2a-995e-8855b86793d3',
              clickwrapId: 'cf81891b-be0d-4668-ba61-0e4599ab31fa',
              clientUserId: {email},
              format: 'modal'
            }, '#ds-terms-of-service');</script>  */}
          </div>
          
          <Payment user={this.props.user} />
        </div>
        
      </div>
    );
  }
}

