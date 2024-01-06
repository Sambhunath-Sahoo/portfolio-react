import React from 'react'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'


import leetcode from '../assets/icons/leetcode.svg'
import codeforces from '../assets/icons/codeforces.svg'
import codechef from '../assets/icons/codechef.svg'
import blog from '../assets/icons/blog.svg'

import google from '../assets/icons/google.svg'
import map from '../assets/icons/map.png'

// import mightycoder from '../assets/mightycoder2.jpg'
// import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:sambhunathsahoo25@gmail.com")
    }
    const handleTheme = () => {
        
    }
    
    const sidebar_variant = {
        hidden: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFpFirumhb6og/profile-displayphoto-shrink_400_400/0/1653187278030?e=1668643200&v=beta&t=YJazB8nJmQjSA4NMOlvIkk7ikEr4en0_5DY2Qk28-9o" alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name"><strong>Sambhunath</strong> <span>Sahoo</span> </div>
            <div className="sidebar__item sidebar__title">| Web Developer | Competitive Programmer </div>
            <a href="https://drive.google.com/file/d/1gJhPqMpVsI0rDbEPvbo9vHlhA8obMXlu/view" target="_blank">
                <div className="sidebar__item sidebar__resume">
                    Resume
                </div>
            </a>
            <figure className="my-2 sidebar__social-icons">
                <a href="https://github.com/Sambhunath-Sahoo" target="_blank"><img src={github} alt="github" className="mr-3 sidebar__icon" /></a>
                <a href="https://www.linkedin.com/in/sams25/" target="_blank"><img src={linkedin} alt="linkedin" className="mr-3 sidebar__icon" /></a>
                 {/*<a href="https://twitter.com/sam90983497" target="_blank"><img src={twitter} alt="twitter" className="mr-3 sidebar__icon" /></a>*/}
                <a href="https://www.instagram.com/_hey.sams/" target="_blank"><img src={instagram} alt="instagram" className="mr-3 sidebar__icon" /></a>
                <a href="https://www.facebook.com/sambhu.sahoo.581/" target="_blank"><img src={facebook} alt="facebook" className="mr-3 sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item">
                    <a href="https://leetcode.com/sambhunathsahoo25/" target="_blank"><img src={leetcode} alt="leetcode" className="mr-3 sidebar__icon" /></a>
                    <a href="https://www.codechef.com/users/sambhu25" target="_blank"><img src={codechef} alt="codechef" className="mr-3 sidebar__icon" /></a>
                    <a href="https://codeforces.com/profile/sambhunathsahoo25" target="_blank"><img src={codeforces} alt="codeforces" className="mr-3 sidebar__icon" /></a>
                    <a href="https://medium.com/@sambhunathsahoo25" target="_blank"><img src={blog} alt="bolg" className="mr-3 sidebar__icon" /></a>
                </div>
                <div className="sidebar__item">
                  {/*  <a href="https://www.google.com/maps/place/Sundargarh,+Odisha/@22.0833393,83.7454248,8.88z/data=!4m5!3m4!1s0x3a20ecc12a16f439:0xfd914ce07d2ebaac!8m2!3d22.0571189!4d84.6897495" target="_blank"><img src={map} alt="mail" className="mr-3 sidebar__icon"/></a> */}
                    <a href="" target="_blank"><img src={google} alt="mail" className="mr-3 sidebar__icon" onClick={handleEmailMe}/></a>
                </div>
            </div>
            <div className="sidebar__contact">
               {/* <div className="sidebar__item sidebar__location">
                    <b>Odisha, India</b>
                </div> */}
                <div className="sidebar__item">sambhu05357@gmail.com</div>
            </div>
            {/* <div className="sidebar__item sidebar__theme" onClick={handleTheme}>change theme</div> */}
            {/* <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div> */}
        </motion.div>
    )
}

export default Sidebar;
