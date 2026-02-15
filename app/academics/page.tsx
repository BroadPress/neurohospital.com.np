'use client'
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";
import '@/public/css/academics.css'
const Academics = () => {

  const name1 = "Academics";
  return (
    <>
      <Breadcrumb name1={name1} name2={name1} />
      <div className="A-sec">
        <div className="A-sec-1 mb-3">
          <div className="A-sec-1-div1">
            <img src="/acdemics/a1.jpg" alt="a1" />
          </div>
          <div className="A-sec-1-div2" style={{ textAlign: 'justify' }}>
            <p >
              The Neuro Cardio & Multispeciality Hospital, located on Jahada
              Road in Biratnagar, has initiated a FCPS training (equivalent to
              Master of Medicine-MD) program in collaboration with the renowned{" "}
              <Link href="https://www.cpsp.edu.pk/" target="_blank">CPSP</Link> Pakistan. This partnership marks a significant step forward in
              advancing medical education in the region, providing aspiring
              doctors with access to world-class training and expertise.
            </p>
            <p>
              The MD course is designed to meet international standards,
              incorporating modern medical practices and cutting-edge research.
              The curriculum covers a wide range of specialties, with a strong
              emphasis on neurology, cardiology, and other multidisciplinary
              areas. Students will benefit from hands-on experience, working
              alongside experienced professionals at the Neuro Cardio &
              Multispeciality Hospital, which is known for its state-of-the-art
              facilities and commitment to patient care.
            </p>
            <p>
              The collaboration with <Link href="https://www.cpsp.edu.pk/" target="_blank">CPSP</Link> Pakistan brings in an added
              layer of expertise, with faculty members and specialists from
              Pakistan contributing to the academic and clinical training. This
              cross-border educational initiative aims to produce highly skilled
              medical professionals who are equipped to meet the challenges of
              modern healthcare systems.
            </p>
          </div>
        </div>
        <div className="A-sec-2">
          <p className="As-p2 text-center text-dark my-4" >Courses</p>
          <div className="A-sec2-row">
            <div className="A-sec2-col1">
              <p className="As-p3  text-dark mb-2">Neurosurgery</p>
              <div className="As-p4" style={{ textAlign: 'justify' }}>
                This course provides a comprehensive introduction to
                neurosurgery, covering essential topics such as neuroanatomy,
                surgical techniques, and patient management. Students will gain
                hands-on experience in the operating room, learn to assess
                neurological conditions, and develop critical decision-making
                skills necessary for neurosurgical practice.
              </div>
            </div>
            <div className="A-sec2-col2">
              <img src="/acdemics/a2.png" alt="a2" />
            </div>
          </div>
        </div>
        <div className="A-sec-3 ">
          <div className="A-sec3-col1">
            <img src="/acdemics/a3.png" alt="a3" />
          </div>
          <div className="A-sec3-col2">
            <p className="As-p3 text-dark mb-2">Cardiology</p>
            <p className="As-p4" style={{ textAlign: 'justify' }}>
              Explore the fundamentals of cardiology, including heart function,
              common diseases, and current treatment options. This course is
              tailored for medical students and healthcare professionals who
              want to specialize in cardiac care.
            </p>
          </div>
          <div className="A-sec3-col1-c">
            <img src="/acdemics/a3.png" alt="a3" />
          </div>
        </div>
        <div className="A-sec-4">
          <div className="A-sec4-col1">
            <p className="As-p3  text-dark mb-2">General Medicine</p>
            <p className="As-p4" style={{ textAlign: 'justify' }}>
              This course provides a comprehensive introduction to general
              medicine, covering essential topics such as anatomy, physiology,
              pathology, pharmacology, and diseases. Students will gain hands-on
              experience in the operating room, learn to assess patients, and
              develop critical decision-making skills necessary for medical
              practice.
            </p>
          </div>
          <div className="A-sec4-col2">
            <img src="/acdemics/a4.png" alt="a5" />
          </div>
        </div>
        <div className="A-sec-3 d-flex">
          <div className="A-sec3-col1">
            <img src="/acdemics/a5.png" alt="a3" />
          </div>
          <div className="A-sec3-col2">
            <p className="As-p3  text-dark mb-2">Orthopedic Surgery</p>
            <p className="As-p4" style={{ textAlign: 'justify' }}>
              This course provides a comprehensive introduction to orthopedic
              surgery, covering essential topics such as anatomy, physiology,
              pathology, pharmacology, and diseases. Students will gain hands-on
              experience in the operating room, learn to assess patients, and
              develop critical decision-making skills necessary for medical
              practice.
            </p>
          </div>
          <div className="A-sec3-col1-c">
            <img src="/acdemics/a5.png" alt="a3" />
          </div>
        </div>
        <div className="A-sec-2">
          <div className="A-sec2-row">
            <div className="A-sec2-col1">
              <p className="As-p3  text-dark mb-2">Surgery</p>
              <p className="As-p4" style={{ textAlign: 'justify' }}>
                This course provides a comprehensive introduction to surgery,
                covering essential topics such as anatomy, physiology,
                pathology, pharmacology, and diseases. Students will gain
                hands-on experience in the operating room, learn to assess
                patients, and develop critical decision-making skills necessary
                for medical practice.
              </p>
            </div>
            <div className="A-sec2-col2">
              <img src="/acdemics/a6.png" alt="a2" />
            </div>
          </div>
        </div>
        <div className="A-sec-5">
            <p className="As-p3  text-center text-dark mb-3">CTEVT Courses</p>
          <p className="As-p4" style={{ textAlign: 'justify' }}>
             The Council for Technical Education and Vocational
            Training (CTEVT) constituted in 1989 (2045 B.S.) is a national
            autonomous apex body of Technical and Vocational Education and
            Training (TVET) sector committed for the production of technical and
            skillful human resources required to the nation. It mainly involves
            in policy formulation, quality control, preparation of competency
            based curriculum, developing skill standards of various occupations
            and testing the skills of the people, conduct various research
            studies and training needs assessment etc.
          </p>
        </div>
        <div className="A-sec-3 d-flex">
          <div className="A-sec3-col1">
            <img src="/acdemics/a7.png" alt="a3" />
          </div>
          <div className="A-sec3-col2">
            <p className="As-p3  text-dark mb-2">PCL Nursing</p>
            <p className="As-p4" style={{ textAlign: 'justify' }}>
              This course provides a comprehensive introduction to PCL nursing,
              covering essential topics such as anatomy, physiology, pathology,
              pharmacology, and diseases. Students will gain hands-on experience
              in the operating room, learn to assess patients, and develop
              critical decision-making skills necessary for medical practice.
            </p>
          </div>
          <div className="A-sec3-col1-c">
            <img src="/acdemics/a7.png" alt="a3" />
          </div>
        </div>
        <div className="A-sec-2">
          <div className="A-sec2-row">
            <div className="A-sec2-col1">
              <p className="As-p3  text-dark">Health Assistant </p>
              <p className="As-p4" style={{ textAlign: 'justify' }}>
                This course provides a comprehensive introduction to Health
                Assistant, covering essential topics such as anatomy,
                physiology, pathology, pharmacology, and diseases. Students will
                gain hands-on experience in the operating room, learn to assess
                patients, and develop critical decision-making skills necessary
                for medical practice.
              </p>
            </div>
            <div className="A-sec2-col2">
              <img src="/acdemics/a8.png" alt="a2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Academics;
