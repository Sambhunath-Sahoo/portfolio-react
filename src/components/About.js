// import React from 'react';
// import api from '../assets/icons/api.svg'
// import backend from '../assets/icons/backend.svg'
// import algo from '../assets/icons/algo.svg'
// import computer from '../assets/icons/computer.svg'
// import repair from '../assets/icons/repair.svg'
// import puzzle from '../assets/icons/puzzle.svg'

// import Skillcard from './Skillcard';
// import { motion } from 'framer-motion'
// const skills = [
//     {
//         icon: computer,
//         title: "Frontend Development",
//         about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
//     },
//     {
//         icon: repair,
//         title: "Backend  Development",
//         about: "handle database, server, api using and SQLlite",
//     },
//     {
//         icon: api,
//         title: "API Development",
//         about: "I can develop robust REST API using django-rest-api "
//     },
//     {
//         icon: algo,
//         title: "Competitive Coder",
//         about: "a daily problem solver in HackerRank and Leetcode"
//     },
//     {
//         icon: puzzle,
//         title: "UI/UX designer",
//         about: "minimalistic user interface designer using figma and  framer"
//     },
//     {
//         icon: computer,
//         title: "Whatever",
//         about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
//     },
// ]


// const About = () => {
//     const about_variants = {
//         hidden: {
//             opacity: 0
//         },
//         visible: {
//             opacity: 1,
//             transition: {
//                 dealy: 0.2, duration: 0.6,
//             }
//         },
//         exit: {
//             opacity: 0,
//             transition: {
//                 ease: 'easeInOut'
//             }
//         }
//     }
//     return (
//         <motion.div className="about"

//             variants={about_variants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//         >
//             <h6 className="about__intro">
//             I am currently doing my B.Tech in Computer Science from GIETU, Odisha. I'm a software developer(MERN) and computer programmer with having great interest in Data Structures, Algorithms, and Optimization. As a programmer, I love challenges and love to find the solution.

// Hands-on experience in DSA, Development, and Implementation. Solid Programming expertise in JAVA, C/C++, Object Oriented analysis. Enthusiastic team player, a fast learner with creative problem-solving skills, good coding, and communication skills.

// I have strong problem-solving skills, with a willingness to learn new technologies and take up roles that are challenging and full of learning.

// I am open to exciting intern as well as full-time roles, with my graduation completing in Jun 2022, in the field of Software Engineering. You can reach out to me for any such opportunity at sambhu05357@gmail.com
//             </h6>
//             <div className="container about__container">
//                 <h6 className="about__heading">What I offer</h6>
//                 <div className="row">
//                     {
//                         skills.map(skill =>
//                             <Skillcard skill={skill} />

//                         )
//                     }
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default About;
