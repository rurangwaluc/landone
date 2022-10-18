import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/banner.png";

const Hero = ({ myTheme }) => {
  return (
    <section className="hero" data-theme={myTheme}>
      <div className="banner">
        <div className="content">
        <span>upto 50% off</span>
        <h3>nike airmax shoes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            perferendis eveniet animi in, voluptas cumque iste eius recusandae
            illo incidunt?
          </p>
          <div className="--flex-start">
            <button className="--btn btn-p">Learn More</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className=" image">
          <img src={heroImg} alt="phone" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
