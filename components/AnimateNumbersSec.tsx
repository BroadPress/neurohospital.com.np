'use client'
import React, { useEffect, useRef, useState } from 'react'
import '@/public/css/aboutus.css'
const AnimateNumbersSec = () => {
  const sec3ref = useRef(null);
  const [patients, setPatients] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [beds, setBeds] = useState(0);
  const [centers, setCenters] = useState(0);
  const [isSecVisible, setIsSecVisible] = useState(false);
  useEffect(()=>{
    const sec3Element = sec3ref.current;
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSecVisible(true);
          observer3.unobserve(sec3Element as any);
        }
      },
      { threshold: 0.3 }
   );
  },[])
  
  useEffect(() => {
      if (isSecVisible) {
        animateNumber(setPatients, 100000, 4000);
        animateNumber(setDoctors, 30, 4000);
        animateNumber(setBeds, 150, 4000);
        animateNumber(setCenters, 473, 4000);
      }
  }, [isSecVisible]);
  const animateNumber = (setter:any, finalValue:any, duration:any) => {
    let start = 0;
    let increment = finalValue / (duration / 30);
    let interval = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(interval);
      }
      setter(Math.floor(start));
    }, 20);
  };

  return (
     <div ref={sec3ref} className=" my-2">
        <div  
          className={` ${isSecVisible ? "show" : ""}`}
        >
          <div className="">
            <img
              src="./aboutus/cardiogram.png"
              alt="cardiogram"
              className="flat-icon"
            />
            <p className="abs3-p1 text-light h3 text-bold">{patients}</p>
            <p className="abs3-p2">Plus Happy Patients</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img
              src="./aboutus/doctor.png"
              alt="doctor"
              className="flat-icon"
            />
            <p className="abs3-p1 text-light h3 text-bold">{doctors}</p>
            <p className="abs3-p2">Qualified Doctors</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img
              src="./aboutus/bed.png"
              alt="bed"
              className="flat-icon"
            />
            <p className="abs3-p1 text-light h3 text-bold">{beds}</p>
            <p className="abs3-p2">Beds</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img
              src="./aboutus/location.png"
              alt="location"
              className="flat-icon"
            />
            <p className="abs3-p1 text-light h3 text-bold">{centers}</p>
            <p className="abs3-p2">Referring Center</p>
          </div>
        </div>
      </div>
  )
}

export default AnimateNumbersSec