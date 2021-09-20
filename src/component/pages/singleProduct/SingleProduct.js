import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SingleProduct.css";
import Product from "../../../AllData/AllProductData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import EnlargedImageContainerDimensions from "react-image-magnify";
import Footer from "../../Home/footer/Footer";

const SingleProduct = () => {

  const { Id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    setProductDetail(Product.find((pd) => pd.id == Id));
  }, [Id]);
  const { title, img, price } = productDetail;

  const [count, setCount] = useState()
  const handleAddProduct = () =>{
    console.log('product added')
  }

  return (
    <>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          {/* img magnify */}
          <EnlargedImageContainerDimensions
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src:img,
               
              },
              largeImage: {
                src: img,
                width: 1200,
                height: 1800,
                         
              },
            }}
          />
        </div>
        <div className="col-md-6">
          <h2>{title}</h2>
          <div className="d-flex">
            <div style={{ color: "#F7742F" }}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="rating_line">1,254 ratings | 134 answered question</p>
          </div>
          <p>
            Brand: &nbsp; <span className="rating_line">No brand</span>
          </p>
          <hr style={{ color: "gray",maxWidth:'350px' }} />
          <h2>$ {price}</h2>
         <div>
         <h6 className="mt-4">Quantity:</h6>
         <div className="d-flex ">
           <h2 className="minus">-</h2>
           <h2 className="count">1</h2>
           <h2 className="plus">+</h2>
         </div>
         </div>
          <div className="d-flex mt-4 ">
            <button className="buy-btn">Buy Now</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SingleProduct;
