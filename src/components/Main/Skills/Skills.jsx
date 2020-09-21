import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../../AnimatedProgressProvider/AnimatedProgressProvider'
import { easeQuadInOut } from 'd3-ease';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    const initialState = {
        percent: 80,
        progressBarVal: [99, 80, 60]
    }

    const [state, setState] = useState(initialState);


    return (
        <article className="content skills gray-bg" id="chapterskills">
            <div className="inner">
                <h2>Health trends</h2>
                <div className="title-divider"></div>
                <h3>Healthy Living</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae
                eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a
nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
                <div className="skills-con">
                    <div className="container-sub margin-top50">
                        <div className="row">
                            <div className="col-6 margin-bottom50">
                                <div className="col-6"><span className="chart">
                                    <AnimatedProgressProvider
                                        valueEnd={state.percent}
                                        duration={1.4}
                                        easingFunction={easeQuadInOut}
                                    >
                                        {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                    value={value}
                                                    text={`${roundedValue}%`}
                                                    strokeWidth={5}
                                                    styles={buildStyles({
                                                        textSize: '25px',
                                                        pathColor: `#8f8f8f`,
                                                        textColor: '#fcd137',
                                                        pathTransition: "none"
                                                    })}
                                                />
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </span></div>
                                <div className="col-6 chart-text">
                                    <h4>Physical Activity</h4>
                                    {/* <!-- <p>Expert, 4 years</p> --> */}
                                </div>
                            </div>
                            <div className="col-6 margin-bottom50">
                                <div className="col-6"><span className="chart">
                                    <AnimatedProgressProvider
                                        valueEnd={state.percent}
                                        duration={1.4}
                                        easingFunction={easeQuadInOut}
                                    >
                                        {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                    value={value}
                                                    text={`${roundedValue}%`}
                                                    strokeWidth={5}
                                                    styles={buildStyles({
                                                        textSize: '25px',
                                                        pathColor: `#8f8f8f`,
                                                        textColor: '#fcd137',
                                                        pathTransition: "none"
                                                    })}
                                                />
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </span></div>
                                <div className="col-6 chart-text">
                                    <h4>Lifestyle Trend</h4>
                                    {/* <!-- <p>Advanced, 2 years</p> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full-divider"></div>
                    <div className="container-sub skill-list">
                        <div className="row">
                            <h3>Major health signs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet
                            vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse
      id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
                            <div className="col-4 margin-top10">
                                <ul>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        Heart Disease</li>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        Stroke</li>
                                    {/* <!-- <li>E-commerce Platform</li>
        <li>Color theory knowledge</li> --> */}
                                </ul>
                            </div>
                            <div className="col-4 margin-top10">
                                <ul>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        Diabetes</li>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        Hypertension</li>
                                    {/* <!-- <li>Photo Composition</li>
        <li>Good sense of Tipography</li> --> */}
                                </ul>
                            </div>
                            <div className="col-4 margin-top10">
                                <ul>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        Kidney Disease</li>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        Dental</li>
                                    {/* <!-- <li>Portrait Retouching</li>
        <li>Video Editing</li> --> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="full-divider"></div>
                    <div className="container-sub">
                        <div className="row">
                            <h3>Mental Health</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet
                            vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse
      id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
                            <div className="progressbar-main margin-top50">
                                <div className="progress-bar-description">Alzheimer</div>
                                <div id="progressBar" className="progress">
                                    <div className="progress-value" style={{ width: `${state.progressBarVal[0]}%` }}>
                                        <span>{state.progressBarVal[0]}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progressbar-main margin-top40">
                                <div className="progress-bar-description">Language skill</div>
                                <div id="progressBar2" className="progress">
                                    <div className="progress-value" style={{ width: `${state.progressBarVal[1]}%` }}>
                                        <span>{state.progressBarVal[1]}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progressbar-main margin-top40">
                                <div className="progress-bar-description">Speech</div>
                                <div id="progressBar3" className="progress">
                                    <div className="progress-value" style={{ width: `${state.progressBarVal[2]}%` }}>
                                        <span>{state.progressBarVal[2]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>

    )
}

export default Skills
