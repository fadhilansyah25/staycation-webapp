import React from "react";
import Fade from "react-reveal/Fade";

export default function Meta({ data, current }) {
  return (
    <Fade delay={300}>
      <div className="text-center" style={{ marginBottom: 30 }}>
        <h1 style={{ fontFamily: "Poppins", fontSize: 36, fontWeight: 600 }}>
          {data[current] && data[current].title}
        </h1>
        <p style={{fontFamily: "Roboto", fontSize: 18, color:  'rgba(21, 44, 91, 0.7)'}}>
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
}
