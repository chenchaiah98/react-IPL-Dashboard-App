// Write your code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard/index'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const responce = await fetch('https://apis.ccbp.in/ipl')
    const data = await responce.json()
    this.setState({teamsData: data.teams, isLoading: false})
  }

  render() {
    const {isLoading, teamsData} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="home-bg-container">
            <div className="home-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="Home-main-heading">IPL Dashboard</h1>
            </div>
            <ul className="teamCard-main-container">
              {teamsData.map(eachValue => (
                <TeamCard key={eachValue.id} teamsData={eachValue} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

// const Home = () => (
//   <div className="home-bg-container">
//     <div>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
//         alt="ipl logo"
//       />
//     </div>
//     <h1 className="Home-main-heading">IPL Dashboard</h1>
//     <TeamCard />
//   </div>
// )

export default Home
