import { actionsTypes } from './../actions/actionsTypes'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const initData = {
  login: {
    success: false,
    data: null,
    error: null
  }
}

export default function (state = initData, action) {
  switch (action.type) {
    case actionsTypes.LOGIN:
      return {
        ...state,
        login: {
          success: false,
          data: {},
          error: null
        }
      }
    case actionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
            success: true,
            data: action.data,
            error: null
          }
      }
    case actionsTypes.LOGIN_FAILURE:
      return {
        ...state,
        login: {
            success: false,
            data: null,
            error: action.error
          }
      }
      
      case actionsTypes.LOGOUT:
        cookies.remove('patientToken');
        
        return state = initData

    default:
      return {
        ...state
      }
  }
}
