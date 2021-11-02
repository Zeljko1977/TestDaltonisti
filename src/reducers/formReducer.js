import { saveTestData } from '../actions/testActions';
import { RESET_FORM_DATA, SAVE_FORM_DATA, RESET_TEST_DATA, SAVE_TEST_DATA } from '../constants/testConstants';



export const formReducer = (state = {}, action) => {
    switch (action.type) {
      case RESET_FORM_DATA:
        return {
          loading: true,
          userData: {}
        }
      case SAVE_FORM_DATA:
        return {
          loading: false,
          userData: action.payload
        }
      default:
        return state;
    }
  }

  export const testReducer = (state = {testovi: []}, action) => {
    switch (action.type) {
      case RESET_TEST_DATA:
        return {
          loading: true,
          testovi: []
        }
      case SAVE_TEST_DATA:
        return {
          loading: false,
          testovi: [...state.testovi,...action.payload]
        }
      default:
        return state;
    }
  }