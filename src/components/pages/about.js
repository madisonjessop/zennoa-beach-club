import React, { Component } from 'react';

import marriottResort from '../../../static/assets/thailand-images/marriott-resort.jpg';
import boatTour from '../../../static/assets/thailand-images/boat-tour.jpg';
import mtgRoom from '../../../static/assets/thailand-images/marriott-mtg-room.jpg';
import galaDinner from '../../../static/assets/thailand-images/gala-dinner.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content-wrapper">
          <div className="about-title">
            <h1>Beach Club</h1>
          </div>

          <div className="content-description">
            <p>We are so excited for ZENNOA’s 3rd annual "Beach Club" to be held in the beautiful Phuket, Thailand November 17 - 22, 2019! Phuket is among the world’s finest beach destinations, with fine white sands, nodding palm trees, and blue lagoons. This amazing location makes for a dream-like atmosphere.</p>
          
            <p>At this leadership retreat for Zen 4’s and above, our goal is to ensure you have several days to rest, relax, and strengthen relationships. Not only will you make new friends with fellow affiliates and the ZENNOA team, but you will also take part in success training to help you grow your business.</p>
          
            <p>We can’t wait to share our vision and commitment for the future as we continue to work together. See you on the beach!</p>
          </div>
        </div>

        <div className="squares-wrapper">
          <div className="squares">
            <div className="square">
              <div className="img-wrapper">
                <img src={marriottResort} />
              </div>

              <div className="square-text-wrapper">
                <h2>The Resort</h2>

                <p>The Phuket Marriott Resort & Spa, Merlin Beach is a luxurious 5-star hotel. Located only steps from the beach with three resort pools, a full service spa (and more!), it's an ideal location for this year's trip. Visit their website to learn more about this incredible resort!</p>

                <a href="https://www.marriott.com/hotels/travel/hktmb-phuket-marriott-resort-and-spa-merlin-beach/" className="marriott" target="_blank" title="Marriott">Phuket Marriott Resort & Spa, Merlin Beach</a>
              </div>
            </div>

            <div className="square">
              <div className="square-text-wrapper">
                <h2>Excursions</h2>

                <p>See the natural beauty of Thailand on a speed boat tour! We will be taking this excursion as a group with all who would like to participate. This will be an all-day activity, and we’ll return to the resort in time for dinner. Stay tuned for more information about this excursion, and be sure to RSVP!</p>

                <a href="/plan" className="rsvp" title="RSVP">Reserve Your Spot</a>
              </div>

              <div className="img-wrapper">
                <img src={boatTour} />
              </div>
            </div>

            <div className="square">
              <div className="img-wrapper">
                <img src={mtgRoom} />
              </div>

              <div className="square-text-wrapper">
                <h2>Trainings</h2>

                <p>Come ready to learn how to build your business and find your zennoa! This half-day training will be led by the Founders, corporate staff, and key leaders. Attending affiliates will be trained by some of the best in the industry, as well as be the first to hear special announcements and exciting things in store for ZENNOA! </p>
              </div>
            </div>

            <div className="square">
              <div className="square-text-wrapper">
                <h2>Gala Dinner</h2>

                <p>We want to celebrate YOU! This farewell dinner will be held on our last night together in Thailand. Spend time with fellow affiliates as the Founders recognize you for your achievements.</p>
              </div>

              <div className="img-wrapper">
                <img src={galaDinner} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}