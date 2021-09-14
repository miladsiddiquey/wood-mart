import { Tab } from 'bootstrap';
import React from 'react';
import { Tabs } from 'react-bootstrap';
import './FarGallery.css';
import AllProduct from '../../pages/allProduct/AllProduct';
import BestSelling from '../../pages/bestSelling/BestSelling';
import NewProduct from '../../pages/newProduct/NewProduct';

const FarGallery = () => {
    return (
        <div className="container far_gallery ">
            <h2 className="text-center mb-5" style={{color:'#5E5D5D'}}>Our Furniture Gallery</h2>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="All" >
                   <AllProduct/>
                </Tab>
                <Tab eventKey="profile" title="Best Selling">
                    <BestSelling/>
                </Tab>
                <Tab eventKey="contact" title="New" >
                    <NewProduct/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default FarGallery;