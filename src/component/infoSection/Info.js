import React from 'react';
import './Info.css';

const Info = () => {
    const info = [
        {
            "id":1,
            "icon":"https://i.ibb.co/HDvYPN8/icon3-1.png",
            "title":"free shipping",
            "subTitle":"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, mollitia"
        },
        {
            "id":2,
            "icon":"https://i.ibb.co/K0zwG2B/icon2-removebg-preview.png",
            "title":"Amazing Deals",
            "subTitle":"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, mollitia"
        },
        {
            "id":3,
            "icon":"https://i.ibb.co/XC1z1MD/icon1-removebg-preview.png",
            "title":"Customer Service",
            "subTitle":"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, mollitia"
        },
    ]
    return (
        <div className="container">
            <div className="row info_section">
                {
                    info.map((info )=>(
                        <div key={info.id} className="col-md-4 d-flex justify-content-center info-col">
                        <div className="text-center">
                       <div className="text-center">
                       <img className="img-fluid" src={info.icon} alt="icon" style={{height:'70px',width:'70px'}}/>
                       </div>
                        <h4 className="info_title mt-2">{info.title}</h4>
                        <p className="info_sTitle mt-3">{info.subTitle}</p>
                        </div>
                       
                    </div>
                    ))
                }
               
            </div>
        </div>
    );
};

export default Info;