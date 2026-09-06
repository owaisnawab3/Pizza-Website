import React from "react";
import Devlivery_Scooter from "../images/Delivery_Scooter.png";
import Best_Quality from "../images/quality.png";
import Easy_To_Order from "../images/order.png";

function About_us() {
  return (
    <main>
      {/* About_Section */}
      <div id="about" className="page-section">
      <div id="" className="px-6 mx-auto lg:px-20 mx-auto py-14">
        <div className="text-center pb-12">
          <h5 className="text-transform: uppercase text-amber-400 font-medium -tracking-4">
            our services
          </h5>
          <h1 className="text-transform: capitalize text-5xl font-bold">
            how does it work?
          </h1>
        </div>
        <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto">
          <div className="text-center">
            <img
              src={Easy_To_Order}
              className="h-22 w-22 mx-auto h-auto"
              alt=""
            />
            <h2 className="text-3xl font-bold text-transform: capitalize py-3">
              easy to order
            </h2>
            <p className="text-gray-600">
              You only need a few steps in ordering food.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Devlivery_Scooter}
              className="h-30 w-30 mx-auto h-auto"
              alt=""
            />
            <h2 className="text-3xl font-bold text-transform: capitalize py-3">
              fast delivery
            </h2>
            <p className="text-gray-600">
              Delivery that is always ontime even faster.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Best_Quality}
              className="h-22 w-22 mx-auto h-auto"
              alt=""
            />
            <h2 className="text-3xl font-bold text-transform: capitalize py-3">
              best quality
            </h2>
            <p className="text-gray-600">
              Not only fast for us in quality is also number one.
            </p>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default About_us;
