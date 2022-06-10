import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import gymHero from '../../../images/projects/gym-hero.png';
import { faCode, faCodeFork, faPlay } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div className='py-32'>
            <h1 className='text-5xl text-secondary font-bold pb-28'>PROJECTS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5'>
                <div className='flex justify-center'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={gymHero} alt="Shoes" /></figure>
                        <div class="card-body bg-secondary">
                            <h2 class="card-title font-extrabold text-2xl">
                                GymHero
                                <button className='btn btn-primary btn-xs'>Details</button>
                            </h2>
                            <p className='text-start font-bold'>A warehouse website to store gym equipments</p>
                            <div class="card-actions justify-end">
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="server side code">
                                    <a href="https://github.com/abir14016/gym-hero-server-public" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon className='text-xl' icon={faCodeFork}></FontAwesomeIcon>
                                    </a>
                                </button>
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="client side code">
                                    <a href="https://github.com/abir14016/gym-hero-client-public" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon className='text-xl' icon={faCode}></FontAwesomeIcon>
                                    </a>
                                </button>
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="see demo">
                                    <a href="https://frolicking-puppy-e1821b.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='text-xl' icon={faPlay}></FontAwesomeIcon>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={gymHero} alt="Shoes" /></figure>
                        <div class="card-body bg-secondary">
                            <h2 class="card-title font-extrabold text-2xl">
                                GymHero
                                <button className='btn btn-primary btn-xs'>Details</button>
                            </h2>
                            <p className='text-start font-bold'>A warehouse website to store gym equipments</p>
                            <div class="card-actions justify-end">
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="server side code">
                                    <a href="https://github.com/abir14016/gym-hero-server-public" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon className='text-xl' icon={faCodeFork}></FontAwesomeIcon>
                                    </a>
                                </button>
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="client side code">
                                    <a href="https://github.com/abir14016/gym-hero-client-public" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon className='text-xl' icon={faCode}></FontAwesomeIcon>
                                    </a>
                                </button>
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="see demo">
                                    <a href="https://frolicking-puppy-e1821b.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='text-xl' icon={faPlay}></FontAwesomeIcon>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={gymHero} alt="Shoes" /></figure>
                        <div class="card-body bg-secondary">
                            <h2 class="card-title font-extrabold text-2xl">
                                GymHero
                                <button className='btn btn-primary btn-xs'>Details</button>
                            </h2>
                            <p className='text-start font-bold'>A warehouse website to store gym equipments</p>
                            <div class="card-actions justify-end">
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="server side code">
                                    <a href="https://github.com/abir14016/gym-hero-server-public" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon className='text-xl' icon={faCodeFork}></FontAwesomeIcon>
                                    </a>
                                </button>
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="client side code">
                                    <a href="https://github.com/abir14016/gym-hero-client-public" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon className='text-xl' icon={faCode}></FontAwesomeIcon>
                                    </a>
                                </button>
                                <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="see demo">
                                    <a href="https://frolicking-puppy-e1821b.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='text-xl' icon={faPlay}></FontAwesomeIcon>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;