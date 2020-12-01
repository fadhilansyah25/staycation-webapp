import Breadcrumb from "Component/Breadcrumb/Breadcrumb";
// import InputDate from "Component/Form/InputDate/InputDate";
// import InputNumber from "Component/Form/InputNumber/InputNumber";
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
    breadcrumbList: [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="container">
          <Breadcrumb data={this.state.breadcrumbList}></Breadcrumb>
        </div>
      </>
    );
  }
}
