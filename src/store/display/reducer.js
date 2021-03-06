import { initialState } from './selectors'
import * as actions from './actions'

const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_SIGN_IN_MODAL:
      return Object.assign({}, state, {
        isSignInModalOpened: action.modalState,
        signInModalContent: action.content,
      })
    case actions.UPDATE_SIGN_UP_MODAL:
      return Object.assign({}, state, {
        isSignUpModalOpened: action.modalState,
        signUpModalContent: action.content,
      })
    default:
      return state
  }
}

export default displayReducer
