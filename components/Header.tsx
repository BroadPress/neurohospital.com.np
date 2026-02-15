'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFb, setShowFb] = useState(false);
  const [showInst, setShowInst] = useState(false);
  const [showWtsp, setShowWtsp] = useState(false);
  const [showYt, setShowYt] = useState(false);
  const [showLdi, setShowLdn] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDept, setShowDept] = useState(false);
  const [showBse, setShowBse] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSection = (section:any) => {
    if (section === "about") {
      setShowAbout(!showAbout);
      setShowDept(false);
      setShowBse(false);
    } else if (section === "dept") {
      setShowDept(!showDept);
      setShowAbout(false);
      setShowBse(false);
    } else if (section === "browse") {
      setShowBse(!showBse);
      setShowAbout(false);
      setShowDept(false);
    }
  };

  const load = (link:any) => {
    router.push(link);
    window.location.reload();
    setShowAbout(false);
    setShowDept(false);
    setShowBse(false);
  };
  const location = usePathname();
  const blogs = location.startsWith("/blog");
  return (
    <>
      {/* responsive view starts*/}
      <section
        className={`resp-nav1 ${menuOpen ? "menu-active" : "not-active"}`}
      >
        <div className="resp-nav1-div">
          <div className="resp-nav1-div-div1">
            <i
              className={`fa-solid ${
                menuOpen ? "fa-xmark rotate" : "fa-bars rotate"
              }`}
              onClick={toggleMenu}
            ></i>
          </div>
          <div className="resp-nav1-div-div2" onClick={() => load("/")}>
            <div className="w-100">
              <img src="./header-logo.png" alt="header-logo" />
            </div>
          </div>
          <div className="resp-nav1-div-div3">
            <Link href="tel:+97721416267">
              <i className="fa-solid fa-phone-flip"></i>
            </Link>
          </div>
        </div>
      </section>
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => load("/")} className="ul-li">
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => toggleSection("about")} className="ul-li">
            <span className={` nav-cnt ${showAbout ? "active" : "not-active"}`}>
              About
            </span>{" "}
            <i
              className={
                showAbout ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
              }
            ></i>
          </li>
          {showAbout && (
            <div className="about-cnt">
              <Link href='/about'>
                <div>About Us</div>
              </Link>

              <Link href='/message'>
                <div>Message</div>
              </Link>

              <Link href='/partner'>
                <div>Partners Organization</div>
              </Link>
            </div>
          )}
          <li onClick={() => load("/services")} className="ul-li">
            <Link href='/services'>Services</Link>
          </li>
          <li onClick={() => toggleSection("dept")} className="ul-li">
            <span  className={`nav-cnt ${showDept ? "active" : ""}`}>
              Department
            </span>
            <i
              className={
                showDept ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
              }
            ></i>
          </li>
          {showDept && (
            <div className="dept-row row">
              <div className="col-12">
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
              <div className="col-12">
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
              <div className="col-12">
                <p className="dept-p1">Diagnostics</p>
                <p className="dept-p2">Radiology</p>
                <p className="dept-p2">Pathology</p>
                <p className="dept-p2">Endoscopy</p>
                <p className="dept-p2">ABPM/Holter/ECG</p>
                <p className="dept-p3">ECG/NCS/EMV</p>
              </div>
              <div className="col-12">
                <p className="dept-p1">Other</p>
                <p className="dept-p2">Emergency</p>
                <p className="dept-p3">Pharmacy</p>
              </div>
            </div>
          )}
          <li className="ul-li" onClick={() => load("/doctors")}>
            <Link href='/doctors'>Doctors</Link>
          </li>
          <li className="ul-li" onClick={() => load("/academics")}>
            <Link href='/academics'>Academics</Link>
          </li>
          <li onClick={() => toggleSection("browse")} className="ul-li">
            <span className={` nav-cnt ${showBse ? "active" : ""}`}>
              Browse More
            </span>
            <i
              className={
                showBse ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
              }
            ></i>
          </li>
          {showBse && (
            <div className="browse-cnt">
              <Link href='/gallery'>
                <div>Gallery</div>
              </Link>
              <Link href='testimonials'>
                <div>Testimonials</div>
              </Link>
              <Link href='/location'>
                <div>Location Map</div>
              </Link>
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
          )}
          <li className="ul-li" onClick={() => load("/contact")}>
            <span>Contact</span>
          </li>
          <li className="ul-li-last">
            {blogs ? (
              <>
                <Link href='/blog'  className="text-light ">
                  Neuro Hospital Blog
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="https://neuro.danphecare.com/"
                  className="text-light "
                  target="_blank"
                >
                  Book an Appointment
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      {/* responsive view ends*/}
      <header className="header">
        <nav className="nav-1 text-light">
          <div className="nav-1-content ">
            <div className="nav-1-first  text-light">
              <Link href="/location">
                <i className="fa-solid fa-location-dot  text-light"></i>&nbsp;
                F73M+G94, Jahada Road, Biratnagar
              </Link>
              <Link href="tel:+97721416267">
                <i className="fa-solid fa-phone-flip  text-light"></i>&nbsp;
                +977-21-416267
              </Link>
              <Link href="https://mail.yandex.com" target="_blank">
                <i className="fa-solid fa-envelope  text-light"></i>&nbsp; Check
                Email
              </Link>
            </div>
            <div className="nav-1-second ">
              <Link
              target="_blank"
                href="https://www.facebook.com/neurohospitalofficial/"
                className="media-container"
                onMouseOver={() => setShowFb(true)}
                onMouseLeave={() => setShowFb(false)}
              >
                <i className="fa-brands fa-square-facebook  text-light"></i>
                {showFb && <div className="media-content">Facebook</div>}
              </Link>

              <Link
              target="_blank"
                href="https://www.instagram.com/neurohospitalbrt/"
                className="media-container"
                onMouseOver={() => setShowInst(true)}
                onMouseLeave={() => setShowInst(false)}
              >
                <i className="fa-brands fa-instagram  text-light"></i>
                {showInst && <div className="media-content">Instagram</div>}
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCGrHL0QQXVu1n-P29xUhmYA"
                target="_blank"
                className="media-container"
                onMouseOver={() => setShowYt(true)}
                onMouseLeave={() => setShowYt(false)}
              >
                <i className="fa-brands fa-youtube  text-light"></i>
                {showYt && <div className="media-content">Youtube</div>}
              </Link>
              <Link
                href="https://www.linkedin.com/company/neurohospital/?originalSubdomain=np"
                target="_blank"
                className="media-container"
                onMouseOver={() => setShowLdn(true)}
                onMouseLeave={() => setShowLdn(false)}
              >
                <i className="fa-brands fa-linkedin  text-light"></i>
                {showLdi && <div className="media-content">LinkedIn</div>}
              </Link>
              <Link
                href="https://d.sriyog.com/neuro"
                target="_blank"
                className="media-container"
                onMouseOver={() => setShowWtsp(true)}
                onMouseLeave={() => setShowWtsp(false)}
              >
                <i className="fa-brands fa-whatsapp  text-light"></i>
                {showWtsp && <div className="media-content">WhatsApp</div>}
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
