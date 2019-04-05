import React, { Component } from 'react';
import axios from 'axios';

export default class RSVP extends Component {
  constructor() {
    super();

    this.state = {
      fName: '',
      lname: '',
      affID: '',
      email: '',
      roomType: '',
      companion: '',
      excursion: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, affID, email, roomType, companion, excursion } = this.state;

    axios.post('/', { fname, lname, affID, email, roomType, companion, excursion })
      .then((result) => {
        //access the results here....
      });
  }

  render() {
    const { fname, lname, affID, email, roomType, companion, excursion } = this.state;
    return (
      <div className="rsvp-form">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-25">
              <label>First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="fname"
                value={fname}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="lname"
                value={lname}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Affiliate ID</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="affID"
                value={affID}
                onChange={this.onChange}
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-25">
              <label>Email</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Room Type</label>
            </div>
            <div className="col-75">
              <select id="roomType" name="roomType">
                <option value="sharedAff">Shared with Affiliate</option>
                <option value="single">Single</option>
                <option value="shareGuest">Shared with Guest</option>
              </select>
            </div>
          </div>
          
          <div className="row">
            <div className="col-25">
              <label>Full Name & ID of Travel Companion/Guest</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="companion"
                value={companion}
                onChange={this.onChange}
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-25">
              <label>Will you join us on the Boat Tour Excursion?</label>
            </div>
            <div className="col-75">
              <select id="excursion" name="excursion">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="maybe">Maybe</option>
              </select>
            </div>
          </div>

          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}