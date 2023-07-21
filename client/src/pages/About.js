import React from "react";
import Layout from "./../components/Layout/Layout";
import AboutusImg from "./../images/sweethome.jpg"
const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={AboutusImg}
            alt="aboutus"
            style={{ width: "65%"}}
          />
        </div>
        <div className="col-md-4">
          <div className="text-justify mt-2">
          <h1 className="bg-dark p-2 text-white text-center">About Us</h1>
          <p>We curate inspiration for the home, connecting the creative work
of artisans and designers to people and places around the world.

Our lifestyle brands offer inspired living through high-quality products, exclusive designs, and timeless style - all powered by digital design and visualization tools that provide seamless shopping solutions in-store and online.

With a distinct architectural aesthetic, experiential store environment, and online community, we engage with our customers through social media, mobile shopping, design services, gift registry, and more.
</p> </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
