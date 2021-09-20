import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="container subscribe-bg  ">
                <div className="row overly-bg ">
                    <div className="col-md-6">
                        <h1 className="text-capitalize ten-per-off">subscribe & get<br />10% off</h1>
                        <div className="subscribe-filed input-group mt-4  d-flex">
                            <input type="text" className="form-control" placeholder="Enter your Email" />
                            <div className="btn btn-danger">Subscribe</div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;