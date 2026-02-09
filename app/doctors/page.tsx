import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import DtSection from "../../components/DtSection";
import Link from "next/link";
import '@/public/assets/css/doctor.css'
const Doctor = () => {

  const name1 = "Meet the Doctors";
  const name2 = "Doctors";

  return (
    <>
      <Breadcrumb name1={name1} name2={name2} />
      <div className="doctor">
      <div className="dct-sec-1">
        <div className="dct-sec-1-div">
          <div className="dcts1-1 text-center">
            <img loading="lazy" src={"/assets/images/doctors/dc1.png"} alt="dc1" />
            <div className="dcts-1-p1">Dr. Birendra Kumar Bista</div>
            <div className="dcts-1-p2">Senior Consultant Neurologist</div>
            <p className="dcts-btn btn">NMC # : 1636</p>
          </div>
          <div className="dcts1-1 text-center">
            <img loading="lazy" src={"/assets/images/doctors/dc2.png"} alt="dc1" />
            <div className="dcts-1-p1">Prof. Dr. Navin Kumar Karna</div>
            <div className="dcts-1-p2">
              Senior Consultant Orthopedic Surgeon
            </div>
            <p className="dcts-btn btn">NMC # : 3103</p>
            <br/>
          </div>
        </div>
      </div>
      <div className="dct-sec-2">
        <div className="dct-sec-2-1">
            <DtSection/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Doctor;
