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

import itemDetails from "Json/itemDetails.json";

import { checkoutBooking } from "store/actions/checkout";

class PageDetails extends Component {
  componentDidMount() {
    document.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "PageDetails", pageHref: "pagedetails" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          data={itemDetails}
          breadcrumb={breadcrumb}
        ></PageDetailTitle>
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5 justify-conten text-justify">
              <PageDetailDescription data={itemDetails}></PageDetailDescription>
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={itemDetails}
                startBooking={this.props.checkoutBooking}
              ></BookingForm>
            </div>
          </div>
        </section>
        <ThingsToDo data={itemDetails.activities}></ThingsToDo>
        <Fade bottom distance="50px">
          <Testimonials data={itemDetails.testimonial}></Testimonials>
        </Fade>
        <Footer></Footer>
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(PageDetails);
