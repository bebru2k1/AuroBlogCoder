import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import HomePost from "../../features/Post/components/HomePost/HomePost";

function Home() {
  return (
    <section className="home">
      <Banner />
      <HomePost />
    </section>
  );
}

export default Home;
