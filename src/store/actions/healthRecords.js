import { GET_HEALTH_RECORDS_SUCCESS, GET_HEALTH_RECORDS_FAILURE } from './actionsTypes'
import request from './request'

export const healthRecords = payload => dispatch => {
    return new Promise((resolve, reject) => {
        request
            .get(`https://virtserver.swaggerhub.com/m-ullah/shasthoboi/1.0/patient/${localStorage.getItem('patientID')}/history/?current_page=${payload ? payload : null}`)
            .then(({ data }) => {
                console.log("JSON.parse(data)", JSON.parse(data))
                dispatch({
                    type: GET_HEALTH_RECORDS_SUCCESS,
                    data: JSON.parse(data)
                })
                resolve(JSON.parse(data))
            })
            .catch(({ response }) => {
                const error = response ? JSON.parse(response.data) : { message: 'Internel server error' }
                dispatch({
                    type: GET_HEALTH_RECORDS_FAILURE,
                    error: error ? error : {}
                });
                reject(response);
            });
    })
}
