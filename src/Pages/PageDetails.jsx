import InputDate from "Component/Form/InputDate/InputDate";
import InputNumber from "Component/Form/InputNumber/InputNumber";
import Header from "Container/Header/Header";
import React, { Component } from "react";

export default class PageDetails extends Component {
  state = {
    numberValue: "1",
    dateValue: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="container">
          <div
            className="row align-items-center justify-content-center"
            style={{ height: "50vh" }}
          >
            <div className="col-auto">
              <InputNumber
                max={30}
                onChange={this.handleChange}
                name="numberValue"
                value={this.state.numberValue}
                suffix=" night"
                isSuffixPlural={true}
              />
            </div>
          </div>
          <div
            className="row align-items-center justify-content-center"
            style={{ height: "50vh" }}
          >
            <div className="col-auto">
              <InputDate
                max={30}
                onChange={this.handleChange}
                name="dateValue"
                value={this.state.dateValue}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
