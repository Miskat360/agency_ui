import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home/HomeTwoModal";

const AboutUs = () => {
  return (
    <Layout video={0}>
      <CmnBanner title="About Us" navigation="About Us" />
      <HomeTwoModal />
      {/* <Agency /> */}
      {/* <TeamMembers /> */}
      {/* <HomeTestimonial /> */}
      {/* <AboutSponsor /> */}
      {/* <AboutCta /> */}
    </Layout>
  );
};

export default AboutUs;
