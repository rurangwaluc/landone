import React from 'react';
import "./Featured.scss";
import shoe1 from "../../assets/shoe-4.png";
import shoe2 from "../../assets/shoe-5.png";
import shoe3 from "../../assets/shoe-6.png";

const Featured = ({ myTheme })  => {
  return (
    <div className="featured" data-theme={myTheme}>
         <div className="container">
        <h2 className="section-title">Featured products</h2>
        <div className="split">
          <a href="#" className="featured__item">
            <img src={shoe1} alt="" className="featured__img" />
            <p className="featured__details"><span className="price">$99</span>shoe name</p>
          </a>
          <a href="#" className="featured__item">
            <img src={shoe2} alt="" className="featured__img" />
            <p className="featured__details"><span className="price">$99</span>shoe name</p>
          </a>
          <a href="#" className="featured__item">
            <img src={shoe3} alt="" className="featured__img" />
            <p className="featured__details"><span className="price">$99</span>shoe name</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Featured