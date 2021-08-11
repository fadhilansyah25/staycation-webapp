import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h2>About the place</h2>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 40 }}>
        {data.featureId.map((feature, index) => {
          return (
            <div
              key={`${feature._id}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                width="38"
                className="d-block mb-2"
                src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                alt={feature.name}
              />{" "}
              <span>{feature.quantity}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
