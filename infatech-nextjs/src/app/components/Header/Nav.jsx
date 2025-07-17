import Link from 'next/link';
import DropDown from './DropDown';
import serviceData from '../../Data/service-detail.json';


// Home | About Us | Services | Portfolio | Industries | Resources | Contact

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/home3">Home</Link>
      </li>
      <li className="cs_nav_list fw-mediumn">
        <Link href="/about">About Us</Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            {serviceData.map((service) => (
              <li key={service.id}>
                <Link href={`/service/${service.id}`} onClick={() => setMobileToggle(false)}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </DropDown>

      </li>
      {/* <li>
        <Link href="#">Portfolio</Link>
      </li> */}
      <li className="menu-item-has-children">
        <Link href="/ifa-website">Industries We Serve</Link>
        <DropDown>
        <ul className="dropdown-menu show shadow-sm p-2 rounded-3" style={{ width: '260px' }}>
          <li>

          {/* <a href="/ifa-website" className="text-decoration-none">
            <span className="d-block fw-semibold text-dark">For Financial Advisors</span>
            <small className="text-muted">IFA Initiative</small>
            </a> */}
            <Link href="/ifa-website" target="_blank" rel="noopener noreferrer">
  For Financial Advisors
</Link>
          </li>
          <li>
            {/* <span className="d-block fw-semibold text-dark">For Bakers</span> */}
            <Link href="/industries/bakers">For Bakers</Link>
            {/* <small className="text-muted">Coming Soon</small> */}
          </li>
          <li>
          <Link href="/industries/kirana">For Kirana Stores</Link>
            {/* <span className="d-block fw-semibold text-dark">For Kirana Stores</span> */}
            {/* <small className="text-muted">Coming Soon</small> */}
          </li>
          <li>
          <Link href="/industries/coaches">For Coaches</Link>
            {/* <span className="d-block fw-semibold text-dark">For Coaches</span> */}
            {/* <small className="text-muted">Future-ready placeholder</small> */}
          </li>
        </ul>

          </DropDown>
      </li>
      {/* <li>
        <Link href="#">Resources</Link>
      </li> */}
      <li className="cs_nav_list fw-medium">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
