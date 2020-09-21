import React from 'react'
import TextLoop from "react-text-loop";

const introductionEnd = ({ handleLocation }) => {
    return (
        // <!-- Introduction -->
        <article
            className="content introduction-end"
            id="chapterthankyou"
            onClick={() => handleLocation("#chapterthankyou")}>
            <div className="inner">
                <div className="introduction-end-con margin-top50">
                    {/* <!-- <h3><strong>স্বাস্থ্যবই</strong></h3> --> */}
                    <div id="rotate" className="rotate">
                        <TextLoop>
                            <div ><span>Stay Safe.</span></div>
                            <div ><span>Keep Healthy.</span></div>
                        </TextLoop>
                    </div>
                </div>
            </div>
        </article >
    )
}

export default introductionEnd
