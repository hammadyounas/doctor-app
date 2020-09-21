import React, { useState, useEffect } from 'react'
import './main.scss'
import { useDispatch, useSelector } from 'react-redux'
import { patientDetail } from './../../../store/actions/patient'
import { healthRecords } from './../../../store/actions/healthRecords'
import { patientInfo } from './../../../store/actions/patientInfo'
import { notification } from 'antd';
import { handleLocation } from '../helper'

// IMPORTS..
import About from './About/About'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import Contact from './Contact/Contact'
import IntroductionEnd from './IntroductionEnd/IntroductionEnd'
import Telehealth from './Telehealth/Telehealth'

const Main = () => {

    const initialState = {
        patientDetail: {},
        healthRecords: {},
        historyArray:[],
        isLoading: false,
        isHistoryLoading:false,
        isLoadingPatientDetial:false,
        errorMessage: '',
        visible: false,
        formErrMsg: false,
        isSpinning: false,
        patientInfoData: false,
    }

    const dispatch = useDispatch()

    const [data, setData] = useState(initialState)

    const patientDetails = useSelector((state) => state.patient.detail.data)

    useSelector((state) => {
        if(state.patient.detail.error && data.isLoadingPatientDetial){
            notification['error']({
                message: 'Error!',
                description:state.patient.detail.error.message,
                duration: 0
              });
              setData({
                  ...data,
                  isLoadingPatientDetial:false
              })
        }  
    })

    useSelector((state) => {
        if(state.healthRecords.detail.healthRecords && data.isHistoryLoading){
            let tempArray = data.historyArray.concat(state.healthRecords.detail.healthRecords.history);
            setData({
                ...data,
                historyArray : tempArray,
                isHistoryLoading : false,
                healthRecords:state.healthRecords.detail.healthRecords
            })
        }
    })

    useSelector((state) => {
        if(state.healthRecords.detail.error && data.isHistoryLoading){
            notification['error']({
                message: 'Error!',
                description:state.healthRecords.detail.error.message,
                duration: 0
              });
            setData({
                ...data,
                isHistoryLoading : false,
            })
        }
    })

    useSelector((state) => {
        if (state.patientInfo.detail.error && data.isSpinning) {
            notification['error']({
                message: 'Error!',
                description:'Please try again!',
                duration: 0
              });
            setData({
                ...data,
                isSpinning: false,
                visible: false
            })
        }
    })

    useSelector((state) => {
        if (state.patientInfo.detail.patientInfo && !data.isLoading) {
            setData({
                ...data,
                patientInfoData: state.patientInfo.detail.patientInfo
                    ? state.patientInfo.detail.patientInfo.message
                    : false,
                isSpinning: false,
                isLoading: true,
                visible: false
            })
            openNotificationWithIcon('success')
        }
    })

    const patientDetailError = useSelector((state) => state.patient.detail.error)


    useEffect(() => {
        dispatch(patientDetail());
        dispatch(healthRecords());
        setData({
            ...data,
            isLoadingPatientDetial:true,
            isHistoryLoading:true
        })
    }, []);

    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Success!',
            description:
                'Shared your স্বাস্থ্যবই',
        });
    };

    const handleModal = () => {
        setData({
            ...data,
            visible: !data.visible,
        });
    };

    // Validate 
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateNum = (number) => {
        const re = /^\d*$/;
        return re.test(String(number));
    }

    const onFinish = values => {
        const { email, mobile } = values;

        const emailCheck = validateEmail(email)
        const numberCheck = validateNum(mobile);
        if (email || mobile) {
            if (email !== undefined && !emailCheck) {
                setData({ ...data, formErrMsg: 'Pleace fill up the right email pattern' })
            } else if (mobile !== undefined && !numberCheck) {
                setData({ ...data, formErrMsg: 'Input must be number' })
            } else {
                dispatch(patientInfo({ email, mobile }))
                setData({ ...data, formErrMsg: false, isSpinning: true })
            }
        } else {
            setData({ ...data, formErrMsg: 'Fill either email or mobile number' })
        }
    };

    const getNextData = val =>{
        dispatch(healthRecords(val));
        setData({
            ...data,
            isHistoryLoading:true
        })
    }


    return (
        <div className="content-scroller">
            <div className="content-wrapper">
                <About
                    handleLocation={handleLocation}
                    patientInfo={patientDetails ? patientDetails : {}}
                    handleModal={handleModal}
                    visible={data.visible}
                    onFinish={onFinish}
                    formErrMsg={data.formErrMsg}
                    isSpinning={data.isSpinning}
                    patientInfoData={data.patientInfoData}
                />
                <Skills handleLocation={handleLocation} Skills={patientDetails} />
                <Experience handleLocation={handleLocation} healthRecords={patientDetails && patientDetails.health_record ? patientDetails.health_record : {}} />
                <Education 
                handleLocation={handleLocation} 
                healthData={data.healthRecords} 
                getNextData={getNextData}
                historyArray={data.historyArray}
                />
                <Telehealth handleLocation={handleLocation} />
                <Contact handleLocation={handleLocation} />
                <IntroductionEnd handleLocation={handleLocation} />
            </div>
        </div>
    )
}

export default Main
