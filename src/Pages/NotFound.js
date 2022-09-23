import React from "react";
import img from "../../src/assets/404.jpg";

const NotFound = () => {
  return (
    <div className="h-[100vh]">
      <div className=" w-9/12 lg:w-10/12 mx-auto flex items-center justify-center h-full">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
