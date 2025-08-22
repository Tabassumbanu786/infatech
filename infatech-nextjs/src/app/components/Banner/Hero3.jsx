"use client";

import dynamic from "next/dynamic";
import data from "../../Data/hero.json";
import Link from "next/link";
import Image from "next/image";

// Dynamically load react-slick (reduce bundle size)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

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
    <div className="hero-active">
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
                    {item.subTitle && (
                      <h6 className="text-sm font-semibold uppercase tracking-widest">
                        {item.subTitle}
                      </h6>
                    )}

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-dark">
                      {item.title}
                    </h1>

                    {item.desc && (
                      <p className="text-muted text-base leading-relaxed">
                        {item.desc}
                      </p>
                    )}

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
                  </div>
                </div>

                {/* Image Column */}
                <div className="col-lg-7 col-md-5">
                  <div className="hero-thumb-3 flex justify-center items-center">
                    <div className="hero-img hero_image_3">
                      <Image
                        src={item.image}
                        alt={`Hero Image ${i + 1}`}
                        width={600}
                        height={450}
                        className="w-full max-w-[500px] h-auto object-contain mx-auto"
                        priority={i === 0} // First image loads eagerly
                        loading={i === 0 ? "eager" : "lazy"} // Others lazy load
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
