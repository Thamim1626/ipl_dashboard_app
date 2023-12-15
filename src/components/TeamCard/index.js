import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachItem} = props
  const {teamImageUrl, name, id} = eachItem
  return (
    <Link to={`team-matches/${id}`}>
      <li className="home-team-item">
        <img src={teamImageUrl} className="home-list-image" alt="team banner" />
        <p className="home-item-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
