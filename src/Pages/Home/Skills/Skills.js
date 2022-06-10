import React from 'react';
import Slider from "react-slick";
import react from '../../../images/skills/react.svg';
import bootstrap from '../../../images/skills/bootstrap.svg';
import c from '../../../images/skills/c.svg';
import figma from '../../../images/skills/figma.svg';
import canva from '../../../images/skills/canva.svg';
import javascript from '../../../images/skills/javascript.svg';
import firebase from '../../../images/skills/firebase.svg';
import mongoDB from '../../../images/skills/mongoDB.svg';
import nextJS from '../../../images/skills/nextJS.svg';
import python from '../../../images/skills/python.svg';
import tailwind from '../../../images/skills/tailwind.svg';
import typescript from '../../../images/skills/typescript.svg';
import strapi from '../../../images/skills/strapi.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Skills.css';

const Skills = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div>
            <h1 class="text-5xl font-bold text-secondary pb-28">SKILLS</h1>
            <Slider {...settings}>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={react} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>React</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={bootstrap} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Bootstrap</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={c} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>C</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={figma} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Figma</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={canva} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Canva</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={javascript} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Javascript</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={firebase} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Firebase</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={mongoDB} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>MongoDB</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={nextJS} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>NextJS</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={python} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Python</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={tailwind} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Tailwind</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={typescript} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Typescript</h3>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='skill-image' src={strapi} alt="" />
                    </div>
                    <h3 className='text-white text-2xl font-bold text-center pt-2'>Strapi</h3>
                </div>
            </Slider>
        </div>
    );
};

export default Skills;