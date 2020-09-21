import { actionsTypes } from './actionsTypes'
import request from './request'

export const patientDetail = payload => dispatch => {
  return new Promise((resolve, reject) => {
    request
      .get(`/patient/${localStorage.getItem('patientID')}`)
      .then(({ data }) => {
        // console.log("JSON.parse(data)",JSON.parse(data))
        dispatch({
          type: actionsTypes.GET_PATIENT_DETAIL_SUCCESS,
          data: JSON.parse(data)
        })
        resolve(JSON.parse(data))
      })
      .catch(({ response }) => {
        const error = response ? JSON.parse(response.data) : { message: 'Internel server error' }
        dispatch({
          type: actionsTypes.GET_PATIENT_DETAIL_FAILURE,
          error: error ? error : {}
        });
        reject(response);
      });
  })
}
