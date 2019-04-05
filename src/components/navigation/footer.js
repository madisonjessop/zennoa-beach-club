import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="social-links">
          <a href="https://www.facebook.com/zennoalife/" className="facebook" target="_blank" title="Facebook">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>

          <a href="https://twitter.com/zennoalife" className="twitter" target="_blank" title="Twitter">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>

          <a href="https://www.instagram.com/zennoa/" className="instagram" target="_blank" title="Instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>

          <a href="https://vimeo.com/channels/zennoaenglish" className="vimeo" target="_blank" title="Vimeo">
            <FontAwesomeIcon icon={['fab', 'vimeo-v']} />
          </a>
        </div>

        <div className="copyright">
          &copy; 2019 ZENNOA, ALL RIGHTS RESERVED 
        </div>

        <div className="contact-link">
          <a href="https://www.zennoa.com/contact-us/">CONTACT US</a>
        </div>
      </div>
    ) 
  }
}