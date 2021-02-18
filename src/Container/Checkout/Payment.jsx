import React from "react";
import Fade from "react-reveal/Fade";
import logoBCA from "../../Assets/Images/Logo/logo-bca.png";
import logoMandiri from "../../Assets/Images/Logo/logo-mandiri.png";
import InputFile from "Component/Form/InputFile/InputFile";
import InputText from "Component/Form/InputText/InputText";

export default function Payment(props) {
  const { data, itemDetails, checkout } = props;
  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div
        className="container"
        style={{ marginBottom: 30, fontFamily: "Roboto" }}
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4" style={{fontWeight: 500}}>Transfer Pembayaran:</p>
              <p>Tax      : <span style={{fontWeight: 500}}>{tax}%</span></p>
              <p>Sub Total: <span style={{fontWeight: 500}}>${subTotal} USD</span></p>
              <p>Total    : <span style={{fontWeight: 500}}>${grandTotal} USD</span></p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBCA} alt="bank central asia" />
                </div>
                <div className="col">
                  <dl>
                    <dd style={{fontWeight: 500}}>Bank Central Asia</dd>
                    <dd>2505 1997</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="bank mandiri" />
                </div>
                <div className="col">
                  <dl>
                    <dd style={{fontWeight: 500}}>Bank Mandiri</dd>
                    <dd>2505 1997</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label style={{ fontWeight: 500 }} htmlFor="proofPayment">
                Upload Bukti Transfer
              </label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label style={{ fontWeight: 500 }} htmlFor="bankName">
                Bank Name
              </label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />
              <label style={{ fontWeight: 500 }} htmlFor="bankHolder">
                Nama Pengirim
              </label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
