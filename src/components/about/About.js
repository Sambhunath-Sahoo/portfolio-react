import React from 'react';


import Skillcard from './../Skillcard';
import { motion } from 'framer-motion'
import skills from './../data/about_data'
import './about.css'

const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
            I am currently doing my B.Tech in Computer Science from GIETU, Odisha. I'm a software developer(MERN) and computer programmer with having great interest in Data Structures, Algorithms, and Optimization. As a programmer, I love challenges and love to find the solution.<br></br><br></br>
Hands-on experience in DSA, Development, and Implementation.Enthusiastic team player, a fast learner with creative problem-solving skills, good coding, and communication skills.<br></br><br></br>
I have strong problem-solving skills, with a willingness to learn new technologies and take up roles that are challenging and full of learning.I am open to exciting intern as well as full-time roles, with my graduation completing in Jun 2022, in the field of Software Engineering. You can reach out to me for any such opportunity at sambhunathsahoo25@gmail.com<br></br>
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;