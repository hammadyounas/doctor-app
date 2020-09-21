import {
    POST_PATIENT_INFO,
    POST_PATIENT_INFO_SUCCESS,
    POST_PATIENT_INFO_FAILURE,
} from '../actions/actionsTypes'


const initData = {
    detail: {
        success: false,
        patientInfo: null,
        error: null
    }
}

export default function (state = initData, action) {
    switch (action.type) {
        case POST_PATIENT_INFO:
            return {
                ...state,
                detail: {
                    success: false,
                    patientInfo: {},
                    error: null
                }
            }
        case POST_PATIENT_INFO_SUCCESS:
            return {
                ...state,
                detail: {
                    success: true,
                    patientInfo: action.data,
                    error: null
                }
            }
        case POST_PATIENT_INFO_FAILURE:
            return {
                ...state,
                detail: {
                    success: false,
                    patientInfo: null,
                    error: action.error
                }
            }

        default:
            return {
                ...state
            }
    }
}
