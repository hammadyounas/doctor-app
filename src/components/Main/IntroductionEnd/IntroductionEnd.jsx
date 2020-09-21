import React from 'react'

const introductionEnd = () => {
    return (
        // <!-- Introduction -->
        <article class="content introduction-end" id="chapterthankyou" onClick={() => console.log('#chapterthankyou')}>
            <div class="inner">
                <div class="introduction-end-con margin-top50">
                    {/* <!-- <h3><strong>স্বাস্থ্যবই</strong></h3> --> */}
                    <div id="rotate" class="rotate">
                        <div><span>Stay Safe.</span></div>
                        <div><span>Keep Healthy.</span></div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default introductionEnd
