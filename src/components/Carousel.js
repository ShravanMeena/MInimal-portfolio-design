import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import Home1 from "../assets/1.png";
import Home2 from "../assets/2.png";
import "../css/Carousel.css";
import { Link, animateScroll as scroll } from "react-scroll";

const slideImages = [Home1, Home2];

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

class Slideshow extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div className='slide-container'>
        <Slide {...properties}>
          <div className='each-slide'>
            <div
              className='slideHeader'
              style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <h1>Front-end</h1> <br />
              <h4>ReactJS,React Native, bootstrap, jQuery, JS</h4>
              <Link
                to='hire'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}>
                <button>Ask for deal</button>
              </Link>
            </div>
          </div>
          <div className='each-slide'>
            <div
              className='slideHeader'
              style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <h1>Back-end</h1> <br />
              <h4>Python, Flask, Django, MySQL, PSQL </h4>
              <Link
                to='hire'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}>
                <button>Ask for deal</button>
              </Link>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default Slideshow;
