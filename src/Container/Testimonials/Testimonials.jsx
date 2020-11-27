import React from "react";
import StarRate from "Component/StarRate/StarRate";
import imageFrame from "Assets/Images/img-testi-frame.svg";
import "./Testimonials.scss";
import Button from 'Component/Button/Button'

export default function Testimonials({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: "70px" }}>
          <div className="testimonial-hero">
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="img-testimonial"
            />
            <img
              src={imageFrame}
              alt="Testimonial-frame"
              className="img-testimonial-frame"
            />
          </div>
        </div>
        <div className="col-6 testimonial-desc" style={{ padding: 0 }}>
          <h1>{data.name}</h1>
          <div style={{ marginBottom: `50px` }}>
            <StarRate
              value={data.rate}
              width={36}
              height={36}
              spacing={4}
            ></StarRate>
          </div>
          <h2>{data.content}</h2>
          <p>
            {data.familyName}, {data.familyOccupation}
          </p>
          <Button
            className="btn"
          >
            Read a Story
          </Button>
        </div>
      </div>
    </section>
  );
}
