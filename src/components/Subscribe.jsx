import React from "react";

import { useState } from "react";

function Subscribe() {

  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false)

  return (
    <main>
      <div id="subscribe" className="page-section">
        <div id="Subscribe_Section" className="px-6 mx-auto lg:px-20 mx-auto my-30">
          <div className="text-center pb-12">
            <h5 className="text-transform: uppercase text-amber-400 font-medium -tracking-4">
              our subscribe
            </h5>
            <h1 className="text-transform: capitalize text-5xl font-bold pb-7">
              subscribe to our newsletter
            </h1>
            <p className="text-gray-600">
              We recommend you to subscribe our newspaper, drop your email{" "}
              <span className="sm:flex flex-col">
                below to get daily update about us.
              </span>
            </p>
          </div>
          <form action=""
            onSubmit={(e) => {
              e.preventDefault();
              setShowPopup(true)
            }}
          >
            <div className="text-center flex items-center justify-center gap-x-4 rounded-xl bg-white p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 w-fit mx-auto">
              <input
                className="outline-none"
                type="email"
                placeholder="Enter your email address"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="text-transform: capitalize bg-amber-400 text-white px-5 py-2 rounded-xl cursor-pointer">
                subscribe
              </button>

              {showPopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/50">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <h2 className="text-xl font-bol mb-2">
                      🎉 Thanks for Subscribing!
                    </h2>
                    <p className="text-gray-600">
                      {email}
                    </p>
                    <button
                      onClick={() => setShowPopup(false)}
                      className="mt-4 bg-amber-400 text-white px-4 py-2 rounded cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Subscribe;
