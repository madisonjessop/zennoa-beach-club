import React, { Component } from 'react';

import QualifyPoints from '../../../static/assets/zennoa-website-images/marketing/qualify-points.png';
// import Card1 from '../../../static/assets/thailand-images/card1.jpg';
// import Card2 from '../../../static/assets/thailand-images/card2.jpg';
// import Card3 from '../../../static/assets/thailand-images/card3.jpg';
// import Card4 from '../../../static/assets/thailand-images/card4.jpg';
// import Card5 from '../../../static/assets/thailand-images/card5.jpg';
// import Card6 from '../../../static/assets/thailand-images/card6.jpg';

export default class Qualfiy extends Component {

  render() {
    return (
      <div className="qualify">
        <div className="qualify-title">
          <h1>Qualification</h1>
        </div>

        <div className="qualify-description">
          <p>The Qualification Period to attend this year’s Beach Club event is March 1st – August 31st, 2019. Affiliates wishing to attend must qualify as a Zen 4 or above for at least three months during the Qualification Period, and one of those months must be August 2019.</p>
        
          <p>Qualification is based on achieved Points earned by Rank. Each month an Affiliate reaches Zen 4 or above during the Qualification Period, points are allocated.</p>  

          <div className="points-chart">
            <img src={QualifyPoints}/>
            <p>1 point = 1 USD. Points are non-transferable.</p>   
          </div> 

          <p>At the end of the Qualification Period, the three months to be used in calculating Qualification Points are the two highest Rank months and the Affiliate’s August Rank.</p>
        </div>

        {/* <div className="card-wrapper">
          <div className="columns">
            <div className="column"> */}
            {/* <div className="column" onTouchStart="this.classList.toggle('hover')"> */}
              {/* <div className="container">
                <div className="front" style={{backgroundImage: `url(${Card1})`}}>
                  <div className="inner">
                    <p>Entry Ticket</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>An Entry Ticket to the event includes hotel, meeting, one group tour, all breakfasts, some lunches, some dinners, and a shuttle to/from the hotel and airport for one person. Flight is not included.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="container">
                <div className="front" style={Card2}>
                  <div className="inner">
                    <p>Qualification Points</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>Qualification Points apply to a person’s entry ticket. Remainder of points can be used towards an airplane ticket or guest entry.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="container">
                <div className="front" style={Card3}>
                  <div className="inner">
                    <p>Bonus Points</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>Bonus Points can be earned two ways: the Maintain Bonus and the Rank Advancement Bonus.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="container">
                <div className="front" style={Card4}>
                  <div className="inner">
                    <p>Shared Affiliate Room</p>
                    <span>1350 Points</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>1350 points (equivalent to $1,350) are required per person for a shared room with another qualified Affiliate.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="container">
                <div className="front" style={Card5}>
                  <div className="inner">
                    <p>Single Affiliate Room</p>
                    <span>1950 Points</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>1950 points (equivalent to $1,950) are required for a single occupancy room.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="container">
                <div className="front" style={Card6}>
                  <div className="inner">
                    <p>Affiliate w/Guest Room</p>
                    <span>2700 Points</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>2700 points (equivalent to $2,700) are required for a double occupancy room for an Affiliate and their guest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

