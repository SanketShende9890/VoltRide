import React from "react";

const Hero = () => {
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
        <div className="mt-auto">
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
