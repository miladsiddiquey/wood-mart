import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './AllProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Product from '../../../AllData/AllProductData.json';

const AllProduct = () => {
     
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(Product);
    }, [])

    return (
        <div className="
         row
         row-cols-sm-2
         row-cols-md-3
         row-cols-lg-4
         ">
            {
                products.map((pdItem, index) => (


                    <div key={index} className=" d-flex col-6 justify-content-center mt-5">
                        <Card style={{ width: '18rem', backgroundColor: '#F2FAFB' }} className="card_main">

                          <Link to={`/singleProduct/${pdItem.id}`}className="link">
                                <Card.Body>
                                <Card.Img variant="top" src={pdItem.img} className="img-fluid" 
                                style={{width:'auto',height:'220px'}}
                                />

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
                                <div className="like">
                                <FontAwesomeIcon icon={faHeart} className="heart" />
                                </div>
                            </Card.Body>
                            </Link>
                        </Card>


                    </div>
                ))
            }
        </div>
    );
};

export default AllProduct;