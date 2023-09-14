import React from "react";
import Lottie from "lottie-react";
import animation1 from "../../../src/SvgFile/car.json";
import animation2 from "../../../src/SvgFile/arrow2.json";
import './OtherSection.css'

const OtherSection = () => {
  return (
    <div>
      <h1 
       style={{
        backgroundColor: "#8b8f97",
      }}
      className="text-3xl text-center text-black p-5 font-bold italic">Choose the Car....</h1>
      <div
      className="flex mx-auto justify-center"
      style={{
        height: "700px",
        backgroundColor: "#8b8f97",
      }}
    >
      
      <div className="mt-20">
        <Lottie
          className="rounded border anima mt-16 ml-10"
          loop={true}
          animationData={animation1}
        ></Lottie>
       
      </div>
      <div>
      <Lottie
          className="mt-52"
          loop={true}
          animationData={animation2}
        ></Lottie>
      </div>
      <div className=" relative mt-20">
        <div className="height mr-32 carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full">
            <img src="https://i.ibb.co/qjDXJTJ/2017-Bugatti-Chiron-coupe-yellow-and-black-press-image-1001x565p-1.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://i.ibb.co/m85GxyT/1672157635-04-BUGATTI-CHIRON-Profilee.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://i.ibb.co/y08tCJw/Bugatti-Chiron-Car-Price-1024x683.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://i.ibb.co/n7RnQ6R/24abed489576d340bfa02888eaa1def6.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://i.ibb.co/SQ224LR/bugatti-chiron-profile-photo-credit-rm-sothebys-100873861-m.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://i.ibb.co/yNp7534/03-CHIRON-34-front-WEB.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://i.ibb.co/mCb596j/bugatti-chiron-super-sport-300-first-batch.jpg" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OtherSection;

