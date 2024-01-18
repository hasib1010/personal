import React from 'react';
import Marquee from "react-fast-marquee";
import boot from './../../assets/logos/bootstrap.png'
import css from './../../assets/logos/css.png'
import fig from './../../assets/logos/figma.png'
import fire from './../../assets/logos/firebase.png'
import html from './../../assets/logos/htm.png'
import git from './../../assets/logos/git.png'
import js from './../../assets/logos/js.png'
import next from './../../assets/logos/next.png'
import reactIcon from './../../assets/logos/react.png'
import tailwind from './../../assets/logos/tailwind.png'
import npm from './../../assets/logos/npm.png'
const SkillsLayout = ({ img }) => {
    return (
        <Marquee speed={130}>
            <div className='grid my-5 grid-cols-11 gap-11'>
                <img className='lg:w-24 w-10 ' src={html}/>
                <img className='lg:w-24 w-10 ' src={css}/>
                <img className='lg:w-24 w-10 ' src={boot}/>
                <img className='lg:w-24 w-10 ' src={tailwind}/>
                <img className='lg:w-24 w-10 ' src={js}/>
                <img className='lg:w-24 w-10 ' src={reactIcon}/>
                <img className='lg:w-24 w-10 ' src={fig}/>
                <img className='lg:w-24 w-10 ' src={fire}/>
                <img className='lg:w-24 w-10 ' src={next}/>
                <img className='lg:w-24 w-10 ' src={git}/>
                <img className='lg:w-24 w-10 ' src={npm} alt="" />

            </div>
        </Marquee>
    );
};

export default SkillsLayout;