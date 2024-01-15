
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';

const Main = () => {
    const theme = localStorage.getItem("theme");

    return (
        <>
          
        
                <Header />
               <div className='min-h-[700px]'>
               <Outlet />
               </div>
                <Footer />
            

        </>
    );
};

export default Main;
