import React, {useEffect} from 'react'
import { Route, Routes,useLocation} from 'react-router-dom'
import CheckLogIn from './CheckLogIn'
import AddQuestion from './Components/AddQuestion'
import Question from './Components/Question'
import { useSelector,useDispatch } from 'react-redux'
import Leaderboard from './Components/Leaderboard'
import { SET_QUESTION } from './redux/actions'
import NotFound from './Components/NotFound'



export default function App () {

  const dispatch = useDispatch()
  const name = useLocation()
  const url = name.pathname.split("/").pop();
  const questions = useSelector(state => state.questions)
  const currentQuestions = questions.filter(question => {
    return question.id === url;
  })

  const [currentQuestion] = currentQuestions
  useEffect(() => {
    dispatch({
      type: SET_QUESTION, payload: currentQuestion
    })
  })
  const currentUser = useSelector(state => state.currentUser[0])

  return (
<main>
      <Routes>
        <Route exact path='/' element={<CheckLogIn />} />
        <Route path='/questions/:currentQuestion' element={ currentUser === undefined ? <CheckLogIn />: currentQuestion === undefined ? <NotFound/>:<Question />} />
        <Route exact path='/add' element={ currentUser === undefined ? <CheckLogIn />: <AddQuestion />} />
        <Route exact path='/leaderboard' element={currentUser === undefined ? <CheckLogIn /> : <Leaderboard />}/>
        <Route exact path="*" element={<NotFound/>} />
      </Routes>
    </main>

  )
}

  
