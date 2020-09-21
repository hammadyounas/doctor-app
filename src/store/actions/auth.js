import { actionsTypes } from './actionsTypes'
import request from './request'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const login = payload => dispatch => {
  return new Promise((resolve, reject) => {
    request
      .post(`/auth/login`, payload)
      .then(({ data }) => {
        let resp = JSON.parse(data);
        if (payload.remember) {
          localStorage.setItem('remember', JSON.stringify(payload))
        } else {
          localStorage.removeItem('remember')
        }

        localStorage.setItem('patientID', `${resp.id}`)
        cookies.set('patientToken', `${resp.authtoken}`, { path: '/' });
        cookies.set('%tokenExpiry%',new Date(),{path: '/'})
        dispatch({
          type: actionsTypes.LOGIN_SUCCESS,
          data: data
        })
        resolve(data)
      })
      .catch(({ response }) => {
        const error = response ? JSON.parse(response.data) : { message: 'Internel server error' }
        dispatch({
          type: actionsTypes.LOGIN_FAILURE,
          error: error ? error : {}
        });
        reject(response);
      });
  })
}

export const LogOut = () => {
  return {
    type: actionsTypes.LOGOUT
  }
}