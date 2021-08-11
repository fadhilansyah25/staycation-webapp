import React, { Component } from "react";
import Header from "Container/Header/Header";
import Fade from "react-reveal/Fade";
import Button from "../Component/Button/Button";

import { connect } from "react-redux";
import Controller from "../Component/Stepper/Controller/Controller";
import MainContent from "../Component/Stepper/MainContent/MainContent";
import Meta from "../Component/Stepper/Meta/Meta";
import Numbering from "../Component/Stepper/Numbering/Numbering";
import Stepper from "Component/Stepper/Stepper";

import BookingInformation from "../Container/Checkout/BookingInformation";
import Payment from "../Container/Checkout/Payment";
import Completed from "../Container/Checkout/Completed";
import { submitBooking } from "store/actions/checkout";

class Checkout extends Component {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
      bankId: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    document.title = "Staycation | Checkout";
    window.scrollTo(0, 0);
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;
    const payload = new FormData();

    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingDateStart", checkout.date.startDate);
    payload.append("bookingDateEnd", checkout.date.endDate);
    payload.append("firstName", data.firstname);
    payload.append("lastName", data.lastname);
    payload.append("emailAddress", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", "Mandiri");
    payload.append("image", data.proofPayment[0]);
    payload.append("bankId", data.bankId);

    this.props
      .submitBooking(payload)
      .then((res) => {
        nextStep();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    console.log(data, page[checkout._id], checkout);

    if (!checkout) {
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-3">
              Pilih Kamar dulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isLight
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            itemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instruction bellow",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            itemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Thanks for your transaction",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginTop: 50, marginBottom: 50 }}
              />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstname !== "" &&
                    data.lastname !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn btn-outline-primary mb-5"
                    isBlock
                    isLight
                    type="link"
                    href={`/properties/${page[checkout._id]._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Continue to book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn btn-outline-primary mb-5"
                    type="link"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn mb-5"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back To Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps, { submitBooking })(Checkout);
