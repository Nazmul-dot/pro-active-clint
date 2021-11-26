import React from "react";
import banner from "../../image/banner3.png";
const HomeBanner = () => {
  return (
    <>
      <div className="w-100" style={{ height: "75vh" }}>
        <img className="w-100" style={{ height: "100%" }} src={banner} alt="" />
      </div>
    </>
  );
};

export default HomeBanner;
