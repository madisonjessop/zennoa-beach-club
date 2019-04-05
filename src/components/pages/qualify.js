import React, { Component } from 'react';

import QualifyPoints from '../../../static/assets/zennoa-website-images/marketing/qualify-points.png';
import PDF1 from '../../../static/assets/zennoa-website-images/logos-icons/PDF-icon-clear.png';

export default class Qualfiy extends Component {

  render() {
    return (
      <div className="qualify">
        <div className="qualify-title">
          <h1>Qualification</h1>
        </div>

        <div className="qualify-content">
          <div className="qualify-description">
            <p>The Qualification Period to attend this year’s Beach Club event is March 1st – August 31st, 2019. Affiliates wishing to attend must qualify as a Zen 4 or above for at least three months during the Qualification Period, and one of those months must be August 2019.</p>
          
            <p>Qualification is based on achieved Points earned by Rank. Each month an Affiliate reaches Zen 4 or above during the Qualification Period, points are allocated.</p>  

            <div className="points-chart">
              <img src={QualifyPoints}/>
              <p>1 point = 1 USD. Points are non-transferable.</p>   
            </div> 

            <p>At the end of the Qualification Period, the three months to be used in calculating Qualification Points are the two highest Rank months and the Affiliate’s August Rank.</p>
          </div>

          <div className="qualify-details">
            <div className="detail">
              <h4>Qualification Points</h4>
              <p>Qualification Points apply to a person’s entry ticket. Remainder of points can be used towards an airplane ticket or guest entry.</p>
            </div>

            <div className="detail">
              <h4>Entry Ticket</h4>
              <p>An Entry Ticket to the event includes hotel, meeting, one group tour, all breakfasts, some lunches, some dinners, and a shuttle to/from the hotel and airport for one person. Flight is not included.</p>
            </div>

            <div className="detail">
              <h4>Bonus Points</h4>
              <p>Bonus Points can be earned two ways: the Maintain Bonus and the Rank Advancement Bonus.</p>
            </div>

            <div className="detail">
              <h4>Shared Affiliate Room</h4>
              <p>1350 points (equivalent to $1,350) are required per person for a shared room with another qualified Affiliate.</p>
            </div>

            <div className="detail">
              <h4>Single Affiliate Room</h4>
              <p>1950 points (equivalent to $1,950) are required for a single occupancy room.</p>
            </div>

            <div className="detail">
              <h4>Affiliate w/Guest Room</h4>
              <p>2700 points (equivalent to $2,700) are required for a double occupancy room for an Affiliate and their guest.</p>
            </div>
          </div>

          <div className="pdf-1">
            <a href="https://s3-us-west-2.amazonaws.com/zennoa-resource-library/Beach+Club/Beach-Club-2019-Qualification(EN).pdf" className="pdf1" target="_blank" title="PDF1">
              <img src={PDF1}/>
            </a>
          </div>
        </div>


      </div>
    )
  }
}

