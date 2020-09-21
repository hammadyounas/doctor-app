import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

// CSS..
// import './css/carousel.css'
// import './css/normalize.css'
// import './css/portfolio.css'
import './../../../css/scroll.css'
import './../../../css/font-awesome.css'
import './../../../css/style.css'
import './../../../css/responsive.css'

// PAGES..
import SideBar from './../SideBar/SideBar'
import Main from './../Main/Main'

const Home = () => {
  return (
    <div>
      <SideBar />
      <Main />
      <a onClick={() => scroll.scrollToTop({ smooth: "easeInOutQuint", })} className="totop-link">
        Go to the top
      </a>
    </div>
  );
}

export default Home