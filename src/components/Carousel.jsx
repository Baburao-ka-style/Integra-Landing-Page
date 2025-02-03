import React, { useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

function Carousel({ slides }) {

    let[current, setCurrent] = useState(0)

    let previousSlide = ()=>{
        if(current === 0) setCurrent(slides.length - 1)
        else setCurrent(current - 1)
    }
    let nextSlide = ()=>{
        if(current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }

  return (
    <div className="overflow-hidden max-h-60 relative rounded-2xl" >
      <div className={`flex transition ease-out duration-300 `}
      style={{
        transform: `translateX(-${current * 100}%)`
      }} 
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex p-3 text-black text-4xl">
        <button onClick={previousSlide}>
        <FaCircleArrowLeft/>
        </button>
        <button onClick={nextSlide}>
        <FaCircleArrowRight/>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
