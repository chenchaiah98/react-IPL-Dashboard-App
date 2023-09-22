// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamsData} = this.props

    return (
      <li className="main-teamCard-container">
        <Link
          to={`/team-matches/${teamsData.id}`}
          className="item-link"
          key={teamsData.id}
        >
          <div className="teamCard-container">
            <div className="teamCard-image-container">
              <img src={teamsData.team_image_url} alt={teamsData.name} />
            </div>
            <p>{teamsData.name}</p>
          </div>
        </Link>
      </li>
    )
  }
}
export default TeamCard
