import React from "react";
import Layout from "./../components/Layout/Layout";
import PolicyImg from "./../images/return.webp"

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={PolicyImg}
            alt="return"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">Return Policy</h1>
          <p>Our policy lasts 14 days. If 14 days have gone by since your purchase, unfortunately we can’t offer you a merchandise credit or exchange.</p>
          <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
          <p>Any item not in its original condition, is damaged or missing parts for reasons not due to our error will not be returned</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
