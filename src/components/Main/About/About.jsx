import React from 'react'

import CodeLogo from '../../../assets/images/qr-code-v2.svg'
const About = ({ handleLocation }) => {
    return (
        <article className="content about white-bg " id="chapterabout">
            <div className="inner">

                <div className="title-divider"></div>
                <div className="about-con">
                    <ul>
                        <li>Name: Health testing</li>
                        <li>Email: <a href="mailto:hello@shasthoboi.com">hello@shasthoboi.com</a></li>
                        <li>Phone: (+44) 123-4567</li>
                        <li>Date of birth: 01 January 1971</li>
                        <li>Address: PO Box 16122, Somewhere, UK.</li>
                    </ul>
                    <h3>Medical Profile</h3>
                    <p>Patient is a <strong>40</strong> years old <strong>MALE</strong>, he is <strong>INDEPENDENT</strong> and does not need any care. He has <strong>RAISING BMI</strong> and also <strong>PRE DIABETIC</strong>
                    </p>
                    <a href="https://drive.google.com/file/d/1IieZ8o1knPgb5_IIX9Ze7zuLs9G-bUax/view?usp=sharing" className="button" target="_blank">Download স্বাস্থ্যবই for printing</a>
                    <a href="#" className="button" target="_blank">Share স্বাস্থ্যবই with your doctor</a>
                    {/* <!-- <div className="full-divider"></div> --> */}
                    <img src={CodeLogo} className="signature" alt="" />
                    <p>Scan QR code to access your স্বাস্থ্যবই from mobile device</p>
                </div>
            </div>
        </article>
    )
}

export default About
