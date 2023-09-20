// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  state = {teamsData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const responce = await fetch('https://apis.ccbp.in/ipl')
    const data = await responce.json()
    console.log(data)
    this.setState({teamsData: data.teams})
  }

  render() {
    const {teamsData} = this.state

    return (
      <ul className="teamCard-main-container">
        {teamsData.map(eachValue => (
          <Link
            to={`/ipl/${eachValue.id}`}
            className="item-link"
            key={eachValue.id}
          >
            <li className="main-teamCard-container">
              <div className="teamCard-container">
                <div className="teamCard-image-container">
                  <img src={eachValue.team_image_url} alt="team-logo" />
                </div>
                <h4>{eachValue.name}</h4>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    )
  }
}
export default TeamCard
