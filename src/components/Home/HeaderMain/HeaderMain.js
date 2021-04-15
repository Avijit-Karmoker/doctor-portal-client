import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} class="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#203047'}}>Your New Smile <br/> Start Here</h1>
                <p class="text-secondary"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, pariatur eaque. Ducimus itaque odio dolor!</p>
                <button type="button" class="btn btn-brand text-white">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;