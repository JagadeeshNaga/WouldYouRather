export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SIGN_OUT = "USER_SIGN_OUT";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const SET_QUESTION = "SET_QUESTION";
export const ADD_VOTE = "ADD_VOTE";
export const USER_TOTAL_SCORE = "USER_TOTAL_SCORE";

export function userSignIn(state = null, action) {
  const selectedUser = state.users.filter(
    (user) => user.name === action.payload
  );

  if (action.type === USER_SIGN_IN) {
    console.log(selectedUser)
    return { ...state, currentUser: [...selectedUser] };
    
  }
}

export const userSignOut = (state = {}, action) => {
  if (action.type === USER_SIGN_OUT) {
    return { ...state, currentUser: "" };
  }
};

export const addQuestion = (state = {}, action) => {
  const addQuestion = {
    id: action.randomId,
    author: state.currentUser[0].name,
    authorURL: state.currentUser[0].avatarURL,
    timestamp: new Date().getTime(),
    optionOne: {
      votes: [],
      text: action.optionOneText,
    },
    optionTwo: {
      votes: [],
      text: action.optionTwoText,
    },
  };
  console.log("Add Question ", addQuestion);
  let user = state.currentUser.map((u) => {
    return { ...u, questions: u.questions.concat(action.randomId) };
  });
  console.log("Current user: ", user)
  return { ...state, questions: state.questions.concat(addQuestion), currentUser: user, }
};
