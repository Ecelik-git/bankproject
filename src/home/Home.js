import React from 'react'
import "./Home.css"
import Banner from "../banner/Banner";
import About from "../about/About";
import Product from "../product/Product";
import silver from "../images/card/silver.jpg";
import gold from "../images/card/gold.jpg";
import platinum from "../images/card/platinum.jpg";
import Price from "../price/Price";
import Footer from "../footer/Footer";

const home = () => {
    return (
        <div className="home">
        <Banner />
        <About />
        <div id="product" className="home__row">
        <Product
        benefit="Basic package with interactive features. Enjoy up to 20% discount at select restaurants.You don’t have to pay any additional fee."
        type="Silver Card"
        price={300}
        image={silver}
        />
        <Product 
            benefit="Bank of States has partnered with leading travel providers to bring offers on airline tickets, hotel stays, car hire and more."
            type="Gold Card"
            price={500}
            image={gold}
        />
        <Product 
            benefit="Get up to 5 supplementary cards for your family members. You don’t have to pay any additional fee and can choose the spending limit on each card."
            type="Platinum Card"
            price={1000}
            image={platinum}
        />
        
        </div>
        <Price />
        </div>
        
    )
}

export default home;

