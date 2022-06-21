import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_VOTE, USER_TOTAL_SCORE } from '../redux/actions'
import NavBar from './NavBar'
import PollResult from './PollResult'

export default function Question () {

  const [voteValue, setVoteValue] = useState('')
  const [displayResults, setDisplayResults] = useState(false)
  
  const question = useSelector(state => state.currentQuestion)
  
  console.log("Question Object", question)
  const currentUserID = useSelector(state => state.currentUser[0].id)
  console.log("currentUserID", currentUserID)
  const currentUserScore = useSelector(
    state => state.currentUser[0].usertotalScore
  )
  console.log("Current User Score", currentUserScore)
  const currentQuestions = useSelector(state => state.questions)
  console.log("Current Questions",currentQuestions)
  const pollableQuestion = currentQuestions.filter(q => {
    return (
      (q.optionOne.votes.includes(currentUserID) &&
        q.optionOne.text === question.optionOne.text) ||
      (q.optionTwo.votes.includes(currentUserID) &&
        q.optionTwo.text === question.optionTwo.text)
    )
  })
  console.log("Pollable Question",pollableQuestion)
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    if (voteValue) {
      dispatch({
        type: ADD_VOTE,
        payload: currentUserID, 
        questionTimestamp: question.timestamp, 
        voteValue: voteValue,
        currentQuestionID: question.id,
        usertotalScore: currentUserScore, 
        currentUserID: currentUserID
      })
      dispatch({ type: USER_TOTAL_SCORE, payload: currentUserID })
      setDisplayResults(true)
    }
  }

  return (
    <>
      <NavBar />
      <div className='account-answer-question'>
        <form
          className='answer-question-form'
          onSubmit={handleSubmit}
          hidden={true}
        >
          {displayResults ? (
              <PollResult
                optionOneVotes={pollableQuestion[0].optionOne.votes.length}
                optionTwoVotes={pollableQuestion[0].optionTwo.votes.length}
                userVote={voteValue}
              />
          ) : (
            <div>
            <h2 className="rather">Would You Rather... ?</h2>
              <div className='account-question-options'>
                 <input
                  type='radio'
                  name='option'
                  value='optionOne'
                  onChange={event => setVoteValue(event.target.value)}
                ></input>
                <label className='answer-option'>
                  {question.optionOne.text}
                </label>
              </div>
              <div className='account-question-options'>
                <input
                  type='radio'
                  name='option'
                  value='optionTwo'
                  onChange={event => setVoteValue(event.target.value)}
                ></input>
                 <label className='answer-option'>
                  {question.optionTwo.text}
                </label>
              </div>
              <div className='account-submit-answer-button'>
                <button className='button-answer'>Submit Answer</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  )
}
