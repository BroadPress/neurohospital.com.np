'use client'
import Link from "next/link";
import React from "react";
import '../public/assets/css/footer.css'
const Footer = () => {
  return (
    <>
      <footer className="py-1 ">
        <div className="main-footer ">
          <div className="footer-row row">
            <div className="cols col-md-3 col-sm-12 col-xs-12">
              <Link href="">
                <img
                  src="/assets/images/footer-logo.png"
                  alt="footer-logo"
                  className="footer-logo"
                />
              </Link>
              <p className="footer-p">
                Providing best healthcare solutions in Biratnagar, Nepal. Asia's
                profesionally managed healthcare solutions.
              </p>
              <div className="footer-media-icons">
                <Link target="_blank" href="https://d.sriyog.com/neuro">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/company/neurohospital/?originalSubdomain=np">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link target="_blank" href="https://www.youtube.com/channel/UCGrHL0QQXVu1n-P29xUhmYA">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link target="_blank" href="https://www.instagram.com/neurohospitalbrt/">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link target="_blank" href="https://www.facebook.com/neurohospitalofficial/">
                  <i className="fa-brands fa-square-facebook"></i>
                </Link>
              </div>
            </div>
            <div className="cols col-md-3 col-sm-12 col-xs-12">
              <p className="footer-head">Our Location</p>
              <p>F73M+G94, Jahada Road, Biratnagar, Nepal</p>
              <p>
                E:{" "}
                <Link
                target="_blank"
                  className="e-link text-dark"
                  href="mailto:info@neurohospital.com.np"
                >
                  info@neurohospital.com.np
                </Link>
              </p>
              <p>
                P:{" "}
                {/* <Link href="tel:+977-21-417475" className="foot-phn" target="_blank">
                  +977-21-417484 / 417475
                </Link> */}

                <Link href="tel:+977-21-417484" className="foot-phn" target="_blank">
                +977-21-417484
              </Link>

              <Link href="tel:+977-21-417475" className="foot-phn" target="_blank">
                / 417475
              </Link>


              </p>
            </div>
            <div className="cols col-md-3 col-sm-12 col-xs-12">
              <p className="footer-head">OPD Hours</p>
              <p>
                Sun-Fri - <b className="text-dark">10:30AM - 05:00PM</b>
              </p>
              <p>
                Saturday - <b className="text-dark">Closed</b>
              </p>
            </div>
            <div className="cols col-lg-2 col-md-2 col-xs-12 ">
              <p className="footer-head text">Toll Free Number</p>
              <p>
                <Link href="tel:1660-21-52777" target="_blank" className="tel-no">
                  1660-21-52777
                </Link>
              </p>
              <Link href="tel:" target="_blank"></Link>
              <p>24X7 Helpline</p>
              <p>
                <Link href="tel:+977-21-416267" target="_blank" className="tel-no ">
                  +977-21-416267
                </Link>
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="footer-last text-center">
          <div>
            <div className="container">
              Copyright &copy; 2000 - {" "}2025{" "}
              <b className="text-dark">
                Neuro Cardio & Multispeciality Hospital Pvt. Ltd.
              </b>{" "}
              All Rights Reserved.
            </div>
            <div className="f-l-cnt text-center ">
              Site Managed By : <Link className="text-decoration-none text-dark" href="https://wa.me/97798520225735?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.neurohospital.com.np.%20" target="_blank">PRACAS UPRETI</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
