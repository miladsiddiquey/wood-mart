import React from 'react';
import './Category.css';

const Category = () => {
    return (
        <div className="container-fluid ">
            <div className="row category align-items-center">
                <h2 className="text-center mb-5" style={{color:'#5E5D5D'}}>Shop By Category</h2>
                <div className="col-md-2  cg-item text-center ">
                    <div className="card_color1">
                        <img className="img-fluid category_img" src="https://i.ibb.co/jgBdbvg/sofa.png" alt="" />
                        <h5>Sofa</h5>
                    </div>
                </div>
                <div className="col-md-2 cg-item text-center ">

                    <div className="card_color2">
                        <img className="img-fluid category_img" src="https://i.ibb.co/SfczTLS/bed.png" alt="" />
                        <h5>Bed</h5>
                    </div>

                </div>
                <div className="col-md-2 cg-item text-center">
                    <div className="card_color1">
                        <img className="img-fluid category_img" src="https://i.ibb.co/py7FcHr/e1.png" alt="" />
                        <h5>Chair</h5>
                    </div>
                </div>
                <div className="col-md-2 cg-item text-center">
                    <div className="card_color2">
                        <img className="img-fluid category_img" src="https://i.ibb.co/L5QZ60r/office-desk.png" alt="" />
                        <h5>Office Desk</h5>
                    </div>
                </div>
                <div className="col-md-2 cg-item text-center">
                    <div className="card_color1">
                        <img className="img-fluid category_img" src="https://i.ibb.co/KNddRZY/bedromm-item.png" alt="" />
                        <h5>Bedroom Item</h5>
                    </div>
                </div>
                <div className="col-md-2 cg-item  text-center">
                    <div className="card_color2">
                        <img className="img-fluid category_img" src="https://i.ibb.co/KrBVDp5/lemp-item.png" alt="" />
                        <h5>Lamp Item</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;