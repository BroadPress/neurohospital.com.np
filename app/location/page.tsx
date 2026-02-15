'use client'
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import '@/public/css/location-map.css'
const LocationMap = () => {
  const name1 = "Locate Us";
  const sec1Ref = useRef(null);
  const [isSec1Visible, setIsSec1Visible] = useState(false);
  useEffect(() => {

    const sec1Element = sec1Ref.current;
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec1Visible(true);
          observer1.unobserve(sec1Element as any);
        }
      },
      { threshold: 0.3 }
    );
    if (sec1Element) observer1.observe(sec1Element);
    return () => {
      if (sec1Element) observer1.unobserve(sec1Element);
    };
  }, []);
  return (
    <div>
      <Breadcrumb name1={name1} name2={name1} />
      <div className="row1  text-center">
        <p className="lm-p1">Location Map</p>
        <p className="lm-p2">
          Neuro Hospital - Biratnagar is located in the heart of Biratnagar
          Metro. It is only 8.3 Kms ( 21 Mins approx) drive from Jogbani, Bihar,
          24.7 Kms ( 30 minutes approx ) drive from Itahari and 5.8 Kms from
          Biratnagar Airport.
        </p>
      </div>
      <div
        ref={sec1Ref}
        className={`row2 ${isSec1Visible ? "show" : ""}`}
      >
        <div data-wow-delay="0.2s" className="flex items-center justify-center">
          <div className="map-frame">
            <iframe
              className="map-i-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.0797586178865!2d87.28183477538015!3d26.45315787692409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef745000000001%3A0x2e285e8569816c06!2sNeuro%20Cardio%20%26%20Multispeciality%20Hospital%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1695969977821!5m2!1sen!2snp"
              width="900"
              height="650"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
