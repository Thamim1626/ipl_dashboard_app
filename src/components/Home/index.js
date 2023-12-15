import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {homeTeamList: [], isHomeFetch: false}

  componentDidMount() {
    this.fetchHomeDetails()
  }

  fetchHomeDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const camelCase = await data.teams.map(eachItem => ({
      teamImageUrl: eachItem.team_image_url,
      id: eachItem.id,
      name: eachItem.name,
    }))
    this.setState({homeTeamList: camelCase, isHomeFetch: true})
  }

  render() {
    const {homeTeamList, isHomeFetch} = this.state
    const found = (
      <ul className="home-team-list">
        {homeTeamList.map(eachItem => (
          <TeamCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
    const notFound = (
      <div className="spinner">
        <Loader type="Oval" color="white" height={100} width={50} />
      </div>
    )
    return (
      <div className="home-contanier">
        <header className="home-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="home-logo"
          />
          <h1 className="home-heading">IPL DASHBOARD</h1>
        </header>
        {isHomeFetch ? found : notFound}
      </div>
    )
  }
}

export default Home
