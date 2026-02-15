'use client'
import React, { useEffect, useRef, useState } from "react";
import '@/public/css/department.css'

const Dpsection = () => {
  const sec2Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const sec2Element = sec2Ref.current;
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer2.unobserve(sec2Element as any);
        }
      },
      { threshold: 0.1 }
    );
    if (sec2Element) observer2.observe(sec2Element);
    return () => {
      if (sec2Element) observer2.unobserve(sec2Element);
    };
  }, []);
  const list = [
    {
      name: "Radiology",
      icon: "fi fi-rr-dashboard-monitor",
      des: "A branch of medicine that uses imaging technology to diagnose and treat disease.",
    },
    {
      name: "Pathology",
      icon: "fi fi-rr-microscope",
      des: "  The medical specialty concerned with the study of the nature and causes of diseases.",
    },
    {
      name: "Endoscopy",
      icon: "fi fi-rr-stomach",
      des: "An endoscopy is a procedure used in medicine to look inside the body.",
    },
    {
      name: "ABPM/ Holter/ ECG",
      icon: "fi fi-rr-pulse",
      des: "Electrical activity of the heart continuously 24/7 while away from the doctor's office.",
    },
    {
      name: "NCS / EMV",
      icon:"fa-solid fa-heart-pulse",
      des: "Electrical activity of the muscles and nerves of the body, usually to an arm or a leg.",
    }
    
  ];
  return (
    <div className="dps2-div">
      <div className="dps2-p1">Diagnostics</div>
      <div
        ref={sec2Ref}
        className={`dps2-row w-100  ${isVisible ? "show" : ""}`}
      >
        {list.map((item) => (
          <div key={item.name} className="dps2-col">
            <div className="dps2-col-cnt d-flex">
              <div className="dps2-col-cnt1 ">
                <i className={item.icon} ></i>
              </div>
              <div className="dps2-col-cnt2">
                <div className="dsct-2-p1">{item.name}</div>
                <div className="dsct-2-p2">{item.des}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dpsection;
