'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import '@/public/assets/css/nav.css'
const Nav = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showDept, setShowDept] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);
  const location = usePathname();
  const blogs = location.startsWith("/blog");
  // console.log(blogs);
  const router = useRouter();
  function load(link:any) {
    router.push(link);
    window.location.reload();
    setShowAbout(false);
    setShowDept(false);
    setShowBrowse(false);
  }
  return (
    <>
      <div className="nav-2">
        <div className="nav-2-content d-flex justify-content-between">
          <div>
            <Link  href='/'>
              <img
                src="/assets/images/header-logo.png"
                alt="header-logo"
                className="header-logo"
              />
            </Link >
          </div>
          <div className="nav-2-second">
            <Link  href='/' className="nav-links">
              Home
            </Link >

            <div
              className="dropdown-container"
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <Link   href='/about' className="nav-links">
                About&nbsp;<i className="fa-solid fa-caret-down"></i>
              </Link >
              {showAbout && (
                <div className="dropdown-content">
                  <div className="About-content">
                    <Link href='/about'>About Us</Link>
                    <Link href='/message'>Messages</Link>
                    <Link href='/partner'>
                      Partners Organization
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link  href='/services' className="nav-links">
              Services
            </Link >
            <div
              className="dropdown-container"
              onMouseEnter={() => setShowDept(true)}
              onMouseLeave={() => setShowDept(false)}
            >
              <Link 
                href='/departments'
                className="nav-links"
              >
               Departments&nbsp;<i className="fa-solid fa-caret-down"></i> 
              </Link >
              {showDept && (
                <div className="dropdown-content">
                  <div className="dept-content">
                    <div className=" dept-row row">
                      <div className="col col-3">
                        <p className="dept-p1">Surgical</p>
                        <p className="dept-p2">Neurosurgery</p>
                        <p className="dept-p2">Orthopedic</p>
                        <p className="dept-p2">Obs & Gynocology</p>
                        <p className="dept-p2">GI Surgery</p>
                        <p className="dept-p2">ENT</p>
                        <p className="dept-p2">Dental</p>
                        <p className="dept-p2">Urology</p>
                        <p className="dept-p3">Interventional Cardiology</p>
                      </div>
                      <div className="col col-3">
                        <p className="dept-p1">Medical</p>
                        <p className="dept-p2">Neurology</p>
                        <p className="dept-p2">Cardiology</p>
                        <p className="dept-p2">General Medicine</p>
                        <p className="dept-p2">Nephrology</p>
                        <p className="dept-p2">Gastroenterology</p>
                        <p className="dept-p2">Ophthalmology</p>
                        <p className="dept-p2">Dermatology</p>
                        <p className="dept-p2">Pediatrics</p>
                        <p className="dept-p2">Psychiatric</p>
                        <p className="dept-p2">Oncology</p>
                        <p className="dept-p3">Family Medicine</p>
                      </div>
                      <div className="col col-3">
                        <p className="dept-p1">Diagnostics</p>
                        <p className="dept-p2">Radiology</p>
                        <p className="dept-p2">Pathology</p>
                        <p className="dept-p2">Endoscopy</p>
                        <p className="dept-p2">ABPM/Holter/ECG</p>
                        <p className="dept-p3">ECG/NCS/EMV</p>
                      </div>
                      <div className="col col-3">
                        <p className="dept-p1">Other</p>
                        <p className="dept-p2">Emergency</p>
                        <p className="dept-p3">Pharmacy</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
           
            <Link href='/doctors' className="nav-links">
              Doctors
            </Link >
            <Link  href='/academics' className="nav-links">
              Academics
            </Link >

            <div
              className="dropdown-container"
              onMouseEnter={() => setShowBrowse(true)}
              onMouseLeave={() => setShowBrowse(false)}
            >
              <p  className="nav-links">
                Browse More&nbsp;<i className="fa-solid fa-caret-down"></i>
              </p >
              {showBrowse && (
                <div className="dropdown-content">
                  <div className="browse-div">
                    <div className="browse-row row">
                      <div className="browse-col col col-6">
                        <Link href='/gallery'>
                          <div>Gallery</div>
                        </Link>
                        <Link href='/testimonial'>
                          <div>Testimonials</div>
                        </Link>
                        <Link href='/location'>
                          <div>Location Map</div>
                        </Link>
                      </div>
                      <div className="browse-col col col-6">
                        <Link href='/privacy'>
                          <div>Privacy Policy</div>
                        </Link>
                        <Link href='/calendar'>
                          <div>Hospital Calendar</div>
                        </Link>
                        <Link href='/career'>
                          <div>Career</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link  href='/contact' className="nav-links">
              Contact
            </Link >
            {blogs ? (
              <>
                <Link href='/blog' className="nav-2-btn btn text-sm">
                  Neuro Hospital Blog
                </Link >
              </>
            ) : (
              <>
                <Link 
                  href="https://neuro.danphecare.com/"
                  className="nav-2-btn btn text-sm"
                  target="_blank"
                >
                  Book an Appointment
                </Link >
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
