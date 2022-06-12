import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">404!</h2>
                <p>You enter incorrect route</p>
                <div class="card-actions justify-end">
                    <button onClick={navigateToHome} class="btn btn-primary">Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;