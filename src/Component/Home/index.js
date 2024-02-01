import { Component } from "react";
import { VscQuote } from "react-icons/vsc";
import { FaMedal } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrUserExpert } from "react-icons/gr";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <div class="home-landing">
          <h1 className="landing-heading">
            Want to Become LAKHPATI & CROREPATI?
          </h1>
          <p className="landing-desc">Get 1st Rank: IPL &Mega Contest Trick</p>
        </div>
        <div className="home-about">
          <h1 className="home-about-heading">About Fantasy Sports</h1>
          <p className="home-about-para">
            <span className="home-about-para-span-start">
              <VscQuote class="VscQuote-start" />
            </span>{" "}
            {"      "}
            Dream Eleven and Fantasy sports sincere users are taking advantage
            of our high performing teams by joining our Prime Membership. We
            have best experts of Fantasy Sports world who have 5 to 10 years
            experience of Dream11. Our prime users are winning 8-9 contests out
            of 10 in H2H. H3H, H4H and Small Leagues. Also we give sudden
            lackpot of Grand League & Mega Contest top rank to our Users. Your
            satisfaction is our priority{" "}
            <span className="home-about-para-span">
              <VscQuote class="VscQuote-end" />
            </span>
          </p>
        </div>
        <div className="home-choose">
          <h1 className="home-about-heading">Why Choose Us</h1>
          <ul className="choose-list">
            <li className="choose-item">
              <HiMiniUserGroup className="choose-icon" />
              <p className="choose-item-para">1000 +</p>
              <h1 className="choose-item-heading">USERS</h1>
            </li>
            <li className="choose-item">
              <GrUserExpert className="choose-icon" />
              <p className="choose-item-para">>20+</p>
              <h1 className="choose-item-heading">EXPERTS</h1>
            </li>
            <li className="choose-item">
              <FaMedal className="choose-icon" />
              <p className="choose-item-para">5+ years of</p>
              <h1 className="choose-item-heading">EXPERIENCE</h1>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
