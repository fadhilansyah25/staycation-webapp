import React from "react";
import Fade from "react-reveal/Fade";
import CompIllustration from "../../Assets/Images/Completed.svg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img src={CompIllustration} alt="completed checkout illustration" />
            <p className="text-gray-500">
              We will inform you via email latter once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
