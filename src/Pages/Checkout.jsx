import React, { Component } from "react";
import Header from "Container/Header/Header";
import Fade from "react-reveal/Fade";
import Button from "../Component/Button/Button";

import Controller from "../Component/Stepper/Controller/Controller";
import MainContent from "../Component/Stepper/MainContent/MainContent";
import Meta from "../Component/Stepper/Meta/Meta";
import Numbering from "../Component/Stepper/Numbering/Numbering";
import Stepper from "Component/Stepper/Stepper";

import BookingInformation from "../Container/Checkout/BookingInformation";
import Payment from "../Container/Checkout/Payment";
import Completed from "../Container/Checkout/Completed";

import ItemDetails from "../Json/itemDetails.json";

export default class Checkout extends Component {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
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

  componentDidMount(){
    document.title = "Staycation | Checkout";
    window.scrollTo(0, 0);
  }

  render() {
    const { data } = this.state;

    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            itemDetails={ItemDetails}
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
            itemDetails={ItemDetails}
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
        <Header isCentered/>
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
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
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
                          onClick={nextStep}
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
