import React from 'react';
import Typewriter from 'typewriter-effect';
import abir from '../../../images/me/abir.jpg';
import './Banner.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    library.add(fas, faTwitter, faFontAwesome, faFacebook, faGithub, faLinkedin, faInstagram)
    return (
        <div className='banner-container'>
            <div className='bg-secondary lg:h-screen md:h-screen'>
                <p className='text-black font-mono italic text-3xl'>webDevAbir</p>
                <div className='flex justify-end items-center'>
                    <div className='profile-image-container'>
                        <img className='profile-image' src={abir} alt="abir" />
                    </div>
                </div>
                <div className='social-icons inline-block transition ease-in-out delay-150'>
                    <a rel="noopener noreferrer" target="_blank" className='p-3 text-3xl' href='https://twitter.com/abir14016'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                </div>
                <div className='social-icons inline-block transition ease-in-out delay-150'>
                    <a rel="noopener noreferrer" target="_blank" className='p-3 text-3xl social-icons' href='https://www.facebook.com/mdabir.hassan.543/'><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                </div>
                <div className='social-icons inline-block transition ease-in-out delay-150'>
                    <a rel="noopener noreferrer" target="_blank" className='p-3 text-3xl social-icons' href='https://www.linkedin.com/in/abir14016/'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
                <div className='social-icons inline-block transition ease-in-out delay-150'>
                    <a rel="noopener noreferrer" target="_blank" className='p-3 text-3xl social-icons' href='https://github.com/abir14016'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                </div>
                <div className='social-icons inline-block transition ease-in-out delay-150'>
                    <a rel="noopener noreferrer" target="_blank" className='p-3 text-3xl social-icons' href='https://www.instagram.com/abir14016/'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                </div>
            </div>
            <div className='bg-primary lg:h-screen md:h-screen flex justify-center items-center'>
                <div>
                    <h2 className='text-slate-300 text-2xl'>Web Developer</h2>
                    <h1 className='text-6xl text-white font-extrabold'>
                        <Typewriter
                            options={{
                                strings: ['Abir Hasan'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className='w-1/2 mx-auto py-7'>
                        <p className=' text-slate-300'>There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className="btn rounded-full btn-outline btn-secondary mx-2">Download Resume</button>
                        <button className="btn btn-active btn-secondary rounded-full text-black hover:bg-black hover:text-white mx-2">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;