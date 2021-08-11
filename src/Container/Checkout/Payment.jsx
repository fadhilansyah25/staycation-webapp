import React from "react";
import Fade from "react-reveal/Fade";
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
              <p className="mb-4" style={{ fontWeight: 500 }}>
                Transfer Pembayaran:
              </p>
              <p>
                Tax : <span style={{ fontWeight: 500 }}>{tax}%</span>
              </p>
              <p>
                Sub Total:{" "}
                <span style={{ fontWeight: 500 }}>${subTotal} USD</span>
              </p>
              <p>
                Total :{" "}
                <span style={{ fontWeight: 500 }}>${grandTotal} USD</span>
              </p>
              {itemDetails.bank.map((bank, index) => {
                return (
                  <div className="row mt-4" key={index}>
                    <div className="col-3 text-right">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${bank.imageUrl}`}
                        alt="bank central asia"
                      />
                    </div>
                    <div className="col">
                      <dl>
                        <dd style={{ fontWeight: 500 }}>{bank.namebank}</dd>
                        <dd>{bank.accountNumber}</dd>
                        <dd>{bank.name}</dd>
                      </dl>
                    </div>
                  </div>
                );
              })}
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
                Nama Bank Pengirim
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
              <label style={{ fontWeight: 500 }} htmlFor="bankHolder">
                Bank Tujuan Pengiriman
              </label>
              <div className="input-group mb-3 mt-1">
                <select
                style={{borderRadius: '4px', height: '45px', width: '100%', padding: '0.575rem 1rem'}}
                  className="custom-select"
                  id="bankId"
                  name="bankId"
                  value={data.bankId}
                  onChange={props.onChange}
                >
                  {itemDetails.bank.map((bank, index) => (
                    <option key={index} value={bank._id} selected={bank[index] === bank[0] ? true : false}>
                      {bank.namebank}
                    </option>
                  ))}
                </select>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
