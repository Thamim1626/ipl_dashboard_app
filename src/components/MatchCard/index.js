import './index.css'

const MatchCard = props => {
  const {eachItem} = props

  const {competingTeamLogo, competingTeam, result, matchStatus} = eachItem
  const winClass = matchStatus === 'Won' ? `recent win` : `recent loss`

  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt="opposite logo"
        className="recent-logo"
      />
      <h1 className="recent-team">{competingTeam}</h1>
      <p className="recent-result">{result}</p>
      <h1 className={winClass}>{matchStatus}</h1>
    </li>
  )
}

export default MatchCard
