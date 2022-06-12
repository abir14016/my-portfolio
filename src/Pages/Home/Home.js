import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Divider from './Divider/Divider';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className='bg-primary'>
            <Banner></Banner>
            <Divider></Divider>
            <Intro></Intro>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;