import React, { useState } from 'react'
// LOGO.. SVG 
import Logo from '../../assets/images/logo.svg'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const SideBar = () => {
    const ininTialState = {
        activeClass: false
    }
    const [state, setState] = useState(ininTialState)

    const handleNavigation = () => {
        setState({
            ...state,
            activeClass: !state.activeClass
        })
    }


    return (
        <aside className="menu" id="menu">
            <div className="logo">
                {/* <!-- Logo image--> */}
                <img src={Logo} width="120" height="120" alt="" />
                {/* <!-- Logo name--> */}
                <span>স্বাস্থ্যবই of Health Ninja</span>
            </div>
            {/* <!-- Mobile Navigation--> */}
            <a onClick={handleNavigation} className={state.activeClass ? "menu-link active" : "menu-link"}>
                <FontAwesomeIcon icon={faBars} />
            </a>
            {/* <!-- Left Navigation--> */}
            <nav id="menu1" role="navigation" className={state.activeClass ? "menu-link  active" : "menu-link"}>
                {/* <!-- <a href="#chapterintroduction"><span id="link_introduction" className="active">Home</span></a> --> */}
                <Link to="chapterabout" spy={true} smooth={"easeInOutQuint"} duration={500}><span id="link_about">Bio</span></Link>
                <Link to="chapterskills" spy={true} smooth={"easeInOutQuint"} duration={500}><span id="link_skills">Health Trend</span></Link>
                <Link to="chapterexperience" spy={true} smooth={"easeInOutQuint"} duration={500}><span id="link_experience">স্বাস্থ্যবই</span></Link>
                <Link to="chaptereducation" spy={true} smooth={"easeInOutQuint"} duration={500}><span id="link_education">Health Records</span></Link>
                {/* <!-- <a href="#chapterportfolio"><span id="link_portfolio">Portfolio</span></a> --> */}
                <Link to="chaptercontact" spy={true} smooth={"easeInOutQuint"} duration={500}><span id="link_contact">Contact</span></Link>
                {/* <!-- <a href="blog.html"><span id="link_blog">Blog</span></a> --> */}
            </nav>


            <nav id="menu1" role="navigation">
                {/* <!-- <a href="#chapterintroduction"><span id="link_introduction" className="active">Home</span></a> --> */}
                <a href="#chapterabout"><span id="link_about">Bio</span></a>
                <a href="#chapterskills"><span id="link_skills">Health Trend</span></a>
                <a href="#chapterexperience"><span id="link_experience">স্বাস্থ্যবই</span></a>
                <a href="#chaptereducation"><span id="link_education">Health Records</span></a>
                {/* <!-- <a href="#chapterportfolio"><span id="link_portfolio">Portfolio</span></a> --> */}
                <a href="#chaptercontact"><span id="link_contact">Contact</span></a>
                {/* <!-- <a href="blog.html"><span id="link_blog">Blog</span></a> --> */}
            </nav>

            {/* <!-- <div className="social"> <a href="https://www.facebook.com" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a> <a href="https://plus.google.com"
        //   target="_blank" className="google-plus"><i className="fa fa-google-plus"></i></a> </div> --> */}
            <div className="copyright">
                © স্বাস্থ্যবই All Rights Reserved.
            </div>
        </aside>
    )
}

export default SideBar
