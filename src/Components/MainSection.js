import React, { useState, useEffect, useRef } from "react";
import "../Styles/MainSection.css";
// import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { PiMopedFront } from "react-icons/pi";
import { PiCar } from "react-icons/pi";
import {
  BiSolidRightArrow,
  BiSolidLeftArrow,
  BiSolidUpArrow,
  BiSolidDownArrow,
} from "react-icons/bi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const VehicleInfo = ({ title, value }) => {
  return (
    <div className="vehicle-info-content d-flex justify-content-between align-items-center">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
};

const MainSection = () => {
  const [bikeActive, setBikeActive] = useState(false);
  const [carActive, setCarActive] = useState(true);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);
  const scrollableWebRef = useRef(null);
  const scrollableMobRef = useRef(null);
  const [counterOn, setCounterOn] = useState(false);

  const button = [
    "Mahindra XUV400 EV",
    "Tata Tiago EV",
    "MG Comet EV",
    "Mahindra XUV400 EV",
    "Tata Tiago EV",
    "MG Comet EV",
    "Mahindra XUV400 EV",
    "Tata Tiago EV",
    "MG Comet EV",
  ];

  const vehicleOptions = {
    car: {
      0: {
        name: "Mahindra XUV400 EV",
        img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Comet-EV/9391/1682077644177/front-left-side-47.jpg",
        rent: 350,
        rating: 4.8,
        available: "today",
        range: 456,
        chargeTime: 50,
        seats: 5,
        ac: true,
        abs: true,
        body: "SUV",
        steer: "Electric",
      },
      1: {
        name: "Tata Tiago EV",
        img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago-EV/6279/1676111344905/front-left-side-47.jpg",
        rent: 300,
        rating: 4,
        available: "today",
        range: 420,
        chargeTime: 45,
        seats: 4,
        ac: true,
        abs: true,
        body: "SUV",
        steer: "Electric",
      },
      2: {
        name: "MG Comet EV",
        img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Comet-EV/9391/1682077644177/front-left-side-47.jpg",
        rent: 200,
        rating: 3.5,
        available: "today",
        range: 350,
        chargeTime: 6,
        seats: 4,
        ac: true,
        abs: true,
        body: "SUV",
        steer: "Electric",
      },
    },

    bike: {},
  };

  const setCarTextActive = () => {
    setCarActive(true);
    setBikeActive(false);
  };
  const setBikeTextActive = () => {
    setCarActive(false);
    setBikeActive(true);
  };

  const activateBtn = (index) => {
    setActiveBtn(index);
  };

  useEffect(() => {
    if (toggleSwitch === true) {
      setBikeActive(true);
      setCarActive(false);
    } else if (toggleSwitch === false) {
      setBikeActive(false);
      setCarActive(true);
    }
  }, [toggleSwitch]);

  const smoothVerticalScroll = (scrollAmount) => {
    const scrollableElement = scrollableWebRef.current;

    if (scrollableElement) {
      const currentScroll = scrollableElement.scrollTop;
      const targetScroll = currentScroll + scrollAmount;

      scrollableElement.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };
  const smoothHorizontalScroll = (scrollAmount) => {
    console.log(scrollAmount);
    const scrollableElement = scrollableMobRef.current;

    if (scrollableElement) {
      const currentScroll = scrollableElement.scrollLeft;
      const targetScroll = currentScroll + scrollAmount;

      scrollableElement.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container main-section">
      {/* <div className="d-flex justify-content-center align-items-center">
        <div className="input-section col-12 col-md-10">
          <HiOutlineLocationMarker />
          <input placeholder="Select Your Location..." type="text" />
        </div>
      </div> */}
      <div className="vehicle-option-toggle row">
        <div className="py-2 col-12 col-md-8 justify-content-center align-items-center vehicle-heading-web w-100">
          <h2>
            <span
              style={{ marginRight: "20px" }}
              className={`${carActive ? "text-active" : ""}`}
              onClick={setCarTextActive}
            >
              Rent a Car
            </span>

            <span
              style={{ marginLeft: "20px" }}
              className={`${bikeActive ? "text-active" : ""}`}
              onClick={setBikeTextActive}
            >
              Rent a Bike
            </span>
          </h2>
        </div>
        <div className="vehicle-heading-mob justify-content-center align-items-center">
          <h2 className="text-active">Rent a {carActive ? "Car" : "Bike"}</h2>
        </div>
        <div className="py-2 col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div className="toggle-section">
            <PiCar onClick={setCarTextActive} />
            <PiMopedFront onClick={setBikeTextActive} />

            <div
              // onClick={() => setToggleSwitch(prevState => !prevState)}
              className={`toggle-btn ${
                bikeActive ? "toggle-btn-bike" : "toggle-btn-car"
              }`}
            >
              {bikeActive ? <PiMopedFront /> : <PiCar />}
            </div>
          </div>
        </div>
      </div>
      <div className="row vehicle-option-buttons-mobile">
        {carActive ? (
          <div className="col-12 mobile-scroller">
            <button
              onClick={() => smoothHorizontalScroll(-100)}
              className="mob-prev-btn mob-scr-btn"
            >
              <BiSolidLeftArrow />
            </button>
            <div ref={scrollableMobRef} className="scroller-mob-btn-section">
              {button.map((item, index) => (
                <button
                  key={index}
                  className={`${activeBtn === index ? "btn-active" : ""}`}
                  onClick={() => activateBtn(index)}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => smoothHorizontalScroll(100)}
              className="mob-next-btn mob-scr-btn"
            >
              <BiSolidRightArrow />
            </button>
          </div>
        ) : null}
      </div>

      {/* <h3>
          Electric bikes are not available at the moment...
        </h3> */}

      <div className="vehicle-option-content row justify-content-center align-items-center">
        <div
          className={`vehicle-option-buttons col-12 my-3  ${
            carActive ? " col-lg-4" : "d-none"
          }`}
        >
          {carActive ? (
            <div className="web-scroller ">
              <button
                onClick={() => smoothVerticalScroll(-75)}
                className="web-prev-btn mob-scr-btn"
              >
                <BiSolidUpArrow />
              </button>
              <div ref={scrollableWebRef} className="scroller-web-btn-section">
                {button.map((item, index) => (
                  <button
                    key={index}
                    className={`${activeBtn === index ? "btn-active" : ""}`}
                    onClick={() => activateBtn(index)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={() => smoothVerticalScroll(75)}
                className="web-next-btn mob-scr-btn"
              >
                <BiSolidDownArrow />
              </button>
            </div>
          ) : null}
        </div>

        <div
          style={{ position: "relative" }}
          className={`vehicle-image my-3 d-flex justify-content-center align-items-center col-12 ${
            carActive ? " col-lg-4" : "col-lg-6"
          }`}
        >
          <div
            style={{
              backgroundImage: ` url(${
                carActive
                  ? "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago-EV/6279/1676111344905/front-left-side-47.jpg"
                  : "https://bd.gaadicdn.com/processedimages/ola-electric/s1-air/494X300/s1-air64d5dd80d0382.jpg?imwidth=400&impolicy=resize"
              })`,
            }}
            className={`vehicle-bg-image ${carActive ? "" : "mask-for-bike"} `}
          ></div>
          {carActive ? (
            ""
          ) : (
            <p className="mask-text">
              Electric bikes are not available at the moment but will be
              available shortly.
            </p>
          )}
        </div>
        <div className={`col-12 my-3 ${carActive ? " col-lg-4" : "d-none"}`}>
          {carActive ? (
            <>
              <div className="mb-2 vehicle-info-tag d-flex justify-content-around align-items-center">
                <div>
                  <h3>₹350/hr</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <AiFillStar />
                  <span>4.8</span>
                </div>
                <div>
                  <p>Available</p>
                </div>
              </div>

              <VehicleInfo title={"Range"} value={"456KM"} />
              <VehicleInfo title={"Charging Time"} value={"50 Minutes"} />
              <VehicleInfo title={"Seating Capacity"} value={"5 Seats"} />
              <VehicleInfo title={"Air Conditioner"} value={true} />
              <VehicleInfo title={"Anti-Lock Braking System"} value={true} />
              <VehicleInfo title={"Body Type"} value={"SUV"} />
              <VehicleInfo title={"Steering Type"} value={"Electric"} />
            </>
          ) : null}
        </div>
      </div>

      {carActive ? (
        <div className="vehicle-rent-section mt-5 row m-0">
          <h3 className="mb-4">Book a ride hassle free</h3>
          <form action="">
            <div className="row ">
              <div className="py-2 col-12 col-md-4 d-flex flex-column justify-content-center align-items-start">
                <label>Select Your Ride</label>
                <input className="w-100" type="text" />
              </div>
              <div className="py-2 col-12 col-md-4 d-flex flex-column justify-content-center align-items-start">
                <label>Pick Up</label>
                <input className="w-100" type="text" />
              </div>
              <div className="py-2 col-12 col-md-4 d-flex flex-column justify-content-center align-items-start">
                <label>Drop Of</label>
                <input className="w-100" type="text" />
              </div>
            </div>
            <div className="row ">
              <div className="py-2 col-12 col-md-4 d-flex flex-column justify-content-center align-items-start">
                <label>Pick Up</label>
                <input className="w-100" type="text" />
              </div>
              <div className="py-2 col-12 col-md-4 d-flex flex-column justify-content-center align-items-start">
                <label>Drop Of</label>
                <input className="w-100" type="text" />
              </div>
              <div className=" col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                <button
                  type="button"
                  className="mt-4 w-100 btn btn-lg btn-custom-neo btn-block"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}

      <div className="career-section-web">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="d-flex flex-wrap align-items-center justify-content-center m-0">
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
              <p className="text-center text-md-start">
                Trusted by
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "18px",
                    color: "#a7ce02",
                  }}
                  className="mx-2"
                >
                  {counterOn && (
                    <CountUp start={0} end={50000} duration={4} delay={0} />
                  )}
                  +
                </span>
                people across the globe
              </p>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <span className="d-flex career-bold-text">
                {counterOn && (
                  <CountUp start={0} end={50} duration={4} delay={0} />
                )}{" "}
                K+
              </span>
              <p> KMS Driven</p>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <span className="d-flex career-bold-text">
                {counterOn && (
                  <CountUp start={0} end={38} duration={4} delay={0} />
                )}
                +
              </span>
              <p> Cities & counting...</p>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <span className="d-flex career-bold-text">
                {counterOn && (
                  <CountUp start={0} end={92} duration={4} delay={0} />
                )}
                %
              </span>
              <p> Happy Customer</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default MainSection;
