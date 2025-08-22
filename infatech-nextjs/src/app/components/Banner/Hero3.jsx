"use client";
import Slider from "react-slick";
import data from "../../Data/hero.json";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

const Hero3 = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    
    <div className="hero-active owl-carousel">
      <Slider {...settings}>
        {data.map((item, i) => (
          <div
            key={i}
            className="hero-area style-three d-flex align-items-center py-10 lg:py-20"
          >
            <div className="container">
              <div className="row hero align-items-center">
                {/* Text Column */}
                <div className="col-lg-5 col-md-7">
                  <div className="hero-contant space-y-6">
                    <h6 className="text-sm font-semibold uppercase tracking-widest">
                      {item.subTitle}
                    </h6>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                      {parse(item.title)}
                    </h1>
                    <p className="text-muted text-base leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="solutek-btn">
                      <a
                        href={`https://wa.me/7021710954?text=${encodeURIComponent(
                          "Hi, I’m interested in getting a quote for a website/app development project. Please guide me through the next steps."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn2"
                      >
                        Start Building with Infatech
                      </a>
                    </div>

                    {/* <div className="hero-left-shape absolute left-0 bottom-0 z-[-1] opacity-40">
                      <Image
                        src="/assets/images/home-3/hero-geo.png"
                        alt="Decorative Shape"
                        width={680}
                        height={680}
                      />
                    </div> */}
                  </div>
                </div>

                {/* Image Column */}
                <div className="col-lg-7 col-md-5">
                  <div className="hero-thumb-3 flex justify-center items-center">
                    <div className="hero-img hero_image_3">
                      <Image
                        src={item.image}
                        alt="Hero Image"
                        width={600}
                        height={450}
                        className="w-full max-w-[500px] h-auto object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero3;
