
const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILURE = "LOGIN_FAILURE"

//logout 
export const LOGOUT = 'LOGOUT'

const GET_PATIENT_DETAIL = "GET_PATIENT_DETAIL"
const GET_PATIENT_DETAIL_SUCCESS = "GET_PATIENT_DETAIL_SUCCESS"
const GET_PATIENT_DETAIL_FAILURE = "GET_PATIENT_DETAIL_FAILURE"

const GET_HEALTH_RECORDS = 'GET_HEALTH_RECORDS'
const GET_HEALTH_RECORDS_SUCCESS = 'GET_HEALTH_RECORDS_SUCCESS'
const GET_HEALTH_RECORDS_FAILURE = 'GET_HEALTH_RECORDS_FAILURE'

const POST_PATIENT_INFO = 'POST_PATIENT_INFO'
const POST_PATIENT_INFO_SUCCESS = 'POST_PATIENT_INFO_SUCCESS'
const POST_PATIENT_INFO_FAILURE = 'POST_PATIENT_INFO_FAILURE'

export {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    GET_PATIENT_DETAIL,
    GET_PATIENT_DETAIL_SUCCESS,
    GET_PATIENT_DETAIL_FAILURE,

    GET_HEALTH_RECORDS,
    GET_HEALTH_RECORDS_SUCCESS,
    GET_HEALTH_RECORDS_FAILURE,

    POST_PATIENT_INFO,
    POST_PATIENT_INFO_SUCCESS,
    POST_PATIENT_INFO_FAILURE,
}

export const actionsTypes = {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,

    GET_PATIENT_DETAIL,
    GET_PATIENT_DETAIL_SUCCESS,
    GET_PATIENT_DETAIL_FAILURE

}