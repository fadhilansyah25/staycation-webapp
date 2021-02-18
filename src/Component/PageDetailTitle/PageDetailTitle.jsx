import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "Component/Breadcrumb/Breadcrumb";

export default function PageDetails({ data, breadcrumb }) {
  return (
    <div className="container spacing-sm" style={{marginTop: '50px'}}>
      <Fade>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb}></Breadcrumb>
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{data.name}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </div>
  );
}
