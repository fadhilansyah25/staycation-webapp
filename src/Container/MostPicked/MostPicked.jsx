import React from "react";
// import './MostPicked.scss';
import TagInfo from "Component/TagInfo/TagInfo";
// import MetaDesc from 'Component/MetaDesc/MetaDesc';
import Button from "Component/Button/Button";
import { dollarCurrency } from "utils/FormatingNumber";
import Fade from "react-reveal/Fade";

function MostPicked(props) {
  return (
    <section className="container mostpicked" ref={props.refMostPicked}>
      <Fade delay={300}><h4>Most Picked</h4></Fade>
      <div className="container-grid">
        {/* {props.data.mostPicked.map((item, index) => {
                    return (
                        <div className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}>
                            <div className="card">
                                <TagInfo price={dolarCurrency(item.price)} desc={`per ${item.unit}`} />
                                <img src={item.imageUrl} alt={item.name} className="img-fluid" />
                                <Button type="link" className="streched-link d-block" href={`/properties/${item._id}`}>
                                    <MetaDesc name={item.name} city={item.city} country={item.country}></MetaDesc>
                                </Button>
                            </div>
                        </div>
                    )
                })} */}

        {props.data.mostPicked.map((item, index) => {
          return (
            <Fade bottom delay={200 * index} distance="50px" key={`mostPicked-${index}`}>
              <div
                className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
              >
                <div className="card card-featured">
                  <div className="tag">
                    <TagInfo
                      price={dollarCurrency(item.price)}
                      desc={`Per ${item.unit}`}
                    ></TagInfo>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="streched-link d-block text-white"
                      href={`/properties/${item._id}`}
                    >
                      <h5>{item.name}</h5>
                    </Button>
                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}

export default MostPicked;
