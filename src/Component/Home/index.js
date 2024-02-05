import { Component } from "react";
import Subscription from "../Subscription";
import { VscQuote } from "react-icons/vsc";
import { FaMedal } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrUserExpert } from "react-icons/gr";
import {
  reviewDetails,
  screenShotDetails,
  leagueDetails,
  featureDetails,
  venueDetails,
  combainDetail,
  cskPlayers,
  rcbPlayers,
} from "../../Object/index";

import "./style.css";

class Home extends Component {
  render() {
    const compare = {
      id: 1,
      teamLogo: "https://wallpapercave.com/wp/wp4166507.jpg",
      oppoLoog: "https://wallpapercave.com/wp/wp4248215.jpg",
    };
    return (
      <div className="home-main">
        <div className="home-landing">
          <h1 className="landing-heading">
            Want to Become LAKHPATI & CROREPATI?
          </h1>
          <p className="landing-desc">Get 1st Rank: IPL &Mega Contest Trick</p>
        </div>
        <div className="home-about">
          <h1 className="home-about-heading">About Fantasy Sports</h1>
          <p className="home-about-para">
            <span className="home-about-para-span-start VscQuote-start">
              <VscQuote />
            </span>{" "}
            {"      "}
            Dream Eleven and Fantasy sports sincere users are taking advantage
            of our high performing teams by joining our Prime Membership. We
            have best experts of Fantasy Sports world who have 5 to 10 years
            experience of Dream11. Our prime users are winning 8-9 contests out
            of 10 in H2H. H3H, H4H and Small Leagues. Also we give sudden
            lackpot of Grand League & Mega Contest top rank to our Users. Your
            satisfaction is our priority{" "}
            <span className="home-about-para-span VscQuote-end">
              <VscQuote />
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

        {/*        
        <div className="home-testimonal">
          <h1 className="home-about-heading">Testimonial</h1>
        </div>
        */}

        <div className="home-reveiw">
          <h1 className="home-about-heading">Reviews</h1>
          <ul className="review-list">
            {reviewDetails.map((eachItem) => (
              <li className="review-item" key={eachItem.id}>
                <div className="review-head">
                  <div className="review-head-left">
                    <img
                      src={eachItem.profileUrl}
                      alt={eachItem.name}
                      className="review-profile"
                    />
                    <div className="name-review">
                      <p className="review-name"> {eachItem.name}</p>
                      <img
                        src="https://th.bing.com/th/id/OIP.T9kmvR0RBB_6Ulwh4ppKYgHaD8?w=310&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="star"
                        className="rating-star"
                      />
                    </div>
                  </div>

                  <div className="review-head-left">
                    <p className="review-date">{eachItem.date}</p>
                  </div>
                </div>
                <p className="review-content">{eachItem.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="home-screen">
          <h1 className="home-about-heading">Winning Screenshots</h1>
          <ul className="home-screen-list">
            {screenShotDetails.map((eachItem) => (
              <li className="home-screen-item" key={eachItem.id}>
                <img
                  src={eachItem.imageUrl}
                  alt="screen shot"
                  className="screen-image"
                />
                <p className="screen-des">Winning Screen Shoot </p>
                <p className="screen-team">
                  {eachItem.teamOne} VS {eachItem.teamTwo}
                </p>
                <p className="screen-date">{eachItem.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="home-league">
          <h1 className="home-about-heading">All Leagues & Matches</h1>
          <ul className="league-list">
            {leagueDetails.map((eachItem) => (
              <li className="league-item" key={eachItem.id}>
                <p className="league-no">MATCH {eachItem.matchNo}</p>
                <div className="league-image-card">
                  <img
                    src={eachItem.teamOne}
                    alt="team logo"
                    className="league-team-logo"
                  />
                  <img
                    src="https://ik.imagekit.io/9pisu4akvm/OIP-removebg-preview.png?updatedAt=1706992935092"
                    alt="vs logo"
                    className="league-vs-logo"
                  />
                  <img
                    src={eachItem.teamTwo}
                    alt="team logo"
                    className="league-team-logo"
                  />
                </div>
                <p className="league-date">{eachItem.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="des-section">
          <h1 className="home-about-heading">
            Best Fantasy Teams predection after Line up
          </h1>
          <p className="des-section-desc">
            Dear users! Fantasy Guruchela is #1 Fantasy Sports Fantasy sports
            prediction website since 2015. We have of skilled Fantasy sports
            author who provide you Free Fantasy Sports Team News Updates. Our
            team is very talented and have too much experience of Fantasy Sports
            websites like Fantasy Sports, Myteam11, Playerzpot, Halaplay,
            Fanfight etc. Our users's always positive reviews show that we are
            Best Fantasy Sports Prediction Website. Our skilled experts's make
            tough analysis before every Fantasy Sports contest only for you.
            Here you lso get Fantasy Sports Grand League Winning tricks along
            with perfect GL Teams. If you are wondering here and there for Best
            Fantasy Sports Paid Teams, We can assure you that you are in right
            place now. You can j oin our Best Fantasy Sports Prediction Telegram
            Channel to check Winning Teams and daily winning proofs. So guys
            first of all you should have an review on Fantasy Sports Today's
            Match Prediction.
          </p>
          <h1 className="home-about-heading">Lowest Subscription Fees</h1>
          <p className="des-section-desc">
            Lorem ipsum you would not have seen this kind of huge winnings and
            earnings in history. Its our responsibility To fill your wallet,
            Once you become ourPrime User. Fantasy Pandit is another name of
            trust. Everyone know about our fantasy experts’s potential thats why
            google give us always 1st ranking. So don’t miss opportunity and
            join fastWe can say that you would not have us always 1st ranking.
            seen this kind of huge winnings and can say that you would not have
            , Once you become our earnings in history. Its our responsibility To
            fill your wallet, Once you become our know about our Prime User.
            Fantasy Pandit is another name of trust. Everyone know about our
            google give fantasy experts’s potential thats why google give us
            always 1st ranking. google give So don’t miss opportunity and join
            fast
          </p>
        </div>
        <div className="future-section">
          <h1 className="home-about-heading">Features</h1>{" "}
          <h1 className="home-about-sub-heading">
            Best Fantasy Teams predection after Line up
          </h1>
          <ul className="feature-list">
            {featureDetails.map((eachItem) => (
              <li className="feature-item" key={eachItem.id}>
                <div className="feature-inner-item-left">
                  <p className="future-status">{eachItem.matchStatus}</p>
                  <p className="future-date">{eachItem.date}</p>{" "}
                  <p className="future-status">Place: {eachItem.place}</p>
                </div>
                <div className="feature-inner-item-right">
                  <div className="feture-inner-right-top">
                    <div className="feature-top-image-text">
                      <img
                        src={eachItem.logoOne}
                        alt="logo"
                        className="feature-image"
                      />
                      <p>{eachItem.team}</p>
                    </div>
                    <img
                      src="https://ik.imagekit.io/9pisu4akvm/OIP-removebg-preview.png?updatedAt=1706992935092"
                      alt="logo vs"
                      className="feature-vs-logo"
                    />
                    <div className="feature-top-image-text">
                      <img
                        src={eachItem.logoTwo}
                        alt="logo"
                        className="feature-image"
                      />
                      <p>{eachItem.oppTeam}</p>
                    </div>
                  </div>
                  <p className="future-status">Score</p>{" "}
                  <p className="future-date">{`${eachItem.team} /  ${eachItem.score}`}</p>{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="venue-section">
          <h1 className="home-about-heading">Venue Stats</h1>
          <ul className="venue-list">
            {venueDetails.map((eachItem) => (
              <li className="venue-item" key={eachItem.id}>
                <div className="venue-logo-section">
                  <div className="feature-top-image-text">
                    <img
                      src={eachItem.logoOne}
                      alt="logo"
                      className="feature-image"
                    />
                    <p>{eachItem.team}</p>
                  </div>
                  <img
                    src="https://ik.imagekit.io/9pisu4akvm/OIP-removebg-preview.png?updatedAt=1706992935092"
                    alt="logo vs"
                    className="feature-vs-logo"
                  />
                  <div className="feature-top-image-text">
                    <img
                      src={eachItem.logoTwo}
                      alt="logo"
                      className="feature-image"
                    />
                    <p>{eachItem.oppTeam}</p>
                  </div>
                </div>
                <div className="venue-detail">
                  <p className="venue-detail-text">Venue : {eachItem.time}</p>
                  <p className="venue-detail-text">place : {eachItem.place}</p>
                </div>
                <img
                  src={eachItem.imageUrl}
                  alt="statium2  "
                  className="statium-image"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="home-chart">
          <h1 className="home-about-heading">Team Comparison</h1>
          <div className="compare-container">
            <div className="compare-header">
              <button className="compare-team-button  bg-yellow">CSK</button>
              <img
                src="https://ik.imagekit.io/9pisu4akvm/OIP-removebg-preview.png?updatedAt=1706992935092"
                alt="vs logo"
                className="compare-vs-logo"
              />
              <button className="compare-team-button  bg-red">RCB</button>
            </div>
            <div className="compare-body">
              <div className="compare-sub-header">
                <img
                  src={compare.teamLogo}
                  alt="team logo"
                  className="compare-sub-header-team-logo"
                />
                <div className="compare-line-hor"></div>
                <p className="compare-match-number">Match 31</p>
                <div className="compare-line-hor"></div>
                <img
                  src={compare.oppoLoog}
                  alt="team logo"
                  className="compare-sub-header-team-logo"
                />
              </div>{" "}
              <div className="compare-vertical-line-container">
                <div className="compare-vertical-line-container-inner">
                  <div className="compare-vertical-line-container-inner-line"></div>
                </div>
                <div className="compare-vertical-line-container-inner">
                  <div className="compare-vertical-line-container-inner-line"></div>
                </div>
              </div>
              <div className="compare-sub-body">
                <p className="compare-sub-body-text">20</p>
                <div className="compare-sub-body-middle">
                  <div className="compare-sub-body-middle-first">
                    {" "}
                    <div className="compare-sub-body-middle-left-span"></div>
                    <div className="compare-sub-body-middle-right-span  bg-green"></div>
                  </div>
                  <p className="compare-match-number">Won</p>
                  <div className="compare-sub-body-middle-first">
                    {" "}
                    <div className="compare-sub-body-middle-left-span"></div>
                    <div className="compare-sub-body-middle-right-span bg-green"></div>
                  </div>
                </div>
                <p className="compare-sub-body-text">10</p>
              </div>
              <div className="compare-vertical-line-container">
                <div className="compare-vertical-line-container-inner">
                  <div className="compare-vertical-line-container-inner-line"></div>
                </div>
                <div className="compare-vertical-line-container-inner">
                  <div className="compare-vertical-line-container-inner-line"></div>
                </div>
              </div>
              <div className="compare-sub-body">
                <p className="compare-sub-body-text">10</p>
                <div className="compare-sub-body-middle">
                  <div className="compare-sub-body-middle-first">
                    {" "}
                    <div className="compare-sub-body-middle-left-span"></div>
                    <div className="compare-sub-body-middle-right-span  bg-red"></div>
                  </div>
                  <p className="compare-match-number">LOSS</p>
                  <div className="compare-sub-body-middle-first">
                    {" "}
                    <div className="compare-sub-body-middle-left-span"></div>
                    <div className="compare-sub-body-middle-right-span bg-red"></div>
                  </div>
                </div>
                <p className="compare-sub-body-text">20</p>
              </div>
              <div className="compare-vertical-line-container">
                <div className="compare-vertical-line-container-inner">
                  <div className="compare-vertical-line-container-inner-line"></div>
                </div>
                <div className="compare-vertical-line-container-inner">
                  <div className="compare-vertical-line-container-inner-line"></div>
                </div>
              </div>
              <div className="compare-sub-body">
                <p className="compare-sub-body-text">1</p>
                <div className="compare-sub-body-middle">
                  <div className="compare-sub-body-middle-first">
                    {" "}
                    <div className="compare-sub-body-middle-left-span"></div>
                    <div className="compare-sub-body-middle-right-span bg-grey"></div>
                  </div>
                  <p className="compare-match-number">RESULT</p>
                  <div className="compare-sub-body-middle-first">
                    {" "}
                    <div className="compare-sub-body-middle-left-span"></div>
                    <div className="compare-sub-body-middle-right-span bg-grey"></div>
                  </div>
                </div>
                <p className="compare-sub-body-text">1</p>
              </div>
              <div className="compare-vertical-line-container">
                <div className="compare-vertical-line-container-inner">
                  <div className="compare-vertical-line-container-inner-line"></div>
                </div>
                <div className="compare-vertical-line-container-inner">
                  <div className="compare-vertical-line-container-inner-line"></div>
                </div>
              </div>
              <div className="compare-sub-body">
                <p className="compare-sub-body-text">170</p>
                <div className="compare-sub-body-middle">
                  <div className="compare-sub-body-middle-first">
                    {" "}
                    <div className="compare-sub-body-middle-left-span"></div>
                    <div className="compare-sub-body-middle-right-span bg-grey"></div>
                  </div>
                  <p className="compare-match-number">SCORE</p>
                  <div className="compare-sub-body-middle-first">
                    {" "}
                    <div className="compare-sub-body-middle-left-span"></div>
                    <div className="compare-sub-body-middle-right-span bg-grey"></div>
                  </div>
                </div>
                <p className="compare-sub-body-text">190</p>
              </div>
            </div>
          </div>
        </div>
        <div className="des-section">
          <h1 className="home-about-heading">Win Prediction</h1>
          <p className="des-section-desc">
            Lorem ipsum you would not have seen this kind of huge winnings and
            earnings in history. Its our responsibility To fill your wallet,
            Once you become ourPrime User. Fantasy Pandit is another name of
            trust. Everyone know about our fantasy experts’s potential thats why
            google give us always 1st ranking. So don’t miss opportunity and
            join fastWe can say that you would not have us always 1st ranking.
            seen this kind of huge winnings and can say that you would not have
            , Once you become our earnings in history. Its our responsibility To
            fill your wallet, Once you become our know about our Prime User.
            Fantasy Pandit is another name of trust. Everyone know about our
            google give fantasy experts’s potential thats why google give us
            always 1st ranking. google give So don’t miss opportunity and join
            fast
          </p>
        </div>
        <div className="select-team">
          <h1 className="home-about-heading">2 Fantasy teams & 1 Guruchela </h1>
          <div className="select-list-container">
            <div className="select-list-container-inner">
              <img
                src="https://th.bing.com/th/id/OIP.OQ_HFgcM5l88xJbYS5CYEgHaE-?w=1200&h=807&rs=1&pid=ImgDetMain"
                alt="logo"
                className="select-logo"
              />

              <ul className="select-list-container-inner-list">
                {cskPlayers.map((eachItem) => (
                  <li
                    className="select-list-container-inner-item"
                    key={eachItem.id}
                  >
                    {eachItem.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="select-list-container-inner">
              <img
                src="https://wallpapercave.com/wp/wp4248215.jpg"
                alt="logo"
                className="select-logo"
              />

              <ul className="select-list-container-inner-list">
                {rcbPlayers.map((eachItem) => (
                  <li
                    className="select-list-container-inner-item"
                    key={eachItem.id}
                  >
                    {eachItem.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="select-list-container-inner">
              <div className="select-list-heading-main">
                <p className="select-list-heading">Guruchela</p>
              </div>

              <ul className="select-list-container-inner-list">
                {combainDetail.map((eachItem) => (
                  <li
                    className="select-list-container-inner-item"
                    key={eachItem.id}
                  >
                    {eachItem.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Subscription />
        <div className="home-footer"></div>
      </div>
    );
  }
}

export default Home;
