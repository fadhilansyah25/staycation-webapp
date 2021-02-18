import React from "react";
import Fade from "react-reveal/Fade";
import CompIllustration from "../../Assets/Images/completed.svg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row justify-content-center text-center">
          <div>
            <img src={CompIllustration} alt="completed checkout illustration" />
            <p
              className="mt-5"
              style={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "120%",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              We will inform you via email latter once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
