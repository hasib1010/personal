import React from 'react';
import dp from "./../assets/dp.jpg"
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
const About = () => {
    const location = useLocation();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
        >
            <div className=' container mx-auto'>
                <h2 className='text-6xl text-center  font-bold'>About Me</h2>
            </div>
            <div className='relative'>
                <p className='btx w-3/6 mx-auto mt-9  text-xl'>
                    <span className='highlight2 text-2xl'>Hello there!</span>
                    <br />
                    <div className='flex items-center justify-between'>
                        <span className='text-2xl'>I'm MD Haibul Hasan, but you can call me Hasib.</span>
                      
                    </div>
                    <br /> 
                    At 23 years young, I'm a passionate front-end developer with a focus on creating captivating digital experiences. I specialize in using cutting-edge technologies such as React and Next.js to bring creative ideas to life in the digital realm.
                    <br /><br />
                    With a deep understanding of front-end development, I leverage the power of React to build dynamic and interactive user interfaces. React's component-based architecture allows me to create modular and scalable code, providing a foundation for seamless and efficient web applications.
                    <br /><br />
                    In addition to React, I embrace Next.js to take my projects to the next level. Next.js, with its built-in features like server-side rendering and automatic code splitting, enables me to deliver faster and more optimized web applications. This framework empowers me to build not only visually appealing interfaces but also high-performing and SEO-friendly websites.
                    <br /><br />
                    My journey in web development is marked by a commitment to staying at the forefront of industry trends. I am a perpetual learner, always exploring new possibilities and incorporating the latest advancements into my work. This curiosity not only keeps my skills sharp but also ensures that the projects I contribute to are at the forefront of innovation.
                    <br /><br />
                    Collaboration is key in the ever-evolving world of web development, and I thrive in diverse teams where ideas flow freely. Effective communication and a dedication to meeting deadlines are integral to my work ethic, ensuring that projects are executed smoothly and efficiently.
                    <br /><br />
                    I invite you to explore my portfolio, where you'll find a collection of projects showcasing my proficiency in React, Next.js, and other front-end technologies. If you share my enthusiasm for creating exceptional web experiences, I'm eager to connect and explore how we can collaborate to bring your digital vision to life. Let's build something amazing together!</p>
                    <img className='absolute -top-16 right-72 transition  w-32 h-32 rounded-full' src={dp} alt="" />
            </div>

        </motion.div>
    );
};
export default About;