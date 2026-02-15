'use client'
import React, { useEffect, useRef, useState } from "react";
import '@/public/css/department.css'

const Dpsec4 = () => {
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
      name: "Emergency",
      icon: "fi fi-rr-ambulance",
      des: "A serious, unexpected, and often dangerous situation requiring immediate action.",
    },
    {
      name: "Pharmacy",
      icon: "fa-solid fa-pills",
      des: " A medical shop or hospital dispensary where medicinal drugs are prepared or sold.",
    },
  ];
  return (
    <div className="dps2-div">
      <div className="dps2-p1">Others</div>
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

export default Dpsec4;
