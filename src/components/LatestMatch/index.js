import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    // Destructuring latestMatchDetails
    const {
      umpires,
      result,
      manOfTheMatch,
      id,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = latestMatchDetails

    return (
      <div className="last-match-container">
        <div className="top-last-match">
          <div className="last-match-container-left">
            <h1>{competingTeam}</h1>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <div className="last-match-container-mid">
            <img
              src={competingTeamLogo}
              alt="team logo"
              className="team-logo"
            />
          </div>
        </div>

        <div className="last-match-container-right">
          <h1 className="right-heading">First Innings</h1>
          <p className="right-des">{firstInnings}</p>
          <h1 className="right-heading">Second Innings</h1>
          <p className="right-des">{secondInnings}</p>
          <h1 className="right-heading">Man of the Match</h1>
          <p className="right-des">{manOfTheMatch}</p>
          <h1 className="right-heading">Umpires</h1>
          <p className="right-des">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
