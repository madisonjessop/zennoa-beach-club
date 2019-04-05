import React, { Component } from "react";
import axios from "axios";

import PlanAuth from "../auth/plan-auth";
import PlanMyTrip from "./plan-my-trip";

export default class Plan extends Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(this.props.location.search);
    const token = params.get('user_token');
    const that = this;

    if (token && token.length > 0){
      getFromZennoaToken();
    }

    async function getFromZennoaToken() {
      const config = {
        method: 'post',
        url: 'https://app.zennoasandbox.com/auth?user_token='+token,
        headers: {"Authorization": 'Token token="7WABEsAQfGcM1z2c5nvVMsSA"', 'Content-Type': 'application/json'}
      }
      let res = await axios(config);
      return that.setState({user: res.data});
    }
  } 

  render() {
    if (this.state && this.state.user.id != null){
      return <PlanMyTrip user={this.state.user} email={this.state.user.email}/>
    } else {
      return <PlanAuth />
    }
  }
}