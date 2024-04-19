import {Link} from 'react-router-dom'

import './index.css'

const TeamCard=props=>{
    const {TeamDetails}=props
    const{id,teamImageUrl,name}=TeamDetails
    return(
        <li key={id} className="item">
            <Link to={`/team-matches/${id}`} className="link">
                <img src={teamImageUrl} className="ipl-item-logo" alt={name}/>
                <p className="item-name">{name}</p>
            </Link>
        </li>
    )
}

export default TeamCard;