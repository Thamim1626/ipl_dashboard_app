import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isFetch: true,
    idFetchData: [],
    latestMatchDetails: [],
    recentMatches: [],
    colorBgs: '',
    ids: '',
  }

  componentDidMount() {
    this.fetchIdApi()
  }

  fetchIdApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({ids: id})
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const camelCaseAll = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = camelCaseAll
    const camelCaseLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      result: latestMatchDetails.result,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const camelCaseLatestMatchDetailsWhole = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      manOfTheMatch: eachItem.man_of_the_match,
      result: eachItem.result,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    let colorBg
    switch (id) {
      case 'KKR':
        colorBg = 'kkr'
        break
      case 'CSK':
        colorBg = 'csk'
        break
      case 'RCB':
        colorBg = 'rcb'
        break
      case 'SRH':
        colorBg = 'srh'
        break
      case 'RR':
        colorBg = 'rr'
        break
      case 'KP':
        colorBg = 'kp'
        break
      case 'MI':
        colorBg = 'mm'

        break

      case 'DC':
        colorBg = 'dd'
        break

      default:
        colorBg = 'white'
        break
    }

    const lastMatchBgClass = `team-matches-container ${colorBg}`

    this.setState({
      isFetch: false,
      idFetchData: camelCaseAll,
      latestMatchDetails: camelCaseLatestMatchDetails,
      recentMatches: camelCaseLatestMatchDetailsWhole,
    })
    this.setState({
      colorBgs: lastMatchBgClass,
    })
  }

  render() {
    const {
      isFetch,
      idFetchData,
      latestMatchDetails,
      colorBgs,
      recentMatches,
      ids,
    } = this.state
    const {teamBannerUrl} = idFetchData

    const found = (
      <div className={colorBgs}>
        <img src={teamBannerUrl} alt={ids} className="team-banner-image" />
        <p className="last-match-text">Latest Match</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-card-list">
          {recentMatches.map(eachItem => (
            <MatchCard eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
    const notFound = (
      <div className="spinner">
        <Loader
          type="Oval"
          data-testid="loader"
          color="green"
          height={50}
          width={50}
        />
      </div>
    )

    return <div>{isFetch ? notFound : found}</div>
  }
}

export default TeamMatches
