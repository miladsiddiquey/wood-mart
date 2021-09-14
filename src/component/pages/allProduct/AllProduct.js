import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './AllProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'

const AllProduct = () => {
    const product = [
        {
            "id":1,
            "title": "sofa",
            "price": "3,200",
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png"
        },
        {
            "id":2,
            "title": "sofa",
            "price": "3,200",
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png"
        },
        {
            "id":3,
            "title": "sofa",
            "price": "3,200",
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png"
        },
        {
            "id":4,
            "title": "sofa",
            "price": "3,200",
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png"
        },
        {
            "id":5,
            "title": "sofa",
            "price": "3,200",
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png"
        },
        {
            "id":6,
            "title": "sofa",
            "price": "3,200",
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png"
        },
        {
            "id":7,
            "title": "sofa",
            "price": "3,200",
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png"
        },
        {
            "id":8,
            "title": "sofa",
            "price": "3,200",
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png"
        },
    ]

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(product);
    }, [])

    return (
        <div className="row">
            {
                products.map((pdItem, index) => (
                   
                       
                            <div key={index} className="col-md-3 d-flex justify-content-center mt-5">
                            <Card style={{ width: '18rem',backgroundColor:'#F2FAFB' }}>
                           
                            <Card.Body>
                            <Card.Img variant="top" src={pdItem.img} className="img-fluid"/>
                               <div className="card-info">
                               <Card.Title className="pd-title">{pdItem.title}</Card.Title>
                                <div className="d-flex ">
                                <Card.Title className="pd-title">${pdItem.price}</Card.Title>
                                <div className="start-icon">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                </div>
                                
                                </div>
                               </div>
                                
                            </Card.Body>
                        </Card>
                           
                        
                    </div>
                ))
            }
        </div>
    );
};

export default AllProduct;