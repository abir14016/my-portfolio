import { faAt, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <h1 className='text-secondary text-5xl font-bold text-center'>CONTACT</h1>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <div className='font-bold'>
                            <h3>
                                <FontAwesomeIcon className='px-2 text-secondary' icon={faAt}></FontAwesomeIcon>
                                <span className='text-white'>abir14016@gmail.com</span>
                            </h3>
                        </div>
                        <div className='py-5 font-bold'>
                            <h3>
                                <FontAwesomeIcon className='px-2 text-secondary' icon={faPhone}></FontAwesomeIcon>
                                <span className='text-white'>(+88) 01989483010</span>
                            </h3>
                        </div>
                        <div className='font-bold'>
                            <h3>
                                <FontAwesomeIcon className='px-2 text-secondary' icon={faLocationDot}></FontAwesomeIcon>
                                <span className='text-white'>Jhenaidah,Bangladesh</span>
                            </h3>
                        </div>
                        <h1 class="text-5xl font-bold mt-10 text-slate-200">Contact Me</h1>
                        <p class="py-6 text-slate-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm bg-transparent">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-secondary font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="your name" class="input contact-input text-slate-300" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-secondary font-bold">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input contact-input text-slate-300" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-secondary font-bold">Message</span>
                                </label>
                                <textarea type="text" placeholder="your message" style={{ minHeight: 100 }} class="input contact-input text-slate-300" />
                            </div>
                            <div class="mt-6 text-start">
                                <button class="btn btn-secondary rounded-full text-primary font-bold">
                                    SEND
                                    <FontAwesomeIcon className='px-3' icon={faPaperPlane}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;