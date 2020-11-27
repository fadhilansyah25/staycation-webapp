import React from "react";
import { render } from "@testing-library/react";
import StarRate from "./StarRate";

test("should have props [value, width, height, spacing]", () => {
  const height = 36,
    width = 36,
    spacing = 4;
  const {container} = render(
    <StarRate
      height={height}
      width={width}
      spacing={spacing}
      value={3.6}
    ></StarRate>
  );
  const starYellow = "div.stars div.star:not(.placeholder)";

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${width}px`)
  );
  expect(container.querySelector(starYellow)).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${width}px`)
  );
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});
