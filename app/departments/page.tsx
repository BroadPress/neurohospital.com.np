'use client'
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import DpSectiion1 from "../../components/DpSectiion1";
import Dpsection2 from "../../components/Dpsection2";
import Dpsection from "../../components/Dpsection";
import Dpsec4 from "../../components/Dpsec4";
import '@/public/css/department.css'

const Department = () => {
  const name1 = "Our Departments";
  const name2 = "Our Departments";

  return (
    <div>
      <Breadcrumb name1={name1}name2={name2} />
      <div className="dep-sec1">
        <div className="dsec1">
          <div className="ds1-1">
            <img src="/department/dept1.jpg" alt="" className="w-100 h-100" />
          </div>
          <div className="ds1-2">
            <div >
              <p className="ds1-2-p1 text-secondary">Welcome to Neuro Hospital - Biratnagar</p>
              <p className="ds1-2-p2">Complete Medical Solutions in One Place</p>
              <p className="ds1-2-p3" style={{ textAlign: 'justify' }}>
                Neuro Hospital is a well-equipped and state-of-the-art hospital
                with one of the best standards and quality of care in the
                management of patients. It comprises mainly neurological
                sciences along with other allied sciences.
              </p>
              <p className="ds1-2-p4" style={{ textAlign: 'justify' }}>
                Commitment to excellence in providing quality health by experts
                and professional teamwork in a human, compassionate, and caring
                environment through continual improvement and technological
                upgradation, ensuring maximum satisfaction and good health for
                the patients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dep-sec2">
        <div className="dsec2" style={{ textAlign: 'justify' }}>
          <DpSectiion1/>
        </div>
      </div>
      <div className="dep-sec3">
        <div className="dsec3" style={{ textAlign: 'justify' }}>
          <Dpsection2/>
        </div>
      </div>
      <div className="dep-sec4">
        <div className="dsec4" style={{ textAlign: 'justify' }}>
          <Dpsection/>
        </div>
      </div>
      <div className="dep-sec5">
        <div className="dsec5" style={{ textAlign: 'justify' }}>
          <Dpsec4/>
        </div>
      </div>
    </div>
  );
};

export default Department;
