import React, { useRef } from 'react';
import './TrandingItem.css';
import Carousel from 'react-elastic-carousel';
import { useEffect } from 'react';
import { useState } from 'react';


const TrandingItem = () => {
    const product = [
        {
            "id": 1,
            "img": "https://i.ibb.co/92YPX1P/1553606759994.png",
            "price": "8,456",
            "title": "Sofa",
            "offer": "40% off",
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/kgT0gMG/30647455.png",
            "price": "8,456",
            "title": "Stylish Mirror",
            "offer": "20% off",
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/w6VrfsK/istockphoto-1137999886-612x612.png",
            "price": "8,456",
            "title": "Lamp Light",
            "offer": "60% off",
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
        {
            "id": 4,
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png",
            "price": "8,456",
            "title": "Dining Table Set",
            "offer": "60% off",
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
        {
            "id": 5,
            "img": "https://i.ibb.co/PMG64hQ/ca4-1.png",
            "price": 567,
            "title": "Dining Table Set",
            "offer": "60% off",
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing"
        },
    ]

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 }
    ];

    //carousel infinite loop
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the last item, go to first item
            carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the first item, go to last item
            carouselRef.current.goTo(product.length);
        }
    };



    return (
        <div className="container">
            <div className="controls-wrapper trending-Slide">
                <h2 className="text-center mb-5" style={{ color: '#5E5D5D' }}>Trending Items</h2>
                <Carousel

                    breakPoints={breakPoints}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}                   
                    disableArrowsOnEnd={false}
                >

                    {
                        product.map((item) => (
                            <div key={item.id} className="text-center trend">
                                <img className="img-fluid" src={item.img} alt="" />
                                <div className="tr_details">
                                    <h4> {item.title}</h4>
                                    <h4>$ {item.price}</h4>
                                </div>
                                <a href="!#" className="btn btn-success">Add to Cart</a>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default TrandingItem;