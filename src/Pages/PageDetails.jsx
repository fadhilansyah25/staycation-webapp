import InputNumber from "Component/Form/InputNumber/InputNumber";
import Header from "Container/Header/Header";
import React, { Component } from "react";

export default class PageDetails extends Component {
  state = {
    value: "1",
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
            style={{ height: "100vh" }}
          >
            <div className="col-auto">
              <InputNumber
                max={30}
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
                suffix=" night"
                isSuffixPlural={true}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
