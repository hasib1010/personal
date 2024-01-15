import React from 'react';
import Header from '../components/Headere/Header';
import Bio from '../components/Bio/Bio';
import Skills from '../components/Technologies/Skills';
import Career from '../components/Career/Career';

import { motion } from "framer-motion"
const Home = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
        >

            <div className='container mx-auto'>
                <Header></Header>
                <Bio></Bio>
                <Career></Career>
                <Skills></Skills>
            </div>
        </motion.div>
    );
};

export default Home;
