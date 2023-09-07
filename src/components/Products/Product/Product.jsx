import "./Product.scss";
import React from "react";
import { useNavigate } from "react-router-dom"; // Make sure to import useNavigate from react-router-dom

const Product = ({ id, data }) => {
    // console.log( data.img.data.attributes.url);
    const navigate = useNavigate(); // Using the useNavigate hook

    const handleProductClick = () => {
        navigate("/product/" + id);
    };

    return (
        <div
            className="product-card"
            onClick={handleProductClick}
        >
            <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_DEV_URL +
                        data.img.data.attributes.url
                    }
                    alt=""
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
