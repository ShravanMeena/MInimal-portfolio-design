import React, { Component } from "react";
import Header from "./Header";
import LatestProject from "./LatestProject";
import AllProjects from "./AllProjects";
import Hire from "./Hire";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Test from "./Test";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />

        {/* <Test /> */}
        {/* <LatestProject /> */}
        <AllProjects />
        <Hire />
        <Footer />
      </div>
    );
  }
}
