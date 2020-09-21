import { actionsTypes } from './../actions/actionsTypes'
const initData = {
  detail: {
    success: false,
    data: null,
    error: null
  }
}

export default function (state = initData, action) {
  switch (action.type) {
    case actionsTypes.GET_PATIENT_DETAIL:
      return {
        ...state,
        detail: {
          success: false,
          data: {},
          error: null
        }
      }
    case actionsTypes.GET_PATIENT_DETAIL_SUCCESS:
      return {
        ...state,
        detail: {
            success: true,
            data: action.data,
            error: null
          }
      }
    case actionsTypes.GET_PATIENT_DETAIL_FAILURE:
      return {
        ...state,
        detail: {
            success: false,
            data: null,
            error: action.error
          }
      }

    default:
      return {
        ...state
      }
  }
}
