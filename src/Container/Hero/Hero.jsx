import React from "react";
import "./Hero.scss";
import { numberFormat } from "utils/FormatingNumber";

import IconCities from "Assets/Images/Icons/icon-cities.svg";
import IconPlace from "Assets/Images/Icons/icon-place.svg";
import IconTraveler from "Assets/Images/Icons/icon-traveler.svg";
import ImageHero from "Assets/Images/img-hero.svg";
import ImageHeroFrame from "Assets/Images/img-hero-frame.svg";
import Button from "Component/Button/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container ">
      <div className="row align-center">
        <div className="col-6 left-col">
          <h1 className="font-weight-bold line-height-1">
            Forget The Busy Work, <br />
            Start Your Next Vacation
          </h1>
          <p>
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments. Your money can return, but your time
            not. What are you thinking?
          </p>
          <Button
            className="btn"
            isPrimary={true}
            hasShadow={true}
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row mt-5">
            <div className="col-auto thumb-info">
              <img src={IconTraveler} alt="" />
              <h6 className="mt-3">
                {numberFormat(props.data.hero.traveller)}{" "}
                <span className="text-gray-500 font-weight">Traveler</span>
              </h6>
            </div>
            <div className="col-auto thumb-info">
              <img src={IconCities} alt="" />
              <h6 className="mt-3">
                {numberFormat(props.data.hero.treasure)}{" "}
                <span className="text-gray-500 font-weight">Treasures</span>
              </h6>
            </div>
            <div className="col-auto thumb-info">
              <img src={IconPlace} alt="" />
              <h6 className="mt-3">
                {numberFormat(props.data.hero.city)}{" "}
                <span className="text-gray-500 font-weight">Cities/Hotel</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 right-col d-flex align-items-end">
          <div className="image-hero">
            <img src={ImageHero} alt="" />
          </div>
          <div className="img-frame">
            <img src={ImageHeroFrame} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
