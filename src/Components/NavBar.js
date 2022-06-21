import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { USER_SIGN_OUT } from '../redux/actions'

export default function NavBar () {
  const currentUser = useSelector(state => state.currentUser)
  console.log(currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className='user-div'>
      <div className='account-signed-in-user'>
        <div className='account-imagename'>
          <img src={currentUser[0].avatarURL} alt='Current user avatar' />
          <h6>Welcome</h6>
          <h3>{currentUser[0].name}</h3>
         
        </div>
      </div>
      <div className='loginuser'>
          {
            <button className='button-userlogin' onClick={() => { dispatch({ type: USER_SIGN_OUT }); navigate('/')}}>
              Sign out
            </button>
          }
      </div>
      <div className='nav'>
          <ul className='nav-left'>
            <li style={{ color: 'white' }} onClick={()=> navigate('/', {replace: true})}>
              Home
            </li>
            <li style={{ color: 'white' }} onClick={()=>navigate('/leaderboard', {replace: true})}>
              Leaderboard
            </li>
            <li style={{ color: 'white' }} onClick={()=>navigate('/add', {replace: true})}>
              Add Question
            </li>
          </ul>
      </div>
    </div>
  )
}
