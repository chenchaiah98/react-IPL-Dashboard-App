// Write your code here\
import './index.css'

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
        <div>
          <p>match details</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
