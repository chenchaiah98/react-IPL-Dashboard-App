// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props

  return (
    <div className="matchCard-container">
      <ul className="matchCard-item-container">
        {matchDetails.map(eachValue => (
          <li key={eachValue.id}>
            <div className="matchCard-item">
              <div className="matchCard-item-image">
                <img
                  src={eachValue.competing_team_logo}
                  alt={`competing team ${eachValue.competing_team}`}
                />
              </div>
              <div>
                <p>{eachValue.competing_team}</p>
                <p>{eachValue.result}</p>
                <p
                  className={
                    eachValue.match_status === 'Won'
                      ? `matchStatus green`
                      : `matchStatus red`
                  }
                >
                  {eachValue.match_status}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MatchCard
