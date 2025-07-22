import Image from "next/image";

const AboutSection = () => (
  <section id="about" className="bg-white py-5">
    <div className="container">
      <div className="row align-items-center g-4">
        <div className="col-md-6">
          <h2 className="h1 fw-bold text-dark mb-3 text-uppercase">
            About <span className="text-warning">Us</span>
          </h2>
          <p className="mb-4 text-muted">
            Hi, I’m <strong>Ravi Shah</strong>, an AMFI-registered Mutual Fund Distributor with <strong>10+ years</strong> of experience. I’m passionate about helping families and professionals make smart investment decisions and build a secure future.
          </p>
          <p className="mb-4 text-muted">
            My approach is personalized — I listen to your goals and create tailored strategies using mutual funds, tax-saving instruments, and long-term planning tools.
          </p>
          <p className="text-muted">
            Whether you’re planning for retirement, your child’s education, or setting up an emergency fund, I’ll be your trusted guide. When I’m not working with clients, I enjoy cricket and reading about financial strategies.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <Image
            src="/assets/financial-advisors/about-illustration.png"
            alt="About Illustration"
            width={600}
            height={600}
            className="img-fluid object-fit-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
