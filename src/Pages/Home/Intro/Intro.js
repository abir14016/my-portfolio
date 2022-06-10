import React from 'react';
import abir from '../../../images/me/abir.png'

const Intro = () => {
    return (
        <div class="hero min-h-screen text-white">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='bg-secondary rounded-lg flex justify-center py-10'>
                    <div className='bg-primary w-4/5 h-4/5 rounded-lg'>
                        <img src={abir} alt=" " />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h1 class="text-5xl font-bold text-secondary">Who I am?</h1>
                    <p class="py-6 font-mono">My name's Abir. I'm a web designer and developer based in Southampton, UK.</p>
                    <p className='font-mono'>During the day I work as a lead developer at a local agency and in the evening I work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;