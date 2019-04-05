import React, { Component } from 'react';


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

        <div className="payment-wrapper">
          {/* <script src="https://core.spreedly.com/iframe/express-2.min.js"></script>

          SpreedlyExpress.init("C7cRfNJGODKh4Iu5Ox3PToKjniY", {
            "amount": "$9.83",
            "company_name": "Acme Widgets",
            "sidebar_top_description": "Providing quality widgets since 2015",
            "sidebar_bottom_description": "Your order total today",
            "full_name": "First Last"
          }, {
            "email": {this.props.user.email}
   //       "email": "customer@gmail.com"  
          });

          <form id="payment-form" action="https://localhost:3000/plan">
            <input type="hidden" name="payment_method_token" id="payment_method_token"/>
            <input type="button" value="Enter Payment Info" onClick="SpreedlyExpress.openView();"/>
          </form> */}
        </div>
      </div>
    );
  }
}

