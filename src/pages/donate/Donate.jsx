import React, { useEffect, useState } from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import snackImage from "../../assets/snack.png";
import milktea from "../../assets/milktea.png";
import coffee from "../../assets/coffee.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Donate = () => {
  const donates = [
    {
      title: "Coffee",
      img: coffee,
      amount: 50000,
    },
    {
      title: "Snack",
      img: snackImage,
      amount: 10000,
    },
    {
      title: "Milktea",
      img: milktea,
      amount: 25000,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState([0, 0, 0]);
  const showModalFun = (amount) => {
    setShowModal(true);
  };

  const BANK_ID = 970418;
  const ACC = 2153900335;
  const ACC_NAME = "DINH NHO HOANG";
  const [QR, setQR] = useState("");
  const [error, showError] = useState(0);
  const donate = (amount, index) => {
    showModalFun(amount);
    if (values[index] === 0) {
      showError(1);
    } else {
      showError(0);
      let property = amount * values[index];
      const DES = `Em chuyen tien mua ${values[index]} ${donates[index].title} cho anh Hoang`;
      let Qr = `https://img.vietqr.io/image/${BANK_ID}-${ACC}-compact2.png?amount=${property}&addInfo=${DES}&accountName=${ACC_NAME}`;
      setQR(Qr);
    }
  };
  const hideModalFun = () => {
    setShowModal(false);
  };

  const add = (index) => {
    const newValues = [...values];
    newValues[index]++;
    setValues(newValues);
  };

  const substract = (index) => {
    const newValues = [...values];
    if (newValues[index] > 0) {
      newValues[index]--;
    }
    setValues(newValues);
  };

  const handleInputChange = (index, event) => {
    const newValues = [...values];
    const inputValue = event.target.value;
    if (inputValue === "") {
      newValues[index] = 0;
    } else {
      newValues[index] = Math.max(0, parseInt(inputValue, 10));
    }
    setValues(newValues);
  };

  return (
    <div className="donate">
      <ContentWrapper>
        <div className={`modal ${showModal ? "active" : ""}`}>
          <div className={`box ${error?"showError":""}`}>
            <div className="closeBtn" onClick={() => hideModalFun()}>
              {" "}
              Close
            </div>
            <div className={`qrSection ${error? "": "active"}`}>
              <div className="qrcode">
                <img src={QR} />
              </div>
            </div>
            <div className={`error ${error?"active": ""}`}>You have to input a value greater than 0</div>
          </div>
        </div>
        <div className="donateSection">
          {donates?.map((item, index) => {
            return (
              <div className="donateItem" key={index}>
                <div className="donateImage">
                  <Img src={item.img} />
                </div>
                <div className="textSection">
                  <div className="donateTitle">{item.title}</div>
                  <div className="amount">{item.amount}</div>
                  <div className="quantity">
                    <FaMinus
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        substract(index);
                      }}
                    />
                    <input
                      type="text"
                      value={values[index]}
                      onChange={(e) => {
                        e.preventDefault();
                        handleInputChange(index, e);
                      }}
                    />
                    <FaPlus
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        add(index);
                      }}
                    />
                  </div>
                  <div
                    className="donateBtn"
                    id={index}
                    onClick={() => donate(item.amount, index)}
                  >
                    Donate
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Donate;
