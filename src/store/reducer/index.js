import { combineReducers } from "redux";
import auth from './auth'
import patient from './patient'
import healthRecords from './healthRecords'
import patientInfo from './patientInfo'

export default combineReducers({
    auth,
    patient,
    healthRecords,
    patientInfo
});