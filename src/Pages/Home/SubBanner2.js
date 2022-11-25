import React from "react";
import "./Home.css";
import banner1 from "../../assets/subbanner1.jpg";
import banner2 from "../../assets/subbanner2.jpg";

const SubBanner2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-1 mb-20">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full h-full relative">
        
            <img className="w-full h-full" src={banner1} alt="" />
         <div className="absolute inset-0 duration-500 hover:bg-black/40 cursor-pointer">
         </div>
        </div>
        <div className="w-full relative">
          <img className="w-full" src={banner2} alt="" />
          <div className="absolute inset-0 duration-500 hover:bg-black/40 cursor-pointer">
         </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner2;
