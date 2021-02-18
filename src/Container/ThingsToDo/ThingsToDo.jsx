import React from "react";
import Fade from "react-reveal/Fade";

import TagInfo from "../../Component/TagInfo/TagInfo";
import Button from "../../Component/Button/Button";

export default function ThingsToDo({ data }) {
  return (
    <section className="container activities">
      <div className="things-to-do">
        <h4>Things To Do</h4>
        <div className="container-grid">
          {data.map((item, index1) => {
            return item.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              <div
                key={`things-to-do-item-${index1}`}
                className="item column-3 row-1"
              >
                <Fade bottom delay={200 * index1} distance="50px">
                  <div className="card">
                    {item.popular && (
                      <div className="tag">
                        <TagInfo price="Popular" desc="Choice"></TagInfo>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: "180px" }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="streched-link d-block text-gray-800"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span className="text-gray-800">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
