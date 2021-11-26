import React, { useEffect, useState } from "react";
import AllService from "../servicess/AllService";
import HomeBanner from "./HomeBanner";
import Expert from "../servicess/singleService/Expert";
const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("fakebd.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <>
      <HomeBanner></HomeBanner>
      <AllService data={data.slice(0, 6)}></AllService>
      <Expert/>
    </>
  );
};

export default Home;
