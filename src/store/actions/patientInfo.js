import {
    POST_PATIENT_INFO,
    POST_PATIENT_INFO_SUCCESS,
    POST_PATIENT_INFO_FAILURE,
} from './actionsTypes'
import request from './request'

export const patientInfo = (payload) => dispatch => {
    return new Promise((resolve, reject) => {
        request
            .post(`/patient/${localStorage.getItem('patientID')}/share`, payload)
            .then(({ data }) => {
                dispatch({
                    type: POST_PATIENT_INFO_SUCCESS,
                    data: JSON.parse(data)
                })
                resolve(JSON.parse(data))
            })
            .catch(({ response }) => {
                const error = response ? JSON.parse(response.data) : { message: 'Internel server error' }
                dispatch({
                    type: POST_PATIENT_INFO_FAILURE,
                    error: error ? error : {}
                });
                reject(response);
            });
    })
}