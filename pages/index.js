import Image from "next/image";
import { Inter } from "next/font/google";
import Automationcard from "/components/Automationcard";
import Cmscard from "/components/Cmscard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="bg-gradient-to-r from-dark-blue via-summer-sky to-pagoda-blue h-3"></header>
      <section className="main-frame-wrapper">
        <div className="container">
          <div className=" logo-container">
            <Image src="/images/logo-cms.png" className="logo-image" />
          </div>

          <div className="flex flex-wrap sm:justify-between justify-center image-content-container">
            <div
            // className="  sm:w-2/5"
            >
              <h1 className="text-white automate-wrapper text-2xl sm:text-6xl font-medium mb-4 sm:my-11 sm:pt-12">
                Automate Your <br /> Finance Function
              </h1>
              <h4 className="text-white rework-wrapper text-base sm:text-3xl font-medium sm:my-12 sm:pt-1">
                WITHOUT Reworking Your ERP
              </h4>
              <button className="bg-blue text-white font-bold py-1 sm:py-2 px-6 rounded my-5">
                Learn more
              </button>
            </div>
            <div
            // className="sm:w-2/5 sm:mr-auto mx-auto"
            >
              <Image src="/images/Frame.png" className="robot-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="kred-App-container m-6">
        <div className="container">
          <div className="flex flex-wrap sm:p-8 w-full justify-evenly items-center sm:w-8/12 mx-auto ">
            <div className="">
              <Image src="/images/left-angle.png" className="angle-image" />
            </div>
            <p className="text-base text-center">
              Only KredX's AP Solution lets you automate and streamline your
              entire <br /> PO-to-Pay process without messing up your existing
              processes. That's <br />
              because we support all native functionality for 40+ ERPs
            </p>
            <div className="">
              <Image src="/images/right-angle.png" className="angle-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="kred-automation-container">
        <Automationcard />
      </section>

      <section className="kred-cms-container mb-5">
        <Cmscard />
      </section>

      <footer className="bg-pearl-black py-5 px-10">
        <div className="container">
          <div className="flex justify-evenly flex-wrap">
            <div className="sm:w-3/12 max-w-full">
              <Image src="/images/footer-logo.png" />
            </div>

            <div className="flex justify-end sm:w-9/12 max-w-full flex-wrap sm:mt-0 mt-2">
              <Image src="/images/instagram.png" />
              <Image src="/images/linkedin.png" className="ml-4" />
              <Image src="/images/facebook.png" className="ml-4" />
              <Image src="/images/twitter.png" className="ml-4" />
              <Image src="/images/youtube.png" className="ml-4" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
