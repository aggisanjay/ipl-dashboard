import './index.css'

const MatchCard=props=>{
    const{matchDetails}=props
    const{competingTeamLogo,competingTeam,matchStatus,result}=matchDetails
    const getMatchStatusClassName=status=>
    status==="Won"?'match-icon':'match-lost'
    const matchStatusClassName=`match-status ${getMatchStatusClassName(matchStatus)}`
    return(
        <li className="match-item">
            <img
            src={competingTeamLogo}
            className="competing-team-logo"
            alt={`competing team${competingTeam}`}
            />
            <p className="competing-team-name">{competingTeam}</p>
            <p className={matchStatusClassName}>{matchStatus}</p>
            <p className="result">{result}</p>
        </li>
    )
}

export default MatchCard