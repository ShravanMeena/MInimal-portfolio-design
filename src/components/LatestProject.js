import React, { Component } from "react";
import "../css/LatestProject.css";
import Home1 from "../assets/home2.png";
import Home2 from "../assets/home1.jpg";
import Home3 from "../assets/home3.jpg";
import Next from "../assets/next.svg";
import Back from "../assets/back.svg";
export default class LatestProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          id: "1",
          image: Home1,
          link: "#",
        },
        {
          id: "2",
          image: Home2,
          link: "#",
        },
        {
          id: "3",
          image: Home3,
          link: "#",
        },
        {
          id: "4",
          image: Home3,
          link: "#",
        },
        {
          id: "33",
          image: Home3,
          link: "#",
        },
      ],
    };
  }
  render() {
    return (
      <div className='latestProjects'>
        <h1>Our offerings</h1>
        <div className='latestProjectsSwiper'>
          <div className='carousel'>
            <span className='left'>
              <img src={Back} alt='' width='100%' />
            </span>
            <span className='right'>
              <img src={Next} alt='' width='100%' />
            </span>
            {this.state.DATA.map((item) => {
              return (
                <div className='item'>
                  <a href={item.link}>
                    <img src={item.image} alt='' width='100%' height='100%' />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
