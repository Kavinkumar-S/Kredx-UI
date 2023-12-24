import React from "react";

export default function Cmscard() {
  return (
    <>
      <div className="container">
        <h1 className="text-center sm:text-4xl text-2xl m-6 pb-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          The KredX CMS Advantage
        </h1>

        <div className="kred-advantage-container flex flex-wrap sm:p-10 p-5 ">
          <div className="kred-advantage-container-left sm:w-6/12 max-w-full">
            <div className="mb-4 pr-11 font-medium text-white p-5 rounded-l  bg-gradient-to-r from-twilight-blue to-lagoon-blue">
              <div className="flex items-center justify-between w-11/12	">
                <p>
                  Increase bottom line by reducing costs and <br /> increasing
                  efficiency
                </p>
                <img src="/images/white-right-arrow.png" />
              </div>
            </div>
            <div className="mb-4 mr-7 shadow-lg font-medium p-5 rounded">
              <div className="flex items-center justify-between w-11/12	">
                <p>
                  A tool for CFOs to analyze the cash flow <br /> and simulate
                  what-if scenarios
                </p>
                <img src="/images/right-arrow.png" />
              </div>
            </div>
            <div className="mb-4 mr-7 shadow-lg font-medium p-5 rounded">
              <div className="flex items-center justify-between w-11/12	">
                <p>
                  Use integrated financing to fulfill cash flow <br /> gaps just
                  in time
                </p>
                <img src="/images/right-arrow.png" />
              </div>
            </div>
          </div>
          <div className="kred-advantage-container-right sm:w-6/12 max-w-full bg-light-teal sm:p-6 p-2 text-white rounded-r rounded-b">
            <div className="sm:w-9/12 mx-auto">
              <div className="flex items-start my-3 py-2">
                <img src="/images/white-arrow.png" className="cms-arrow" />
                <p>
                  Automations to increase the <br /> efficiency in both AP and
                  AR sides.
                </p>
              </div>
              <div className="flex items-start mb-5 py-2">
                <img src="/images/white-arrow.png" className="cms-arrow" />
                <p>
                  On time follow-ups with customers <br /> enables quicker
                  realization of revenues
                </p>
              </div>
              <div className="flex items-start mb-5 py-2">
                <img src="/images/white-arrow.png" className="cms-arrow" />
                <p>
                  Tools like dynamic discounting to <br /> increase bottom line
                </p>
              </div>
              <div className="flex items-start mb-5 py-2">
                <img src="/images/white-arrow.png" className="cms-arrow" />
                <p>
                  Reduced human effort can be utilized to <br /> focus on
                  increasing revenues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
