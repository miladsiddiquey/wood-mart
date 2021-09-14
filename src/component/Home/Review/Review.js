import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
    const product = [
        {
            "id": 1,
            "img": "https://i.ibb.co/bP2h94Q/as.png",
            "name": "pan si ",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
        {
            "id": 1,
            "img": "https://i.ibb.co/0QcnNKH/about-men.png",
            "name": "jamal kan",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
        {
            "id": 1,
            "img": "https://i.ibb.co/bP2h94Q/as.png",
            "name": " jon do",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
    ]
    const [index, setIndex] = useState(0);
    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(product);


    }, [])

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{ backgroundColor: '#FFF6F6', padding: '40px 0px 40px 0px',marginTop:'90px' }}>
            <div className="container">
            <h2 className="text-center mb-5" style={{ color: '#5E5D5D' }}>Review Our Customers</h2>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
                    {
                        item.map((item) => (
                            <Carousel.Item key={item.id}>
                                <div className="row align-items-center " style={{margin:'0px 60px 0px 60px'}}>
                           <div className="col-md-12 d-flex justify-content-center">
                           <div className="card viewer-card">
                               <div className="rev-img">
                               <img src={item.img} alt="" className="img-fluid" />
                               </div>
                                <div className="review-details">
                                    <h4 style={{textTransform:'capitalize'}}>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="start">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                           </div>
                               
                            </div>
                                
                            </Carousel.Item>
                        ))
                    }

                </Carousel>

            </div>
        </div>
    );
};

export default Review;