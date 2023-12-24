import React from "react";

export default function Automationcard() {
  return (
    <>
      <div className="container">
        <h1 className="text-center sm:text-4xl text-2xl m-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          KredX AP Automation <br /> Capabilities
        </h1>

        <div className="flex flex-wrap justify-center mb-8 py-6">
          <div className="max-w-72 text-center m-1 mb-4 p-1">
            <img src="/images/digitization.png" className="mx-auto" />
            <h4 className="text-dark--blue my-4 py-5 font-medium text-lg">
              Invoice Digitization
            </h4>
            <p>
              Automate all formats of invoices received across any channel into
              a centralized repository in a single format to reduce error &
              increase team efficiency
            </p>
          </div>
          <div className="max-w-72 text-center m-1 mb-4 p-1">
            <img src="/images/processing.png" className="mx-auto" />
            <h4 className="text-dark--blue my-4 py-5 font-medium text-lg">
              Invoice Processing
            </h4>
            <p>
              Automate invoice capturing, invoice exchange with vendors &
              approval workflows. Centralized vendor portal for tracking all
              PO's
            </p>
          </div>
          <div className="max-w-72 text-center m-1 mb-4 p-1">
            <img src="/images/centralized.png" className="mx-auto" />
            <h4 className="text-dark--blue my-4 py-5 font-medium text-lg">
              Centralized access and collaboration
            </h4>
            <p>
              Collaboration, interaction and documentation is centered at each
              invoice level making approval workflows efficient, seamless and
              audit ready
            </p>
          </div>
          <div className="max-w-72 text-center m-1 mb-4 p-1">
            <img src="/images/customizable.png" className="mx-auto" />
            <h4 className="text-dark--blue my-4 py-5 font-medium text-lg">
              Advanced & Quick customizable workflows
            </h4>
            <p>
              Advanced AI that adapts to AP processes unique to your
              organization within the shortest amount of time
            </p>
          </div>
          <div className="max-w-72 text-center m-1 mb-4 p-1">
            <img src="/images/matching.png" className="mx-auto" />
            <h4 className="text-dark--blue my-4 py-5 font-medium text-lg">
              Invoice Matching
            </h4>
            <p>
              Effortless 2 and 3 way matching with easy to understand 'reason'
              coding for users increasing efficiency & protect against fraud and
              duplication
            </p>
          </div>
          <div className="max-w-72 text-center m-1 mb-4 p-1">
            <img src="/images/vendor.png" className="mx-auto" />
            <h4 className="text-dark--blue my-4 py-5 font-medium text-lg">
              Integrated Vendor Management
            </h4>
            <p>
              Manage vendor onboarding, documentation and payment from one place
            </p>
          </div>
          <div className="max-w-72 text-center m-1 mb-4 p-1">
            <img src="/images/supply-chain.png" className="mx-auto" />
            <h4 className="text-dark--blue my-4 py-5 font-medium text-lg">
              Strengthen treasury & your supply chain
            </h4>
            <p>
              Increase treasury income through early payments via dynamic
              discounting. Earn more from each spend via KredX's AP card program
            </p>
          </div>
          <div className="max-w-72 text-center m-1 mb-4 p-1">
            <img src="/images/audit-ready.png" className="mx-auto" />
            <h4 className="text-dark--blue my-4 py-5 font-medium text-lg">
              Audit ready
            </h4>
            <p>
              One-click access to all conversations and notes at each invoice
              level. Data available on cloud archived after 7 years for full
              audit trail wherever required.
            </p>
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <button className="bg-blue text-white font-bold py-3 px-12 rounded text-base">
            Request Demo
          </button>
        </div>
      </div>
    </>
  );
}
