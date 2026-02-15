'use client'
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";
import '@/public/css/career.css'

const Career = () => {
  const name = "Careers";


  return (
    <>
      <Breadcrumb name1={name} name2={name} />

      <div className="career">
        <div className="career-div">

          {/* ------------------ Critical Care Nurse ------------------ */}
          <div className="crr-p">Critical Care Nurse</div>
          <div className="mb-3">Posted on 22 November 2025</div>

          <div className="h5 mb-3">Job Description</div>
          <div className="cr-p2 mb-3">
             He/ She involves in the specialized care of critically ill or unstable patients in intensive care units (ICUs) or other acute care settings.

          </div>

          <div className="h5 mb-3">Job Responsibilities</div>
          <ul className="list-disc">
            <li>Continuous Assessment: Perform frequent, in-depth physical and neurological assessments to detect rapid changes in patient condition.</li>
            <li>Complex Monitoring: Interpret and manage advanced monitoring data, including hemodynamic pressures, cardiac rhythms (ECG), and arterial blood gases (ABGs).</li>
            <li>Medication Management: Safely administer and precisely titrate high-alert medications and continuous intravenous infusions (e.g., vasoactive drips, sedatives).</li>
            <li>Respiratory Care: Manage patients on mechanical ventilation, including setting adjustments, airway maintenance, and frequent suctioning.</li>
            <li>Emergency Response: Initiate and participate effectively in emergency procedures (e.g., CPR, ACLS protocols) to stabilize critical events.</li>
            <li>Invasive Line Care: Maintain sterility and integrity of all invasive devices, tubes, and drains (e.g., central lines, chest tubes, catheters).</li>
            <li>Equipment Proficiency: Operate, monitor, and troubleshoot specialized ICU equipment such as ventilators, monitors, and infusion pumps.</li>
            <li>Detailed Documentation: Ensure accurate, timely, and comprehensive charting of all assessments, interventions, and patient responses.</li>
            <li>Team Collaboration: Communicate critical patient status and assessment findings clearly and promptly to the physician and healthcare team.</li>
            <li>Patient Advocacy: Provide crucial emotional support and education to patients and families regarding treatment plans and difficult ethical decisions.</li>

          </ul>

          <div className="h5 mb-3">Skills</div>
          
          <ul className="list-disc">
            <li>Critical Thinking.</li>
            <li>Time Management.</li>
            <li>Attention to detail.</li>
            <li>Strong verbal and written communication skills.</li>
          </ul>

          <div className="h5 mb-3">Required Candidates: 10</div>
          <div className="h5 mb-3">Salary: As per the government standard.</div>

          
          <br /><hr /><br />

          {/* <Link onClick={() => load("/apply")} className="cr-btn btn">Apply now</Link> */}
          
         

          {/* ------------------ Staff Nurse ------------------ */}
          <div className="crr-p">Staff Nurse</div>
          <div className="mb-3">Posted on 22 November 2025</div>

          <div className="h5 mb-3">Job Description</div>
          <div className="w-75 mb-3">
            She is responsible for direct patient care, which includes administering medication, monitoring vital signs, and maintaining medical records.
          </div>

          <div className="h5 mb-3">Job Responsibilities</div>
          <ul className="list-disc">
            <li>Patient care: Assess patient needs, provide medical treatments, administer medications, and monitor patient conditions and progress.</li>
            <li>Documentation: Keep detailed and accurate medical records of patient assessments, treatments, and progress.</li>
            <li>Collaboration: Work with physicians, registered nurses, and other healthcare team members to develop and execute patient care plans.</li>
            <li>Patient and family education: Educate patients and their families about their medical conditions, treatment plans, and preventative care measures.</li>
            <li>Equipment and environment: Operate and monitor medical equipment and maintain a clean, safe, and organized patient environment.</li>
            <li>Coordination: Facilitate patient admissions, transfers, and discharges, and assist with care transitions.</li>
            <li>Detailed Documentation: Ensure accurate, timely, and comprehensive charting of all assessments, interventions, and patient responses.</li>
            <li>Team Collaboration: Communicate critical patient status and assessment findings clearly and promptly to the physician and healthcare team.</li>
            <li>Patient Advocacy: Provide crucial emotional support and education to patients and families regarding treatment plans and difficult ethical decisions.</li>

          </ul>

          <div className="h5 mb-3">Skills</div>
          <ul className="list-disc">
            <li>Time Management.</li>
            <li>Proven experience as a paramedic.</li>
            <li>Knowledge of medical procedures, terminology and medications.</li>
            <li>Ability to stay calm and make the right decisions in adverse conditions.</li>
            <li>Excellent working knowledge of minor medical equipment and devices.</li>
          </ul>

          <div className="h5 mb-3">Required Candidates: 20</div>
          <div className="h5 mb-3">Salary: As per the government standard.</div>

          

          <br /><hr /><br />

          <Link
          href = "mailto:hrd@neurohospital.com.np?subject=Applying%20for%20Vacancy"
          
          className="cr-btn btn"
        >
          Apply now
        </Link>


        </div>
      </div>
    </>
  );
};

export default Career;
