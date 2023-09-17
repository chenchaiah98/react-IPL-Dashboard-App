// Write your code here
// import {Component} from 'react'
import './index.css'

import TeamCard from '../TeamCard/index'

// class Home extends Component {
//   render() {
//     return (
//       <div className="home-bg-container">
//         <h1 className="Home-main-heading">IPL Dashboard</h1>
//         <ul className="teamCard-main-container">{}</ul>
//       </div>
//     )
//   }
// }

const Home = () => (
  <div className="home-bg-container">
    <h1 className="Home-main-heading">IPL Dashboard</h1>
    <TeamCard />
  </div>
)

export default Home
