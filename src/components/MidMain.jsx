import React from "react";
import Carousel from "./Carousel";

function MidMain() {

    let slides =[
        'https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww',
        'https://media.istockphoto.com/id/478627080/photo/evening-view-of-ama-dablam.jpg?s=612x612&w=0&k=20&c=GLKvtQt1JVoOB4yR2WI86_fYOmG8WObeZP_QV_gFG_0=',
        'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
        'https://t3.ftcdn.net/jpg/01/80/83/76/360_F_180837604_UyJZNTHPluIJNQJjmTkCpE4XLJ03Zott.jpg'
    ]
  return (
    <div className="flex justify-center items-center text-white w-full p-2 h-70 ">
      <div className="w-full flex-col justify-center items-center text-white h-full p-5">
        <div className="flex justify-center items-center w-full h-50 border-b-2 ">
          <h1 className="text-6xl font-bold font-sans">
            UNLIMITED PRETENTIOUS <span></span> IDEAS
          </h1>
        </div>
        <div className="flex w-full">
          <div className=" flex justify-start font-sans text-xl items-center w-full">
            <h3>OUR SOLUTIONS </h3>
          </div>
          <div className="flex justify-center font-sans text-xl items-center w-full">
            <h3>WE PROVIDE THE FULL FUNNEL APPROACH</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-white p-5">
        <div className=" w-full max-h-60 m-auto">
            <Carousel slides={slides} />
        </div>
      </div>
    </div>
  );
}

export default MidMain;
