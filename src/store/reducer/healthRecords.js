import { GET_HEALTH_RECORDS, GET_HEALTH_RECORDS_SUCCESS, GET_HEALTH_RECORDS_FAILURE } from './../actions/actionsTypes'
const initData = {
    detail: {
        success: false,
        healthRecords: null,
        error: null
    }
}

export default function (state = initData, action) {
    switch (action.type) {
        case GET_HEALTH_RECORDS:
            return {
                ...state,
                detail: {
                    success: false,
                    healthRecords: {},
                    error: null
                }
            }
        case GET_HEALTH_RECORDS_SUCCESS:
            return {
                ...state,
                detail: {
                    success: true,
                    healthRecords: action.data,
                    error: null
                }
            }
        case GET_HEALTH_RECORDS_FAILURE:
            return {
                ...state,
                detail: {
                    success: false,
                    healthRecords: null,
                    error: action.error
                }
            }

        default:
            return {
                ...state
            }
    }
}
