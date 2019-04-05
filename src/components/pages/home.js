import React, { Component } from 'react';

import beachClubLogo from '../../../static/assets/zennoa-website-images/logos-icons/beach-club-white.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero-section">
          <div className="hero-logo">
            <img src={beachClubLogo} />
          </div>

          <div className="hero-title">
            <h1>Phuket, Thailand</h1>
          </div>
        </div>

        <div className="features-section">
          <div className="columns-wrapper">
            <div className="column">
              <a href="/about">About Thailand
                <p>
                  Learn more about this year's destination with information about the resort, excursions, dates, and more.
                </p>
              </a>
            </div>

            <div className="column">
              <a href="/qualify">How to Qualify
                <p>
                  Find out how you can qualfiy to attend and how to help your team earn their trip too!
                </p>
              </a>
            </div>

            <div className="column">
              <a href="/plan">Plan Your Trip
                <p>
                  Make traveling a breeze with our travel itinerary, FAQs, and helpful resources.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}
