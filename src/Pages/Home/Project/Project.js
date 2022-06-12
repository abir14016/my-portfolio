import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeFork, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, name, subName, description, technologies, links, images } = project;
    const navigate = useNavigate();

    const navigateToProjectDetail = id => {
        navigate(`/project/${id}`);
    }
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={images.lgHome} alt="Shoes" /></figure>
                <div class="card-body bg-secondary">
                    <h2 class="card-title font-extrabold text-2xl">
                        {name}
                        <button onClick={() => navigateToProjectDetail(_id)} className='btn btn-primary btn-xs'>Details</button>
                    </h2>
                    <p className='text-start font-bold'>{subName}</p>
                    <div class="card-actions justify-end">
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="server side code">
                            <a href={links.server} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className='text-xl' icon={faCodeFork}></FontAwesomeIcon>
                            </a>
                        </button>
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="client side code">
                            <a href={links.client} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className='text-xl' icon={faCode}></FontAwesomeIcon>
                            </a>
                        </button>
                        <button className='btn btn-outline border-4 btn-primary rounded-full tooltip' data-tip="see demo">
                            <a href={links.live} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='text-xl' icon={faPlay}></FontAwesomeIcon>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;