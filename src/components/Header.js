import React, { Component } from "react";
import "../css/Header.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div className='header'>
        <div className='headerTitle'>
          <Link
            to='hire'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}>
            <button>Hire us</button>
          </Link>
        </div>
        <div className='about'>
          <h1>
            <span style={{ color: "#f5a623", fontFamily: "Piedra" }}>Aam</span>
            <span style={{ fontFamily: "Bellota" }}>Ladke</span>
          </h1>
          <p>
            Sit at home and wait for the mango boys to bring mangoes to you
            wherever you are.
          </p>
        </div>
      </div>
    );
  }
}
