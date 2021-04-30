import React, { Component } from "react";
import "../css/LatestProject.css";
import Home1 from "../assets/home1.jpg";
import Home2 from "../assets/home2.png";
import Home3 from "../assets/home3.jpg";
import "../css/AllProjects.css";

export default class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      DATA: [
        {
          id: "1",
          image: Home1,
          link: "#",
          title: "Portfolio website",
        },
        {
          id: "2",
          image: Home2,
          link: "#",
          title: "Landig page",
        },
        {
          id: "3",
          image: Home3,
          link: "#",
          title: "single page website",
        },
        {
          id: "4",
          image: Home2,
          link: "#",
          title: "Portfolio website",
        },
        {
          id: "33",
          image: Home1,
          link: "#",
          title: "news agencey website",
        },
        {
          id: "33",
          image: Home3,
          link: "#",
          title: "ecommerce website",
        },
      ],
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div className='allProjects'>
        <div className='allProjectsHeader'>
          <div>
            <h1>Projects</h1>
          </div>
          {/**for future update */}
          <div style={{ display: "none" }}>
            <h1>View More</h1>
          </div>
        </div>
        <div className='allProjectsCard'>
          {this.state.DATA.map((item) => {
            return (
              <div className='card'>
                <div
                  onMouseEnter={this.handleMouseHover}
                  onMouseLeave={this.handleMouseHover}>
                  <img src={item.image} alt='' width='100%' height='100%' />
                  <div className='hoverBtn'>
                    <a href='#'>
                      <button>View More</button>
                    </a>
                  </div>
                </div>

                <h1>{item.title}</h1>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    );
  }
}
