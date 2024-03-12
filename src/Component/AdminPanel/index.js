import { useState } from "react";
import "./style.css";
const AdminPanel = () => {
  const iplTeams = [
    { id: 1, name: "MI" },
    { id: 2, name: "CSK" },
    { id: 3, name: "KKR" },
    { id: 4, name: "RCB" },
    { id: 5, name: "SRH" },
    { id: 6, name: "DC" },
    { id: 7, name: "RR" },
    { id: 8, name: "PBKS" },
  ];
  const [team, setTeam] = useState({ teamOne: "CSK", teamTwo: "MI" });
  const [matchNo, setMatchNo] = useState(0);
  const [teamDetail, setTeamDetails] = useState({
    teamOne: {
      win: 0,
      loss: 0,
      result: 0,
      score: 0,
    },
    teamTwo: {
      win: 0,
      loss: 0,
      result: 0,
      score: 0,
    },
  });
  const compare = {
    id: 1,
    teamLogo: "https://wallpapercave.com/wp/wp4166507.jpg",
    oppoLoog: "https://wallpapercave.com/wp/wp4248215.jpg",
  };
  return (
    <div className="admin-main">
      <h1 className="admin-main-heading">adminPanel</h1>
      {/* <div className="admin-inner">
        <h1 className="admin-sub-heading">Team Comparison</h1>

      </div> */}
      <div className="home-chart">
        <h1 className="home-about-heading">Team Comparison</h1>
        <div className="compare-container">
          <div className="compare-header">
            <select
              className="compare-team-button-admin text-dark"
              value={team.teamOne}
              onChange={(e) => {
                setTeam({ ...team, teamOne: e.target.value });
              }}
            >
              {iplTeams.map((eachItem) => (
                <option value={eachItem.name} key={eachItem.id}>
                  {eachItem.name}
                </option>
              ))}
            </select>
            <img
              src="https://ik.imagekit.io/9pisu4akvm/OIP-removebg-preview.png?updatedAt=1706992935092"
              alt="vs logo"
              className="compare-vs-logo"
            />
            <select
              className="compare-team-button-admin bg-primary"
              value={team.teamTwo}
              onChange={(e) => {
                setTeam({ ...team, teamTwo: e.target.value });
              }}
            >
              {iplTeams.map((eachItem) => (
                <option value={eachItem.name} key={eachItem.id}>
                  {eachItem.name}
                </option>
              ))}
            </select>
          </div>
          <div className="compare-body">
            <div className="compare-sub-header">
              <p className="team-heading-ab">TEAM A</p>
              <div className="compare-line-hor"></div>
              <p className="compare-match-number">Match</p>
              <input
                type="number"
                className="matchno-input"
                onChange={(e) => {
                  setMatchNo(e.target.value);
                }}
              />

              <div className="compare-line-hor"></div>
              <p className="team-heading-ab">TEAM B</p>
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
              <input
                className="compare-sub-body-text"
                value={teamDetail.teamOne.win}
                type="number"
                onChange={(e) => {
                  setTeamDetails({
                    ...teamDetail,
                    teamOne: { ...teamDetail.teamOne, win: e.target.value },
                  });
                }}
              />
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
              <input
                className="compare-sub-body-text"
                value={teamDetail.teamTwo.win}
                type="number"
                onChange={(e) => {
                  setTeamDetails({
                    ...teamDetail,
                    teamTwo: { ...teamDetail.teamTwo, win: e.target.value },
                  });
                }}
              />
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
              <input
                className="compare-sub-body-text"
                value={teamDetail.teamOne.loss}
                type="number"
                onChange={(e) => {
                  setTeamDetails({
                    ...teamDetail,
                    teamOne: { ...teamDetail.teamOne, loss: e.target.value },
                  });
                }}
              />
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
              <input
                className="compare-sub-body-text"
                value={teamDetail.teamTwo.loss}
                type="number"
                onChange={(e) => {
                  setTeamDetails({
                    ...teamDetail,
                    teamTwo: { ...teamDetail.teamTwo, loss: e.target.value },
                  });
                }}
              />
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
              <input
                className="compare-sub-body-text"
                value={teamDetail.teamOne.result}
                type="number"
                onChange={(e) => {
                  setTeamDetails({
                    ...teamDetail,
                    teamOne: { ...teamDetail.teamOne, result: e.target.value },
                  });
                }}
              />
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
              <input
                className="compare-sub-body-text"
                value={teamDetail.teamTwo.result}
                type="number"
                onChange={(e) => {
                  setTeamDetails({
                    ...teamDetail,
                    teamTwo: { ...teamDetail.teamTwo, result: e.target.value },
                  });
                }}
              />
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
              <input
                className="compare-sub-body-text"
                value={teamDetail.teamOne.score}
                type="number"
                onChange={(e) => {
                  setTeamDetails({
                    ...teamDetail,
                    teamOne: { ...teamDetail.teamOne, score: e.target.value },
                  });
                }}
              />
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
              <input
                className="compare-sub-body-text"
                value={teamDetail.teamTwo.score}
                type="number"
                onChange={(e) => {
                  setTeamDetails({
                    ...teamDetail,
                    teamTwo: { ...teamDetail.teamTwo, score: e.target.value },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
