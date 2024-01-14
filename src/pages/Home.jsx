import React from 'react';
import Header from '../components/Headere/Header';
import Bio from '../components/Bio/Bio'; 
const Home = () => {
    
    return (
        <div className='h-screen'>

            <div className=''>
                <Header></Header>
                <Bio></Bio>

            </div>
        </div>
    );
};

export default Home;
