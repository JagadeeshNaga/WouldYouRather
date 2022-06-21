import {
  USER_SIGN_IN,
  ADD_QUESTIONS,
  ADD_VOTE,
  USER_SIGN_OUT,
  userSignIn,
  userSignOut,
  addQuestion,
  SET_QUESTION,
  USER_TOTAL_SCORE,
} from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      return userSignIn(state, action)
    case USER_SIGN_OUT:
      return userSignOut(state, action)
    case ADD_QUESTIONS:
      return addQuestion(state, action)
    case SET_QUESTION:
      const question = action.payload
      return { ...state, currentQuestion: question}
    case ADD_VOTE:
      const updatedQuestions = state.questions.map(question => {
        if (question.id === action.currentQuestionID) {
          console.log("Add Vote : ", action.voteValue)
          if (action.voteValue === 'optionOne') {
            return {
              ...question,
              optionOne: {
                votes: question.optionOne.votes.concat(
                  action.currentUserID
                ),
                text: question.optionOne.text
              }
            }
          } else {
            return {
              ...question,
              optionTwo: {
                votes: question.optionTwo.votes.concat(
                  action.currentUserID
                ),
                text: question.optionTwo.text
              }
            }
          }
        }

        return {...question}
      })
      let ans = state.currentUser.map(a => {
        return {...a, answers: {...a.answers, [action.currentQuestionID]: action.voteValue}}
      })
      return { ...state, questions: updatedQuestions, currentUser: ans }
      case USER_TOTAL_SCORE: {
        let updatedScore = state.users.map((user) => {
          if(user.id === action.payload) {
            return {...user, usertotalScore: user.usertotalScore + 1}
          }
          else {
            return {...user}
          }
        })
        return {...state, users: updatedScore}
      }
     
    default:
      return state
  }
}