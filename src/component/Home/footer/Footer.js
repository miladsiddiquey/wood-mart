import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container py-5">
                <div className="row row-cols-lg-3 row-cols-md-3  row-cols-sm-3 align-items-baseline " style={{padding:'20px 0px 20px 0px'}}>
                    <div className=" logo-section d-flex col-6 mb-3  mt-3 justify-content-around">
                       <div>
                       <img src="https://i.ibb.co/Wnc3XKR/download-removebg-preview.png" alt="" className="img-fluid" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ut voluptatem molestiae blanditiis iure odio, repudiandae necessitatibus quidem cumque officiis!</p>
                       </div>
                    </div>
                    <div className=" d-flex col-6 mb-3 mt-3 feature justify-content-around">
                        
                        <div>
                        <h3 className="mb-5">Feature</h3>
                            <div className="footer-menu">
                            <h6>Sofa</h6>
                            <h6>Chair</h6>
                            <h6>Office Desk</h6>
                            <h6>Bedromm Item</h6>
                            <h6>Lamp Item</h6>
                            </div>
                        </div>
                    </div>
                    {/* <div className=" contact d-flex col-6 mb-3 mt-3   justify-content-around">
                       
                        <div >
                        <h3 className="mb-5">Contact Us</h3>
                           <div>
                           <h6>Address: Sylhet-Bangladesh</h6>
                            <h6>Phone: 01799748096</h6>
                            <h6>Email: miladsiddiquey@gmail.com</h6>
                           </div>
                            <h3 className="mt-5">Follow Us</h3>
                            <div className="d-flex social-icon">
                            <FontAwesomeIcon icon={faFacebook} className="single-icon facebook"  />
                            <FontAwesomeIcon icon={faTwitter} className="single-icon twitter"  />
                            <FontAwesomeIcon icon={faInstagram} className="single-icon instagram" />
                            </div>
                        </div>
                    </div> */}
                    <div className=" aboutUs d-flex col-6 mb-3 mt-3 justify-content-around">
                       
                        <div>
                        <h3 className="mb-5">My Account</h3>
                           <div className="footer-menu">
                           <h6>Order & Returns</h6>
                            <h6>Email Preferences</h6>
                            <h6>Account Setting</h6>
                           </div>
                            <h3 className="mt-5">Follow Us</h3>
                            <div className="d-flex social-icon">
                            <FontAwesomeIcon icon={faFacebook} className="single-icon facebook"  />
                            <FontAwesomeIcon icon={faTwitter} className="single-icon twitter"  />
                            <FontAwesomeIcon icon={faInstagram} className="single-icon instagram" />

                            </div> 
                        </div>
                    </div> 
                    <p  style={{color:"gray"}}>&copy; Develop by Milad Siddiquey</p>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;