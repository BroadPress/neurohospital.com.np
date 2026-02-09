'use client'
import React, { useEffect, useRef, useState } from "react";
import CardSlider from "../components/CardSlider";
import Video from "../components/Video";
import Sec8 from "../components/Sec8";
import SectionSix from "../components/SectionSix";
import { useRouter } from "next/navigation";
import Link from "next/link";
import '../public/assets/css/home.css'
import Header from "@/components/Header";
const Home = () => {
  const img = "/assets/images/homepage/video-img.jpg";
  const url = "https://www.youtube.com/watch?v=TnBuYRP5hZo";

  const router = useRouter();
  const load = (path:any) => {
    router.push(path);
    window.location.reload();
  };
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec5Ref = useRef(null);
  const sec6Ref = useRef(null);
  const sec7Ref = useRef(null);

  const [isSec1Visible, setIsSec1Visible] = useState(false);
  const [isSec2Visible, setIsSec2Visible] = useState(false);
  const [isSec3Visible, setIsSec3Visible] = useState(false);
  const [isSec4Visible, setIsSec4Visible] = useState(false);
  const [isSec5Visible, setIsSec5Visible] = useState(false);
  const [isSec6Visible, setIsSec6Visible] = useState(false);
  const [isSec7Visible, setIsSec7Visible] = useState(false);

  useEffect(() => {   
    const sec1Element = sec1Ref.current;
    const sec2Element = sec2Ref.current;
    const sec3Element = sec3Ref.current;
    const sec4Element = sec4Ref.current;
    const sec5Element = sec5Ref.current;
    const sec6Element = sec6Ref.current;
    const sec7Element = sec7Ref.current;
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec1Visible(true);
          observer1.unobserve(sec1Element as any);
        }
      },
      { threshold: 0.3 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec2Visible(true);
          observer2.unobserve(sec2Element as any);
        }
      },
      { threshold: 0.3 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec3Visible(true);
          observer3.unobserve(sec3Element as any);
        }
      },
      { threshold: 0.3 }
    );
    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec4Visible(true);
          observer4.unobserve(sec4Element as any);
        }
      },
      { threshold: 0.3 }
    );
    const observer5 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec5Visible(true);
          observer5.unobserve(sec5Element as any);
        }
      },
      { threshold: 0.3 }
    );
    const observer6 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec6Visible(true);
          observer6.unobserve(sec6Element as any);
        }
      },
      { threshold: 0.3 }
    );
    const observer7 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec7Visible(true);
          observer7.unobserve(sec7Element as any);
        }
      },
      { threshold: 0.3 }
    );
    if (sec1Element) observer1.observe(sec1Element);
    if (sec2Element) observer2.observe(sec2Element);
    if (sec3Element) observer3.observe(sec3Element);
    if (sec4Element) observer4.observe(sec4Element);
    if (sec5Element) observer5.observe(sec5Element);
    if (sec6Element) observer6.observe(sec6Element);
    if (sec7Element) observer7.observe(sec7Element);

    return () => {
      if (sec1Element) observer1.unobserve(sec1Element);
      if (sec2Element) observer2.unobserve(sec2Element);
      if (sec3Element) observer3.unobserve(sec3Element);
      if (sec4Element) observer4.unobserve(sec4Element);
      if (sec5Element) observer5.unobserve(sec5Element);
      if (sec6Element) observer6.unobserve(sec6Element);
      if (sec7Element) observer7.unobserve(sec7Element);
    };
  }, []);
  return (
    <>
      <div className="home">
        <div className="home-first" style={{ textAlign: "justify" }}>
          <div className="home-bg ">
            <div
              ref={sec1Ref}
              className={`home-1 w-full max-w-7xl ${isSec1Visible ? "show" : ""}`}
            >
              <div className="home-1-1 w-300">
                <p className="hp1">Neuro Hospital - Biratnagar</p>
                <p className="hp2">Trusted Care</p>
                <p className="hp3">
                  We have been the first choice of neurological services since
                  two decades in Biratnagar and serving various premium medical
                  facilities under a single roof by giving new lives to
                  thousands
                </p>
                <Link href="/about" className="hbtn btn">
                  About Us
                </Link>
              </div>
              <div className="home-1-2">
                <img
                  src="/assets/images/homepage/logo.png"
                  alt="home-image"
                  className="mt-5 mb-1 w-full sm:w-208"
                />
              </div>
            </div>
            <div className="Home-rows mt-2">
              <div className="home-row row">
                <div className="col1 cols col-md-3 col-xs-12">
                  <div className="hcard">
                    <div className="h5 mb-3">Hospital Timings</div>
                    <div className="hcard-1 d-flex justify-content-between">
                      <div className="fh ">OPD</div>
                      <div className="fs ">-</div>
                      <div className="ft ">10:30 AM - 05:00 PM</div>
                    </div>
                    <div className="hcard-1 d-flex justify-content-between">
                      <div className="fh ">Saturday</div>
                      <div className="fs ">-</div>
                      <div className="ft ">Closed</div>
                    </div>
                    <div className="hcard-2 d-flex justify-content-between">
                      <div className="fh ">Emergency</div>
                      <div className="fs ">-</div>
                      <div className="ft ">24x7 Service</div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="col2 cols col-md-3 col-xs-12 ">
                  <div className="hcard">
                    <p className="h5 mb-3">Doctors' Team</p>
                    <p className="hpp1 mt-2 mb-3">
                      We have managed our services to ease our patients an
                      easiest way to get emergency, OPD & other essential
                      medical services round the clock.
                    </p>
                    <p
                      onClick={() => load("/doctors")}
                      className="card-btn btn text-light mt-3"
                    >
                      View Doctors
                    </p>
                    <br />
                  </div>
                </div>
                <div className="col3 cols col-md-3 col-xs-12 ">
                  <div className="hcard">
                    <p className="h5 mb-3"> Appointments</p>
                    <p className="hpp1 mb-3 mt-3">
                      You can book an appointment to get connected with your
                      desired doctors.
                    </p>
                    <Link
                      target="_blank"
                      href="https://neuro.danphecare.com/"
                      className="card-btn btn text-light mt-3"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                </div>
                <div className="col4 cols col-md-3 col-xs-12">
                  <div className="hcard">
                    <p className="h5 mb-3">Emergency Cases</p>
                    <Link
                      href="https://d.sriyog.com/neuro"
                      className="text-decoration-none text-light mt-3 mb-3"
                    >
                      <i className="fa-solid fa-phone-flip"></i>
                      &nbsp;166-021-52777
                    </Link>
                    <p className="hpp1 mt-3 mb-3">
                      Emergency connectivity over toll free number ( NTC Only )
                      and WhatsApp.
                    </p>
                    <Link
                      href="https://d.sriyog.com/neuro"
                      className="card-btn btn text-light mt-3"
                    >
                      Call on WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={sec2Ref}
          className={`section-1 d-flex ${isSec2Visible ? "show" : ""}`}
        >
          <div className="section-1-1div">
            <img
              src="/assets/images/homepage/director.png"
              alt="director-image"
            />
          </div>
          <div
            className="section-1-2div container mt-3"
            style={{ textAlign: "justify" }}
          >
            <p className="section-1-1p ">SERVING THE HUMANITY</p>
            <p className="section-1-2p">Director's Message</p>
            <p className="mb-3 mt-3">
              Our mission at Neuro Cardio & Multispeciality Hospital Pvt.Ltd. is
              to provide exemplary healthcare, and it is your unwavering
              dedication that allows us to achieve this. As we move forward, I
              want to emphasize the importance of our collective vision, which
              is founded on the principles of clinical excellence,
              patient-centered care, and continuous innovation.
            </p>
            <p className="mb-3 mt-3">
              In the ever-evolving landscape of healthcare, it is essential that
              we embrace change and harness the power of innovation to improve
              patient outcomes and experiences. We must remain at the forefront
              of medical advances, ensuring that our patients receive the best
              care possible.
            </p>
            <p className="text-dark mt-3">
              Dr. Anisha Bista, Executive Director
            </p>
            <Link
              href="mailto:anisha.bista@neurohospital.com.np"
              className="section-1-btn btn mt-3"
            >
              anisha.bista@neurohospital.com.np
            </Link>
          </div>
        </div>
        <div className="slider-container">
          <div className="slide-p1 text-center">Optimum Caring</div>
          <CardSlider />
        </div>
        <div
          ref={sec3Ref}
          className={`section-3 ${isSec3Visible ? "show" : ""}`}
        >
          <div className="sec-3-content row">
            <div className="cols col-md-6 col-sm-12  text-secondary">
              <p className="sec-3-p1">Best Practices</p>
              <h1 className="sec-3-p2">Premium Medical Facilities</h1>
              <p className="sec-3-p3" style={{ textAlign: "justify" }}>
                To provide a safe and efficient environment to patients, staff,
                and visitors routine inspections are one of the hospital
                facility management’s key activities that are performed to find
                and address any problem areas inside and outside of healthcare
                facilities, such as:
              </p>
              <div className="sec-3-2row row">
                <div className="sec-3-2col cols col-md-6 col-sm-12">
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp; Trauma
                    Care
                  </div>
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp; Intensive
                    Care Unit
                  </div>
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp;Ventilator
                  </div>
                </div>
                <div className="sec-3-2col cols col-md-6 col-sm-12">
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp; Stroke
                    Care
                  </div>
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp; Heart
                    Attack Care
                  </div>
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp;Knee/ Hip
                    Replacement
                  </div>
                </div>
              </div>
            </div>
            <div className="cols col-md-6 col-sm-12">
              <img
                src="/assets/images/homepage/sec-3-1.png"
                alt=""
                className="sec-3-img"
              />
            </div>
          </div>
        </div>
        <div className="section-4 ">
          <div className="sec-4-row ">
            <div className="sec-4-col1"></div>
            <div className="sec-4-col2 ">
              <div
                ref={sec4Ref}
                className={`sec-4-col2-div  text-light ${
                  isSec4Visible ? "show" : ""
                }`}
              >
                <div className="sec-4-1 text-light">Experienced Doctors</div>
                <p className="sec-4-2 text-light">World Class Treatment</p>
                <p className="text-light" style={{ textAlign: "justify" }}>
                  I feel proud to become a team member of professionally managed
                  healthcare services in Nepal. Our hospital provides world
                  class healthcare solutions for them whose last lifeline is
                  "Neuro Hospital-Biratnagar".
                </p>
                <p className="text-light">
                  We have been serving local & international patients under
                  single roof as being the best neuro hospital in Nepal.
                </p>
                <p className="text-light">Life Matters !</p>
                <p className="sec-4-5">
                  Dr. Vivek Kattel | Consultant Physician
                </p>
                <Link
                  className="text-decoration-none text-light"
                  href="mailto:drkattel@neurohospital.com.np"
                >
                  drkattel@neurohospital.com.np
                </Link>
                <br />
                <Link
                  target="_blank"
                  href="https://neuro.danphecare.com/"
                  className="sec-4-btn btn text-light"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
            <div className="sec-4-col3"></div>
          </div>
        </div>
        <div className="section-5 mb-2">
          <div className="section-5-content">
            <div
              ref={sec5Ref}
              className={`sec-5-2  text-light ${isSec5Visible ? "show" : ""}`}
            >
              <p className="sec-5-p1">Highest Quality Care</p>
              <p className="sec-5-p2">Solutions to Complex Medical Problems</p>
              <ul className="sec-5-ul">
                <li>Analyze—Understand the root cause.</li>
                <li>Plan—Determine how to resolve the problem.</li>
                <li>Implement—Put the resolution in place.</li>
                <li>
                  Evaluate—Determine if the resolution is producing the desired
                  results.
                </li>
              </ul>
            </div>
            <div className="sec-5-3 ">
              <div className="sec-5-3-div">
                <Video img={img} url={url} />
              </div>
            </div>
          </div>
        </div>
        <div className="section-6 " style={{ textAlign: "justify" }}>
          <SectionSix />
        </div>
        <div className="section-7">
          <div
            ref={sec6Ref}
            className={`sec-7-div  ${isSec6Visible ? "show" : ""}`}
          >
            <p className="sec7-p1">World Class Equipments</p>
            <p className="sec7-p2 " style={{ textAlign: "justify" }}>
              Magnetic resonance imaging is a medical imaging technique used in
              radiology to form pictures of the anatomy and the physiological
              processes of the body. MRI scanners use strong magnetic fields,
              magnetic field gradients, and radio waves to generate images of
              the organs in the body.
            </p>
            <Link
              target="_blank"
              href="https://neuro.danphecare.com/"
              className="sec7-btn btn text-light"
            >
              Book an Appointment
            </Link>
            <br />
          </div>
        </div>
        <div className="section-8 my-2">
          <div className="sec8-div">
            <p className="sec8-p text-center">Hospital Updates</p>
            <div
              ref={sec7Ref}
              className={`sec8cnt-div text-light ${
                isSec7Visible ? "show" : ""
              }`}
            >
              <Sec8 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
