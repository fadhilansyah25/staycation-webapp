import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "Container/Header/Header";
import PageDetailTitle from "Component/PageDetailTitle/PageDetailTitle";
import FeaturedImage from "Component/FeaturedImage/FeaturedImage";
import PageDetailDescription from "Component/PageDetailDescription/PageDetailDescription";
import BookingForm from "Component/BookingForm/BookingForm";
import Testimonials from "Container/Testimonials/Testimonials";
import ThingsToDo from "Container/ThingsToDo/ThingsToDo";
import Footer from "Container/Footer/Footer";
import Fade from "react-reveal/Fade";

// import itemDetails from "Json/itemDetails.json";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class PageDetails extends Component {
  componentDidMount() {
    document.title = "Staycation | Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/details-page/${this.props.match.params.id}`,
        `${this.props.match.params.id}`
      );
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "PageDetails", pageHref: "pagedetails" },
    ];
    const { page, match } = this.props;

    if (!page[match.params.id]) {
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
              ></div>
              <p className="mt-5">Loading ...</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          data={page[match.params.id]}
          breadcrumb={breadcrumb}
        ></PageDetailTitle>
        <FeaturedImage data={page[match.params.id]}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5 justify-conten text-justify">
              <PageDetailDescription
                data={page[match.params.id]}
              ></PageDetailDescription>
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={this.props.checkoutBooking}
              ></BookingForm>
            </div>
          </div>
        </section>
        <ThingsToDo data={page[match.params.id].activityId}></ThingsToDo>
        <Fade bottom distance="50px">
          <Testimonials data={page[match.params.id].testimonial}></Testimonials>
        </Fade>
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  PageDetails
);
