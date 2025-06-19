import Link from 'next/link';
import DropDown from './DropDown';
import serviceData from '@/app/Data/service-detail.json';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/home3">Home</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/home3" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link href="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link href="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown> */}
      </li>   
      {/* <li>
        <Link href="/project" onClick={() => setMobileToggle(false)}>
        Portfolio  
        </Link>
      </li>       */}
      <li className="menu-item-has-children">
        <Link href="" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            {/* <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li> */}
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
         
      <li className="cs_nav_list fw-medium">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>            
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown> */}
      </li>
      <li className="cs_nav_list fw-mediumn">
        <Link href="/about">About Us</Link>
      </li>   
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
