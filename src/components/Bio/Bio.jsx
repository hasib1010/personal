import React from 'react'; 
import Typeanimations from './Typeanimations';

const Bio = () => {

    return (
        <div className='bio '>
         <div className='flex lg:flex-row md:flex-row flex-col gap-8 justify-between my-20 items-center'>
         <h2 className='bio-head'>Web Developer.
         <div className=''>
                    <Typeanimations></Typeanimations>
                </div> 
                </h2>
         <div className='bio-txt'>
                
                
            </div>
            <div className='dp'>

            </div>
         </div>
        </div>
    );
};

export default Bio;