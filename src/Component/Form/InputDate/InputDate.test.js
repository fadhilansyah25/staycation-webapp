import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import { screen } from "@testing-library/dom";
import InputDate from "./InputDate";

class TestInputDate extends React.Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <InputDate
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setUp = () => {
  const { container } = render(<TestInputDate />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);

  return { container, wrapper, input };
};

test("should have wrapper with className .form-control", () => {
  const { wrapper } = setUp();

  expect(wrapper).toBeInTheDocument();
});

test("should have tag <input> has className .form-control", () => {
  const { input } = setUp();

  expect(input).toBeInTheDocument();
});

test("should show date picker when click input  field", () => {
  const { container, input } = setUp();

  //   screen.debug();
  fireEvent.click(input, { button: 1 });
  const dataPickerWrapper = container.querySelector(`.date-range-wrapper`);
  // screen.debug();

  expect(dataPickerWrapper).toBeInTheDocument();
});
