import React from 'react'

export const PollResult = props => {
  console.log('Props ', props)
  let userVote = props.userVote
  
  switch (userVote) {
    case 'optionOne': {
      userVote = 'First Option'
      break
    }
    case 'optionTwo': {
      userVote = 'Second Option'
      break
    }
    default: {
      userVote = 'First Option'
      break
    }
  }
  const optionOneVotes = props.optionOneVotes
  const optionTwoVotes = props.optionTwoVotes

  return (
    <>
      <div className='account-results-details'>
        <div className='account-results-options'>
          <h4>Your Vote: {userVote}</h4>
          <h4>Total votes for first option: {optionOneVotes}</h4>
          <div className='account-option-one'>
            <h2 className='account-percentage-one-text'>
              {`${Math.round(
                (optionOneVotes / (optionOneVotes + optionTwoVotes)) * 100
              )}`}
              %
            </h2>
            <div
              className='account-option-one-score'
              style={ userVote === 'First Option' ? {
                width: `${Math.round(
                  optionOneVotes / (optionOneVotes + optionTwoVotes) * 100
                )}%`
                
              } : {width: `${Math.round(
                  optionOneVotes / (optionOneVotes + optionTwoVotes) * 100
                )}%`}}
            ></div>
          </div>
          <h4 style={{margin:10}}>Total votes for second option: {optionTwoVotes}</h4>
          <div className='account-option-one'>
            <h2 className='account-percentage-one-text'>
              {`${Math.round(
                (optionTwoVotes / (optionOneVotes + optionTwoVotes)) * 100
              )}`}
              %
            </h2>
            <div
              className='account-option-one-score'
              style={ userVote === 'Second Option' ? {
                width: `${Math.round(
                  optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100
                )}%`
                
              } : {width: `${Math.round(
                  optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100
                )}%`}}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PollResult
