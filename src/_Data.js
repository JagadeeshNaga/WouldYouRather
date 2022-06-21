import john from './Avatar/john.png';
import sarah from './Avatar/sarah.png';
import tyler from './Avatar/tyler.png';

const answers1 = {
  '8xf0y6ziyjabvozdd253nd': 'optionOne',
  '6ni6ok3ym7mf1p33lnez': 'optionTwo',
  'am8ehyc8byjqgar0jgpub9': 'optionTwo',
  'loxhs1bqm25b708cmbf3g': 'optionTwo'
}

const questions1 = ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
const answers2 = {
  'vthrdm985a262al8qx3do': 'optionOne',
  'xj352vofupe1dqz9emx13r': 'optionTwo'
}

const questions2 = ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']

const answers3 = {
  'xj352vofupe1dqz9emx13r': 'optionOne',
  'vthrdm985a262al8qx3do': 'optionTwo',
  '6ni6ok3ym7mf1p33lnez': 'optionTwo'
}

const questions3 = ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']


export const users = [
  {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: sarah,
    answers: answers1,
    questions: questions1,
    // adding predefined score
    usertotalScore: questions1.length + Object.keys(answers1).length, 
  },
  {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL:
      tyler,
    answers: answers2,
    questions: questions2,
    // adding predefined score
    usertotalScore: questions2.length + Object.keys(answers2).length, 
  },

  {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: john,
    answers: answers3,
    questions: questions3,
    // adding predefined score
    usertotalScore: questions3.length + Object.keys(answers3).length, 
  }
]

export const questions = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'Sarah Edo',
    authorURL:
      sarah,

    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory'
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'John Doe',

    authorURL: john,

    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero'
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'Sarah Edo',
    authorURL:
      sarah,

    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic'
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'Tyler McGinnis',
    authorURL:
      tyler,

    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer'
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  {
    id: 'vthrdm985a262al8qx3do',
    author: 'Tyler Mcginnis',
    authorURL:
      tyler,

    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself'
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'John Doe',
    authorURL: john,
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript'
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  }
]

export function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random()
        .toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}


