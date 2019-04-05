import React from "react";
import axios from "axios";
import { withRouter } from "react-router"; 
import { NavLink } from "react-router-dom";


const Header = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="header">
      <div className="top-black">
        <div className="top-black-left">
          <a href="https://app.zennoa.com/start" className="join">
            <span>Join</span>
          </a>
        </div>
        
        <div className="top-black-right">
          <a href="https://app.zennoa.com" className="login">
            <span>Login</span>
          </a>

          {/* <div className="languages">
            <div id="currentLanguage">English</div>
            <ul>
              <li>
                <a href="/jp/">日本語</a>
              </li>
              <li>
                <a href="/es/">Español</a>
              </li>
              <li>
                <a href="/ru/">Русский</a>
              </li>
              <li>
                <a href="/en/">English</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="navigation-wrapper">
        <div className="nav-left-side">
          <a href="https://zennoa.com" className="zennoaHome"></a>

          {props.userStatus === true ? (
            dynamicLink("/plan-my-trip", "Plan My Trip")
          ) : null}
        </div>

        <div className="nav-right-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/about" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/qualify" activeClassName="nav-link-active">
              Qualify
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/plan" activeClassName="nav-link-active">
              Plan
            </NavLink>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default withRouter(Header);
