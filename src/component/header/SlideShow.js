import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './SlideShow.css';

const SlideShow = () => {
    const product = [
        {
            "id":1,
            "img": "https://i.ibb.co/py7FcHr/e1.png",
            "title":"Garden Chair",
            "offer":"40% off",
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
        {
            "id":2,
            "img": "https://i.ibb.co/Tg1GXp3/ec2-Copy.png",
            "title":"Offic Chair",
            "offer":"20% off",
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
        {
            "id":3,
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png",
            "title":"Dining Table Set",
            "offer":"60% off",
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
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
        <div style={{backgroundColor:'#DDF5FE',padding:'40px 0px 40px 0px'}}>
            <div className="container">

                <Carousel fade activeIndex={index} onSelect={handleSelect} interval={4000}>
                    {
                        item.map((item) => (
                            <Carousel.Item key={item.id}>
                                <div className="row align-items-center " style={{margin:'0px 60px 0px 60px'}}>

                                    <div className="col-md-6 col-sm-12"style={{paddingRight:'90px'}} >
                                        <h1 style={{color:'#5E5D5D',textTransform:'uppercase'}}>{item.title}</h1>
                                        <p style={{color:'#747577'}}>{item.subTitle}</p>
                                        <div className="d-flex align-items-center">
                                       
                                        <button type="button" class="btn btn-success me-5">Shop Now</button>
                                        <h1 style={{color:'red',textTransform:'uppercase'}}>{item.offer}</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img
                                            className=" img-fluid"
                                            src={item.img}
                                            alt="First slide"
                                        />
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

export default SlideShow;