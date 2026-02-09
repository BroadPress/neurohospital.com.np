'use client'
import React, { useEffect, useRef, useState } from "react";
import '@/public/assets/css/department.css'

const Dpsection2 = () => {
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
      name: "Neurology",
      icon: "fi fi-ss-treatment",
      des: "The specialty of neurosurgical care includes both adult and pediatric patients.",
    },
    {
      name: "Cardiology",
      icon: "fa-solid fa-heart-pulse",
      des: " Cardiology is a branch of medicine that concerns diseases and disorders of the heart.",
    },
    {
      name: "Obs & Gynaecology",
      icon: "fi fi-rr-hands-heart",
      des: "Obstetrics means care during pregnancy, childbirth, and the postpartum period.",
    },
    {
      name: "Hematology",
      icon: "fi fi-rr-tubes",
      des: "Hematology is the branch of medicine with the study of the blood and blood disorders.",
    },
    {
      name: "General Medicine",
      icon: "fi fi-ss-file-medical",
      des: "Speciality of medicine which is involved in the prevention, diagnosis & treatment.",
    },
    {
      name: "Nephrologyl",
      icon: "fi fi-rr-hospitals",
      des: "Nephrology is a specialty within the internal medicine field related to kidney care.",
    },
    {
      name: "Gastroenterology",
      icon: "fi fi-rr-stomach",
      des: "The branch of medicine focused on the digestive system and its disorders.",
    },
    {
      name: "Opthalmology",
      icon: "fi fi-rr-sunglasses",
      des: "Ophthalmology is the specialized field of medicine that focuses on the health of the eye.",
    },
    {
        name: "Dermatology",
        icon: "fi fi-rr-capsules",
        des: "The study, research, diagnosis, and management of any health conditions affect the skin. ",
      },
      {
        name: "Pediatrics",
        icon: "fi fi-ss-user-md",
        des: "Branch of medicine dealing with the medical care of infants, children, and adolescents.",
      },
      {
        name: "Psychiatric",
        icon: "fi fi-rs-head-side-medical",
        des: "Branch of medicine focused on the diagnosis, treatment and prevention of mental health.",
      },
      {
        name: "Oncology",
        icon: "fi fi-rs-treatment",
        des: "Medicine dedicated to the investigation, diagnosis and treatment of people with cancer.",
      },
      {
        name: "Family Medicine",
        icon: "fi fi-ss-briefcase",
        des: "Qualified to treat most ailments and provide comprehensive health care for people.",
      },

    
  ];
  return (
    <div className="dps2-div">
      <div className="dps2-p1">Medical</div>
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

export default Dpsection2;
