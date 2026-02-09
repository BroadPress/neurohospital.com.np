'use client'
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import '@/public/assets/css/apply.css'
const Apply = () => {
  const name = "Apply Now";

  return (
    <>
      <Breadcrumb name1={name} name2={name} />
      <div className="apply">
        <div className="apply-row row ">
          <div className="cols col-md-8 col-sm-12">
            <p className="text-center apply-p1 m-1">
              Page Coming Soon
            </p>
            <br /><br />

            {/* Removed entire <form> block */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
