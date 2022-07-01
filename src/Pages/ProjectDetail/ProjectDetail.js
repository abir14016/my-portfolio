import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjectDetail from '../Hooks/UseProjectDetail';


const ProjectDetail = () => {
    const { projectId } = useParams();
    const [project] = useProjectDetail(projectId);
    const { _id, name, subName, description, technologies, links, images } = project;
    console.log(project);
    return (
        <div>
            <div class="card w-96 bg-neutral text-neutral-content flex justify-center">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{subName}</p>
                    <p>{project?.description?.d1}</p>
                    <img src={images.lgHome} alt="project" />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;