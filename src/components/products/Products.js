import React from 'react';
import "./Products.scss";
import shoe1 from "../../assets/shoe-1.png";
import shoe2 from "../../assets/shoe-2.png";
import shoe3 from "../../assets/shoe-3.png";

const Products = ({ myTheme })  => {
  return (
    <section className="products" data-theme={myTheme}>
      <div className="product">
        <div className="product-details">
            <div className="product-img">
              <img src={shoe1} alt="" className="product-image" />
            </div>

            <div className="product-info">
              <h1 >A really nice shoe</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
                    perspiciatis facilis beatae laudantium quidem enim sit sequi!</p>
             <button> <a href="" className="--btn --btn-danger">Buy now</a></button>
            </div>
        </div>
      </div>
      <div className="product">
        <div className="product-details">
            <div className="product-img product-img2">
              <img src={shoe3} alt="" className="product-image" />
            </div>

            <div className="product-info">
              <h1 >A really nice shoe</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
                    perspiciatis facilis beatae laudantium quidem enim sit sequi!</p>
               <button> <a href="" className="--btn --btn-danger">Buy now</a></button>
            </div>
        </div>
      </div>
    </section>   
  )
}

export default Products