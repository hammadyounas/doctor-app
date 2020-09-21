import React from 'react'
import './main.scss'

// IMPORTS..
import About from './About/About'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import Contact from './Contact/Contact'
import IntroductionEnd from './IntroductionEnd/IntroductionEnd'

const Main = () => {

    const handleLocation = (locat) => window.location.href = locat;

    return (
        <div className="content-scroller">
            <div className="content-wrapper">
                <About handleLocation={handleLocation} />
                <Skills handleLocation={handleLocation} />
                <Experience handleLocation={handleLocation} />
                <Education handleLocation={handleLocation} />
                <Contact handleLocation={handleLocation} />
                <IntroductionEnd handleLocation={handleLocation} />
            </div>
        </div>
    )
}

export default Main
