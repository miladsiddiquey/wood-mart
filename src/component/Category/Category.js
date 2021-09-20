import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {
    return (
        <div className="container-fluid ">
             <h2 className="text-center mt-5 " style={{color:'#5E5D5D'}}>Shop By Category</h2>
            <div className="
             row
             row-cols-xs-2
             row-cols-sm-2
             row-cols-md-6
             row-cols-lg-6 
            category 
            align-items-center
            ">
               
                <div className="  mt-3  cg-item text-center ">
                    <div className="card_color1">
                     <Link to="/sofa" className="text-decoration-none link-secondary">
                         <img className="img-fluid category_img" src="https://i.ibb.co/jgBdbvg/sofa.png" alt="" />
                        <h5>Sofa</h5>
                    </Link>
                    </div>
                </div>
                <div className=" mt-3  cg-item text-center ">

                    <div className="card_color2">
                    <Link to="/bed" className="text-decoration-none link-secondary">
                        <img className="img-fluid category_img" src="https://i.ibb.co/SfczTLS/bed.png" alt="" />
                        <h5>Bed</h5>
                    </Link>
                    </div>

                </div>
                <div className=" mt-3  cg-item text-center">
                    <div className="card_color1">
                    <Link to="/chair" className="text-decoration-none link-secondary">
                        <img className="img-fluid category_img" src="https://i.ibb.co/py7FcHr/e1.png" alt="" />
                        <h5>Chair</h5>
                    </Link>
                    </div>
                </div>
                <div className=" mt-3  cg-item text-center">
                    <div className="card_color2">
                    <Link to="/officeDesk" className="text-decoration-none link-secondary">
                        <img className="img-fluid category_img" src="https://i.ibb.co/L5QZ60r/office-desk.png" alt="" />
                        <h5>Office Desk</h5>
                    </Link>
                    </div>
                </div>
                <div className=" mt-3  cg-item text-center">
                    <div className="card_color1">
                    <Link to="/bedroomItem" className="text-decoration-none link-secondary">
                        <img className="img-fluid category_img" src="https://i.ibb.co/KNddRZY/bedromm-item.png" alt="" />
                        <h5>Bedroom Item</h5>
                    </Link>
                    </div>
                </div>
                <div className=" mt-3  cg-item  text-center">
                    <div className="card_color2">
                    <Link to="/lampItem" className="text-decoration-none link-secondary">
                        <img className="img-fluid category_img" src="https://i.ibb.co/KrBVDp5/lemp-item.png" alt="" />
                        <h5>Lamp Item</h5>
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;