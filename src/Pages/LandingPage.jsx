import React, { Component } from "react";

import Header from "Container/Header/Header";
import Hero from "Container/Hero/Hero";
import MostPicked from "Container/MostPicked/MostPicked";
import Categories from "Container/Categories/Categories";
import Testimonials from "Container/Testimonials/Testimonials";
import Footer from "Container/Footer/Footer";
import Fade from "react-reveal/Fade";

import landingPage from "Json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Fade bottom distance="50px">
          <Hero data={landingPage} refMostPicked={this.refMostPicked} />
        </Fade>
        <Fade>
          <MostPicked refMostPicked={this.refMostPicked} data={landingPage} />
        </Fade>
        <Categories data={landingPage.categories} />
        <Fade bottom distance="50px">
          <Testimonials data={landingPage.testimonial} />
        </Fade>
        <Footer></Footer>
      </>
    );
  }
}
