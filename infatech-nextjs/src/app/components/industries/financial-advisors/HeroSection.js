import Image from "next/image";

const HeroSection = () => (
  <section className="bg-dark text-white py-5 px-3 px-md-5">
   

    {/* <div className="bg-white rounded shadow p-4 hover-shadow transition">
      <h3 className="h5 fw-bold text-dark">Financial Planning</h3>
      <p className="text-secondary mt-2">Helping you grow your wealth smartly.</p>
      <button className="mt-3 btn btn-warning text-dark fw-semibold px-3 py-2">
        Book Now
      </button>
    </div> */}

    <div className="container my-5">
      <div className="row align-items-center g-4">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold  text-light mb-3">
            Ravi Shah,<br />
            <span className="text-warning">Your Trusted Financial Advisor</span>
          </h1>
          <p className="lead text-light mb-3">
            Helping you plan, grow, and protect your wealth — with honest advice and proven solutions.
          </p>
          <p className="text-secondary mb-4">
            Hi, I’m Ravi Shah, an AMFI-registered Mutual Fund Distributor with 12 years of experience in guiding families and professionals toward their financial goals.
          </p>
          <button className="btn btn-warning text-dark fw-semibold px-4 py-3">
            Book a Free Consultations
          </button>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <div className="bg-white p-3 rounded shadow">
            <Image
              src="/assets/financial-advisors/hero.png"
              alt="Hero Illustration"
              width={400}
              height={400}
              className="img-fluid object-fit-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
