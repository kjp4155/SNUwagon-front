import { initialState } from './selectors'
import * as actions from './actions'

// const updateId = (question, action) => {
//   if (question.postId !== undefined) {
//     return question
//   }
//   return {
//     ...question,
//     postId: action.postId,
//     // resolved: action.resolved,
//   }
// }

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actions.WRITE_QUESTION_POST:
    //   return [
    //     ...state,
    //     {
    //       postId: action.postId,
    //       title: action.title,
    //       content: action.content,
    //       due: action.due,
    //       resolved: false,
    //       bounty: action.bounty,
    //       author: action.author,
    //       selected: undefined,
    //       tags: action.tags,
    //     },
    //   ]
    case actions.UPDATE_QUESTION_POST:
      return Object.assign({}, state, {
        postId: action.postId,
        title: action.title,
        content: action.content,
        due: action.due,
        bounty: action.bounty,
        author: action.author,
        resolved: action.resolved,
        selected: action.selected,
        tags: action.tags,
      })
    default:
      return state
  }
}

export default questionReducer
