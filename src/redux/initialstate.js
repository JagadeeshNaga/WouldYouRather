import { users, questions } from "../_Data"

export let initialState = {
    users: users,
    questions: questions,
    currentUser: [],
    currentQuestion: '',
    answeredQuestions: [],
    unansweredQuestions: [],
  }