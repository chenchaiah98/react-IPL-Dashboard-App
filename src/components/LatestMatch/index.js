// Write your code here\
import './index.css'
import MatchCard from '../MatchCard/index'

const LatestMatch = props => {
  const {apiData} = props

  //   const changeToCamelcase = () => {data{
  //       teamBannerUrl: apiData.team_banner_url,
  //       latestMatchDetails: apiData.latest_match_details,
  //       recentMatches: apiData.recent_matches,}
  //   }
  //   changeToCamelcase()

  return (
    <>
      <div className="match-Deatils">
        <h3>Latest Match</h3>
        <div className="LatestMatch-details-container">
          <div>
            <p>{apiData.latest_match_details.competing_team}</p>
            <p>{apiData.latest_match_details.date}</p>
            <p>{apiData.latest_match_details.venue}</p>
            <p>{apiData.latest_match_details.result}</p>
          </div>
          <div className="LatestMatch-details-image-container">
            <img
              src={apiData.latest_match_details.competing_team_logo}
              alt={`latest match ${apiData.latest_match_details.competing_team}`}
            />
          </div>
          <div className="LatestMatch-details-innings">
            <h3>Frist innings</h3>
            <p>{apiData.latest_match_details.first_innings}</p>
            <h3>Second innings</h3>
            <p>{apiData.latest_match_details.second_innings}</p>
            <h3>Man of the Match</h3>
            <p>{apiData.latest_match_details.man_of_the_match}</p>
            <h3>Umpires</h3>
            <p>{apiData.latest_match_details.umpires}</p>
          </div>
        </div>
      </div>
      <MatchCard matchDetails={apiData.recent_matches} />
    </>
  )
}

export default LatestMatch
