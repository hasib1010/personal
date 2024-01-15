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
const SkillsLayout = ({ img }) => {
    return (
        <Marquee speed={130}>
            <div className='grid grid-cols-10 gap-14'>
                <img className='w-24 ' src={html}/>
                <img className='w-24 ' src={css}/>
                <img className='w-24 ' src={boot}/>
                <img className='w-24 ' src={tailwind}/>
                <img className='w-24 ' src={js}/>
                <img className='w-24 ' src={reactIcon}/>
                <img className='w-24 ' src={fig}/>
                <img className='w-24 ' src={fire}/>
                <img className='w-24 ' src={next}/>
                <img className='w-24 ' src={git}/>
                <img className='w-24 ' src="" alt="" />

            </div>
        </Marquee>
    );
};

export default SkillsLayout;