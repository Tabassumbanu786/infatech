"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
export default function HeaderStyle3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); 
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
  
      if (y > 80) {
        setIsSticky(true);
        setHasScrolled(true);      // trigger slide‑in (only matters first time)
      } else {
        setIsSticky(false);
        setHasScrolled(false);
      }
  
      setPrevScrollPos(y);
    };
  
    /* 🔑  Run once on mount so page-refresh at mid‑scroll works */
    handleScroll();
  
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  


  return (
    <div className='header-area2 header_nav_03'>
     <header
        className={`cs_site_header cs_style_1 ${variant || ""}
          cs_sticky_header cs_site_header_full_width
          ${mobileToggle ? "cs_mobile_toggle_active" : ""}n
          ${isSticky ? "cs-gescout_sticky" : ""}
          ${hasScrolled ? "cs_slide_in" : ""}
        `}
      >

        {/* <div className="cs_top_header">
        <div className="container-fluid">
          <div className="cs_top_header_in">
            <div className="cs_top_header_left header-info">
              <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                <li><i className="bi bi-geo-alt-fill"></i>New market Sandigo - California</li>
                <li className="exam-gmail"><i className="bi bi-envelope"></i>example@gmail.com</li>
                <li><i className="bi bi-alarm"></i>9.00 am - 5.00 pm</li>
              </ul>
            </div>
            <div className="cs_top_header_right">
            <div className="cs_header_social_links_wrap">
                <div className="cs_header_social_links top-header-social-icon">
                  <ul>
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <div className="cs_main_header cs_accent_bg">
          <div className="container-fluid">
            <div className="cs_main_header_in">

              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/home3">
                  {
                    isSticky ? <Image src="/assets/images/footer-logo.png" alt="Logo_1" width={161} height={42} /> : <Image src="/assets/images/logo.png" alt="Logo" width={161} height={42} />
                  }

                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="solutek-btn2">
                  <Link href="/contact">Get A Quote Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="cs_site_header_spacing_140"></div>
    </div>

  );
}
