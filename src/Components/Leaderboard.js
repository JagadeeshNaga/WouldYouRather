import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from './NavBar'

export default function Leaderboard () {
  let users = useSelector(state => state.users)
  
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length - i - 1; j++) {
      if (users[j].usertotalScore < users[j + 1].usertotalScore) {
        var temp = users[j]
        users[j] = users[j + 1]
        users[j + 1] = temp
      }
    }
  }
  return (
    <>
      <NavBar />
      <div className='leader'>
        {users.map(user => {
          return (
            <div key={user.id}>
              <img src={user.avatarURL} alt='user avatar' />
              <div>
                <h3>{user.name}</h3>
                Total Score = {user.usertotalScore}
              </div>
            </div>
          )
        })}
      </div>
</>
  )
}
