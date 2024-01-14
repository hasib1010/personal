import React from 'react'; 
import Typeanimations from './Typeanimations';

const Bio = () => {

    return (
        <div className='bio '>
         <div className='flex lg:flex-row md:flex-row flex-col gap-8 justify-between my-20 items-center'>
         <div className='bio-txt'>
                <h2 className='bio-head'>Web Developer.
                    <span>
                    </span>
                </h2>
                <div >
                    <Typeanimations></Typeanimations>
                </div>
            </div>
            <div className='dp'>

            </div>
         </div>
        </div>
    );
};

export default Bio;