import React from "react";
import Layout from "@/components/layout/Layout";
import HomeBanner from "@/components/layout/banner/HomeBanner";

const Home = () => {
  return (
    <Layout video={true}>
      <HomeBanner />
      {/* <Agency />
      <PortfolioText />
      <HomeOffer />
      <HomeTestimonial />
      <HomeBlog />
      <HomeSponsor />
      <NextPage /> */}
    </Layout>
  );
};

export default Home;
