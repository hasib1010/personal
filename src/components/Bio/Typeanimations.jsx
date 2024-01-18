import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typeanimations = () => {
    return (
        <div>
            <TypeAnimation 
                sequence={[
                     
                    'Detail Oriented',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Front-End Specialist',
                    1000,
                    'With Back-End Experience',
                    1000,
                    'Team Work Capability',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '20px', display: 'flex' }}
                repeat={Infinity}
            />
        </div>
    );
};

export default Typeanimations;