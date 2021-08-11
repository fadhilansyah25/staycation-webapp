import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPage } from "../store/actions/page";

import Header from "Container/Header/Header";
import Hero from "Container/Hero/Hero";
import MostPicked from "Container/MostPicked/MostPicked";
import Categories from "Container/Categories/Categories";
import Testimonials from "Container/Testimonials/Testimonials";
import Footer from "Container/Footer/Footer";
import Fade from "react-reveal/Fade";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage) 
      this.props.fetchPage(
        `/landing-page`,
        "landingPage"
      );
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) {
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col">
              <div
                className="spinner-border"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
              </div>
              <p className="mt-5">Loading ...</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <Header {...this.props} />
        <Fade bottom distance="50px">
          <Hero data={page.landingPage} refMostPicked={this.refMostPicked} />
        </Fade>
        <Fade>
          <MostPicked
            refMostPicked={this.refMostPicked}
            data={page.landingPage}
          />
        </Fade>
        <Categories data={page.landingPage.categories} />
        <Fade bottom distance="50px">
          <Testimonials data={page.landingPage.testimonial} />
        </Fade>
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
