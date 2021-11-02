import { RESET_FORM_DATA, SAVE_FORM_DATA, SAVE_TEST_DATA } from '../constants/testConstants';

export const saveFormData= (data) => async (dispatch) => {
    try {

        
      dispatch({
        type: SAVE_FORM_DATA,
        payload: data
      })

      
  
    } catch (error) {
      /* dispatch({
        type: GET_ALL_CLIENTS_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      }) */
    }
  }

  export const saveTestData= (data) => async (dispatch) => {
    try {

        
      dispatch({
        type: SAVE_TEST_DATA,
        payload: data
      })

      
  
    } catch (error) {
      /* dispatch({
        type: GET_ALL_CLIENTS_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      }) */
    }
  }
