import React from "react";
import Fade from "react-reveal/Fade";
import InputText from "../../Component/Form/InputText/InputText";

export default function BookingInformation(props) {
  const { data, itemDetails, checkout } = props;

  return (
    <div
      className="container"
      style={{ marginBottom: 30, fontFamily: "Roboto" }}
    >
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
          <Fade delay={300}>
            <div className="card">
              <figure className="img-wrapper" style={{ height: 270 }}>
                <img
                  src={itemDetails.imageUrls[0].url}
                  alt={itemDetails.name}
                  className="img-cover"
                />
              </figure>
              <div className="row align-items-center">
                <div className="col" style={{fontWeight: 500}}>
                  <div className="meta-wrapper">
                    <h5>{itemDetails.name}</h5>
                    <span className="text-gray-500">
                      {itemDetails.city}, {itemDetails.country}
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  <span style={{fontWeight: 700}}>
                    ${+checkout.duration * itemDetails.price} USD
                    <span className="text-gray-500" style={{fontWeight: 400}}> Per </span>
                    {checkout.duration} {itemDetails.unit}
                    {+checkout.duration > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <Fade delay={600}>
            <label style={{ fontWeight: 500 }} htmlFor="firstname">
              First Name
            </label>
            <InputText
              id="firstname"
              name="firstname"
              value={data.firstname}
              onChange={props.onChange}
            />
            <label style={{ fontWeight: 500 }} htmlFor="lastname">
              Last Name
            </label>
            <InputText
              id="lastname"
              name="lastname"
              value={data.lastname}
              onChange={props.onChange}
            />
            <label style={{ fontWeight: 500 }} htmlFor="email">
              Email Address
            </label>
            <InputText
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={props.onChange}
            />
            <label style={{ fontWeight: 500 }} htmlFor="phone">
              Phone Number
            </label>
            <InputText
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              onChange={props.onChange}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
