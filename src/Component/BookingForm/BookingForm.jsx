import React, { Component } from "react";
import propTypes from "prop-types";
import InputNumber from "Component/Form/InputNumber/InputNumber";
import InputDate from "Component/Form/InputDate/InputDate";
import Button from "Component/Button/Button";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date().setDate(new Date().getDate() + 1),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate() - 1;
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }

    if (prevState.data.duration === 0) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          duration: 1,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <div className="card shadow" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            Per {itemDetails.unit}
          </span>
        </h5>

        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          suffix={" night"}
          onChange={this.updateData}
          name="duration"
          value={data.duration}
          isSuffixPlural
        />

        <label htmlFor="date">Pick a date</label>
        <InputDate
          onChange={this.updateData}
          name="date"
          value={data.date}
        />
        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will Pay{" "}
          <span className="text-gray-900">
            ${itemDetails.price * data.duration} USD
          </span>{" "}
          Per{" "}
          <span className="text-gray-900">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>
        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={startBooking}
          type="link" href="/checkout"
        >
          Continue To Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBookings: propTypes.func,
};
