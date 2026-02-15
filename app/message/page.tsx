'use client'
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";
import '@/public/css/message.css'
const Message = () => {
  const name1 = "Message";
  const name2 = "Message";

  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec5Ref = useRef(null);
  const sec6Ref = useRef(null);

  const [isSec1Visible, setIsSec1Visible] = useState(false);
  const [isSec2Visible, setIsSec2Visible] = useState(false);
  const [isSec3Visible, setIsSec3Visible] = useState(false);
  const [isSec4Visible, setIsSec4Visible] = useState(false);
  const [isSec5Visible, setIsSec5Visible] = useState(false);
  const [isSec6Visible, setIsSec6Visible] = useState(false);

  useEffect(() => {
    const sec1Element = sec1Ref.current;
    const sec2Element = sec2Ref.current;
    const sec3Element = sec3Ref.current;
    const sec4Element = sec4Ref.current;
    const sec5Element = sec5Ref.current;
    const sec6Element = sec6Ref.current;
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec1Visible(true);
          observer1.unobserve(sec1Element as any);
        }
      },
      { threshold: 0.2 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec2Visible(true);
          observer2.unobserve(sec2Element as any);
        }
      },
      { threshold: 0.2 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec3Visible(true);
          observer3.unobserve(sec3Element as any);
        }
      },
      { threshold: 0.3 }
    );
    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec4Visible(true);
          observer4.unobserve(sec4Element as any);
        }
      },
      { threshold: 0.3 }
    );
    const observer5 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec5Visible(true);
          observer5.unobserve(sec5Element as any);
        }
      },
      { threshold: 0.3 }
    );
    const observer6 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec6Visible(true);
          observer6.unobserve(sec6Element as any);
        }
      },
      { threshold: 0.3 }
    );
    if (sec1Element) observer1.observe(sec1Element);
    if (sec2Element) observer2.observe(sec2Element);
    if (sec3Element) observer3.observe(sec3Element);
    if (sec4Element) observer4.observe(sec4Element);
    if (sec5Element) observer5.observe(sec5Element);
    if (sec6Element) observer6.observe(sec6Element);

    return () => {
      if (sec1Element) observer1.unobserve(sec1Element);
      if (sec2Element) observer2.unobserve(sec2Element);
      if (sec3Element) observer3.unobserve(sec3Element);
      if (sec4Element) observer4.unobserve(sec4Element);
      if (sec5Element) observer5.unobserve(sec5Element);
      if (sec6Element) observer6.unobserve(sec6Element);
    };
  }, []);

  return (
    <>
      <Breadcrumb name1={name1} name2={name2} />
      <div className="m-sec1" style={{ textAlign: 'justify' }}>
        <div className="m-sec1-div">
          <div
            ref={sec1Ref}
            className={`m-sec1-div1 ${isSec1Visible ? "show" : ""}`}
          >
            <img src="/message/msg1.png" alt="msg-1" />
          </div>
          <div
            ref={sec2Ref}
            className={`m-sec1-div2 ${isSec2Visible ? "show" : ""}`}
          >
            <div className="msd2-p1 text-secondary">
              Message from Operational Director
            </div>
            <div className="msd2-p2">Best Health Care Services</div>
            <div className="ms2d2-p3">
              We simply say, <b>"Neuro Hospital - Biratnagar"</b> is{" "}
              <b>"the last lifeline"</b> and we have proved it by saving
              thousands of critical cases and restoring happiness to the
              families. Our managed medical services have been trusted by a wide
              range of patients from Nepal, India, Bangladesh, etc.
            </div>
            <div className="ms2d2-p3 mt-3 mb-3">
              Kindly express your feedback suggestions,complaintsn, or
              grievances, or book an appointment.
            </div>
            <div className="msd2-p5 mt-3 mb-3">
              Mr. Rajesh Bhattarai | Operational Director
            </div>
            <div className="ms2d2-p4 mb-3 mt-2 ">
            
              <Link href="mailto:rajesh@neurohospital.com.np">
                rajesh@neurohospital.com.np
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="m-sec2" style={{ textAlign: 'justify' }}>
        <div className="m-sec2-div">
          <div
            ref={sec3Ref}
            className={`m-sec2-div1 ${isSec3Visible ? "show" : ""}`}
          >
            <img src="/message/msg2.png" alt="msg-2" />
          </div>
          <div
            ref={sec4Ref}
            className={`m-sec2-div2 ${isSec4Visible ? "show" : ""}`}
          >
            <div className="msd2-p1">Message from Academic Director</div>
            <div className="msd2-p2">World-class Medical Education</div>
            <div className="ms2d2-p3 mb-3">
              Dear Colleagues, Students, and Members of Our Hospital Community,
            </div>
            <div className="ms2d2-p3">
              I am honored to share this message for our hospital’s website a
              tribute to our journey, achievements, and commitment to excellence
              in medical education and patient care. Neuro Cardio &
              Multispeciality Hospital exemplifies the synergy of world-class
              medical practice, advanced research, and the nurturing of future
              healthcare leaders.
            </div>
            <div className="ms2d2-p3 mb-3">
              n recent years, we’ve expanded both our services and our
              educational programs, creating a learning hub where aspiring
              professionals gain hands-on experience under expert mentorship.
              This balance of rigorous training and compassionate care ensures
              our graduates are not only skilled but empathetic leaders in the
              field.
            </div>
            <div className="ms2d2-p3 mb-3">
              Though we’ve faced challenges, particularly through global health
              crises, our community’s resilience and dedication have only
              strengthened our commitment to high standards in both clinical and
              academic pursuits.
            </div>
            <div className="ms2d2-p3 mb-3">
              As we look to the future, we remain focused on fostering
              innovation and embracing new medical technologies that will
              enhance both our care and education. This serves as a reminder of
              our progress and a vision of the impactful future we are building
              together.
            </div>
            <div className="ms2d2-p3 mb-3">
              Thank you for your dedication and hard work.
            </div>
            <div className=" mt-3 mb-3">
              Dr. Navin Kumar Karna | Academic Director
            </div>
            <div className="ms2d2-p4 mb-3 ">
              <Link href="mailto:drkarna@neurohospital.com.np">
                drkarna@neurohospital.com.np
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="m-sec3" style={{ textAlign: 'justify' }}>
        <div className="m-sec3-div">
          <div
            ref={sec5Ref}
            className={`m-sec3-div1 ${isSec5Visible ? "show" : ""}`}
          >
            <img src="/message/msg4.png" alt="msg-4" />
          </div>
          <div
            ref={sec6Ref}
            className={`m-sec3-div2 ${isSec6Visible ? "show" : ""}`}
          >
            <div className="msd2-p1">
              Message from the desk of the Medical Director
            </div>
            <div className="msd2-p2">Deep Sense of Responsibility</div>
            <div className="ms2d2-p3 mb-3">
              Health is a global right to any community. Throughout the globe
              public and private institutions have been playing key roles in
              improving health status. Low- and middle-income countries like
              Nepal and India have been facing higher burden of infectious
              disease (eg. tuberculosis, pneumonia, malaria, dengue) and
              non-communicable disease (cardiovascular, diabetes,
              cerebrovascular, road traffic accidents) as compared to high
              incomes one. The private health sector has played a key role in
              supporting the gaps that have been partly addressed by the public
              sector.
            </div>
            <div className="ms2d2-p3 mb-3">
              Neuro cardio & Multispecialty hospital is always ready to help the
              people of Eastern Nepal and neighboring district of Bihar and
              Bengal with updated treatment protocol, through competent doctors’
              advance equipment and patient friendly infrastructure and staffs.
              Nearly two and half decades of services experience has taught us
              to customize the care for nearly 500 plus OPD traffic per day and
              70% occupancy of the 200 beds. We work in team spirit and confine
              our services with the ethics of beneficence, nonmaleficence,
              autonomy, and justice. As a medical director I will put my efforts
              into promoting health professional’s efficacy and well-being of
              patients, families, and communities.
            </div>
            <div className="mb-3">Dr. Vivek Kattel | Medical Director</div>
            <div className="ms2d2-p3 mb-3">
              MBBS MD (Internal Medicine), Fellowship EBM and Infectious
              Disease, Fellowship Rheumatology & Clinical Immunology
            </div>
            <div className="ms2d2-p4 mb-3">
              <Link href="mailto:drkattel@neurohospital.com.np">
               drkattel@neurohospital.com.np
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
