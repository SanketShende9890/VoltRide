import React,{useState} from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Hero = () => {
  const [counterOn, setCounterOn] = useState(false);

  const goToMain = () =>{
    const mainSecttion = document.querySelector(".main-section");
    if (mainSecttion) {
      const yOffset = -60;
      const y =
        mainSecttion.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  return (
    <section className="hero-section">
      <div className="vignette"></div>
      <div style={{height:'100%'}} className="container">
        <div style={{height:'100%', paddingBottom: '70px'}} className="d-flex flex-column justify-content-center align-items-center">
          <div>

          <h1>
            Electrify Your
            <br />
            <span style={{ color: "#a7ce02" }}> Journey</span>
          </h1>
          </div>
          <div className="career-section-mob mt-auto">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="d-flex flex-wrap align-items-center justify-content-center m-0">
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
              <p className="text-center text-md-start">
                Trusted by
                <span style={{fontWeight: '700', fontSize: '18px', color: '#a7ce02'}} className="mx-2">

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
                )} K+
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
        <div className="mt-auto cta-btn-mob">
          <button onClick={goToMain} className=" btn-glow">start</button>
        </div>
        </div>
      </div>
      <div className="offer-strip d-flex justify-content-center align-items-center p-2">
        <p>
          It’s raining! use
          <span> MONSOON23 </span>
          code to get
          <span> 25% </span>
          on every ride
        </p>
      </div>
    </section>
  );
};

export default Hero;
