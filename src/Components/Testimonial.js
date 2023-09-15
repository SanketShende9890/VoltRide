import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  return (
    <section style={{marginBottom: '100px'}} className='container testimonial-section'>
      <div>
        <h3 className='heading mb-4'>Our happy customers</h3>
      </div>


      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img alt='client' src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Lawyer</h4>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit 
              in, velit doloremque corrupti.
            </p>
          </div>
        </div>

        <div>
          <img alt='client' src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>

              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit 
              in, velit doloremque corrupti.
            </p>
          </div>
        </div>

        <div>
          <img alt='client' src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Business Analyst</h4>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit 
              in, velit doloremque corrupti.
            </p>
          </div>
        </div>
      </Carousel>



    </section>
  )
}

export default Testimonial