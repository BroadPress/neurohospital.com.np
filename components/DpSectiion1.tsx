'use client'
import React, { useEffect, useRef, useState } from "react";
import '@/public/assets/css/department.css'
const DpSectiion1 = () => {
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
      { threshold: 0.5 }
    );
    if (sec2Element) observer2.observe(sec2Element);
    return () => {
      if (sec2Element) observer2.unobserve(sec2Element);
    };
  }, []);
  const list = [
    {
      name: "Neurosurgery",
      icon: "fi fi-rs-head-side-medical",
      des: "The specialty of neurosurgical care includes both adult and pediatric patients.",
    },
    {
      name: "Orthopedic",
      icon: "fi fi-rr-bone",
      des: " Focuses on injuries and diseases of your body's musculoskeletal system.",
    },
    {
      name: "Obs & Gynaecology",
      icon: "fi fi-rr-hands-heart",
      des: "Obstetrics means care during pregnancy, childbirth, and the postpartum period.",
    },
    {
      name: "GI Surgery",
      icon: "fi fi-rr-lungs",
      des: "It means to treat benign (noncancerous) conditions that affect the digestive tract.",
    },
    {
      name: "ENT",
      icon: "fa-solid fa-heart-pulse",
      des: "Specializes in everything having to do with parts of the body (ear, nose, and throat).",
    },
    {
      name: "Dental",
      icon: "fi fi-rr-tooth",
      des: "The branch of medicine focused on the teeth, gums, and mouth is Known as Dental.",
    },
    {
      name: "Urology",
      icon: "fi fi-rr-microscope",
      des: "Urology is a part of health care that deals with diseases of the male and female urinary tract.",
    },
    {
      name: "Interventional Cardiology",
      icon: "fi fi-rr-pulse",
      des: "Specialty that diagnoses and treats heart and blood vessel conditions using small tubes.",
    },
  ];
  return (
    <div className="dps2-div">
      <div className="dps2-p1">Surgical</div>
      <div
        ref={sec2Ref}
        className={`dps2-row w-100  ${isVisible ? "show" : ""}`}
      >
        {list.map((item) => (
          <div key={item.name} className="dps2-col">
            <div className="dps2-col-cnt d-flex">
              <div className="dps2-col-cnt1 ">
                <i className={item.icon}></i>
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

export default DpSectiion1;
