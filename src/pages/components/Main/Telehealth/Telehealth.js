import React from 'react'

const Telehealth = ({ handleLocation }) => {
    return (
        <article className="content telehealth white-bg" id="chaptertelehealth" onClick={() => handleLocation("#chaptertelehealth")}>
            <div className="inner">
                <h2>Telehealth</h2>
                <div className="title-divider"></div>
                <br /><br />
                <iframe width="90%" height="480" src="https://shasthoboi.doxy.me/telehealth" frameborder="0"></iframe>
            </div>
        </article>
    )
}

export default Telehealth
