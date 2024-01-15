import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
const About = () => {
    const location = useLocation();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
        >
            <div className=''>
               <h2 className='text-6xl text-center my-20 font-bold'>About Me</h2>
            </div>
        </motion.div>
    );
};
export default About;