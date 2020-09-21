import React from 'react'
import CodeLogo from './../../../../assets/images/qr-code-v2.svg'
import Parser from 'html-react-parser';
import { Modal, Form, Input, Button, Spin } from 'antd';

const About = (props) => {


    const openPdf = () => {
        // eslint-disable-next-line no-unused-expressions
        props.patientInfo.health_record ? window.open(`${props.patientInfo.health_record.download_link}`) : ''
    }


    return (
        <article
            className="content about white-bg"
            id="chapterabout"
            onClick={() => props.handleLocation("#chapterabout")}>
            <div className="inner">
                {/* Modal Form */}
                <Modal
                    title="Please Enter Mobile Number or Email"
                    visible={props.visible}
                    onCancel={() => props.handleModal()}
                >
                    <Form
                        name="basic"
                        onFinish={props.onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                        <label>Mobile Number <span>(optional)</span> </label>
                        <Form.Item
                            name="mobile"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input your mobile!',
                                },
                            ]}
                        >
                            <Input placeholder="" />
                        </Form.Item>
                        <label>Email <span>(optional)</span></label>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input your passcode!',
                                },
                            ]}
                        >
                            <Input placeholder="" />
                        </Form.Item>

                        {props.formErrMsg ? <p style={{ color: 'red' }}>{props.formErrMsg}</p> : null}

                        <Form.Item>
                            <Spin spinning={props.isSpinning}>
                                <Button  style={{height:'45px'}}  className="button" htmlType="submit">
                                    Share
                                </Button>
                            </Spin>
                        </Form.Item>
                    </Form>

                </Modal>
                <h2>Bio</h2>
                <div className="title-divider"></div>
                <div className="about-con">
                    <ul>
                        <li>Name: {props.patientInfo.user_info ? props.patientInfo.user_info.firstname : ''} {props.patientInfo.user_info ? props.patientInfo.user_info.lastname : ''}</li>
                        <li>Email: {props.patientInfo.user_info ? props.patientInfo.user_info.email : ''}</li>
                        <li>Phone: {props.patientInfo.user_info ? props.patientInfo.user_info.mobile : ''}</li>
                        <li>Date of birth: {props.patientInfo.user_info ? props.patientInfo.user_info.date_of_birth : ''}</li>
                        <li>Address: {props.patientInfo.user_info ? props.patientInfo.user_info.address : ''}</li>
                    </ul>
                    <h3>Medical Profile</h3>
                    <p>{props.patientInfo.health_record ? Parser(props.patientInfo.health_record.summary) : ''}</p>
                    {/* <p>Patient is a <strong>40</strong> years old <strong>MALE</strong>, he is <strong>INDEPENDENT</strong> and does not need any care. He has <strong>RAISING BMI</strong> and also <strong>PRE DIABETIC</strong> */}
                    {/* </p> */}
                    <div className="btn-box">
                        <a onClick={openPdf} className="button" target="_blank">Download স্বাস্থ্যবই for printing</a>
                        <a onClick={() => props.handleModal()} className="button" target="_blank">Share স্বাস্থ্যবই with your doctor</a>
                    </div>
                    {/* <!-- <div className="full-divider"></div> --> */}
                    <img src={CodeLogo} className="signature" alt="" />
                    <p>Scan QR code to access your স্বাস্থ্যবই from mobile device</p>
                </div>
            </div>
        </article >
    )
}

export default About
