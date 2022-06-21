import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SET_QUESTION } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'

export default function Home () {
  const [toggle, setToggle] = useState(false)
  const questions = useSelector(state => state.questions)
  const dispatch = useDispatch()

  const answeredQuestions = questions.filter (question =>
    question.optionOne.votes.length > 0 ||
    question.optionTwo.votes.length > 0)

  const unansweredQuestions = questions.filter (question => 
        question.optionOne.votes.length === 0 &&
        question.optionTwo.votes.length === 0)

  answeredQuestions.sort((a,b) => {
    return b.timestamp - a.timestamp 
  })
  unansweredQuestions.sort((a,b) => {
    return b.timestamp - a.timestamp
  })

  function setQuestion (question) {
    dispatch({type: SET_QUESTION, payload: question})
  }

  return (
   
    <>
      <NavBar />
        <div className='account-toggle-buttons'>
          <button className="button-answer" onClick={() => setToggle(true)}>Answered Questions</button>
          <button className="button-unanswer" onClick={() => setToggle(false)}>Unanswered Questions</button>
        </div>
      <div >
        <div className='questions'>
          {toggle
            ? answeredQuestions.map(question => {
                return (
                  <div className='question1' key={question.id}>
                    <div className='question1-image'>
                    <img src={question.authorURL} alt='User avatar' />
                    </div>
                    <div className='account-question'>
                      <h2>Would You Rather</h2>
                      <div className='question-options'>
                        <h3>{question.optionOne.text}</h3>
                        <h3>{`${question.optionTwo.text.substr(0, 3)}`}...</h3>
                      </div>
                      <button className="button-answer1">
                      <Link
                
                        to={`questions/${question.id}`}
                        onClick={() => {
                          setQuestion(question)
                        }}
                      >
                        Answer
                      </Link>
                      </button>
                    </div>
                  </div>
                )
              })
            : unansweredQuestions.length === 0 ? <h2>No Unanswered Questions</h2> : unansweredQuestions.map(question => {
                return (
                  <div className='question1' key={question.timestamp}>
                    <div className='question1-image'>
                    <img src={question.authorURL} alt='User avatar' />
                    </div>
                    <div className='account-question'>
                      <h2>Would You Rather</h2>
                      <div className='question-options'>
                        <h3>{question.optionOne.text}</h3>
                        <h3>{`${question.optionTwo.text.substr(0, 3)}`}...</h3>
                      </div>
                      <button className="button-answer1">
                      <Link
                    
                        to={`/questions/${question.id}`}
                        onClick={() => {
                          setQuestion(question)
                        }}
                      >
                        Answer
                      </Link>
                      </button>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
    </>
  )
}
