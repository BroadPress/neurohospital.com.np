'use client'
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";
import '@/public/assets/css/contact.css'
const Contact = () => {
  const name = "Contact Us";

  return (
    <>
      <Breadcrumb name1={name} name2={name} />
      <div className="contacts">
        <div className="ct-sec1">
          <div className="ct1-col1">
            <p className="ct-p1">Departments & Helplines</p>
            <p style={{textAlign:"justify"}}>
              Reaching our hospital is very easy. For emergency cases, we
              provide round-the-clock services. For other cases and
              appointments, you can fill out our online form.
            </p>
            <p>
              We also provide online counseling facilities via WhatsApp, Viber,
              Zoom, Jio Video Call, etc.
            </p>
            <div className="ct-div1">
              <div className="ct-col2">
                <div className="ct-p2">Emergency Helpline</div>
                <div>
                  Toll Free :{" "}
                  <Link className="ct-p3" href="tel:166-021-52777">
                    166-021-52777
                  </Link>{" "}
                </div>
                <div>
                  Hotline :{" "}
                  <Link className="ct-p3" href="tel:+977-21-416267">
                    {" "}
                    +977-21-416267
                  </Link>{" "}
                </div>
              </div>
              <div className="ct-col1">
                <div className="ct-p2">Ambulance</div>
                <div>
                  Tel :{" "}
                  <Link className="ct-p3" href="tel:+977-21-417484">
                    +977-21-417484
                  </Link>{" "}
                </div>
                <div>
                  Tel :{" "}
                  <Link className="ct-p3" href="tel:+977-21-417475">
                    +977-21-417475
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="ct-div1">
              <div className="ct-col1">
                <div className="ct-p2">Outreach Department</div>
                <div className="ct-p4">Bhaarat Shrestha</div>
                <div>WhatsApp : +977-9852032994</div>
                <div>
                  WhatsApp Call :{" "}
                  <Link href="https://d.sriyog.com/neuro" className="ct-p5" target="_blank">
                    Call now
                  </Link>{" "}
                </div>
              </div>
              <div className="ct-col2">
                <div className="ct-p2">Grievances</div>
                <div className="ct-p4">Mr. Matrika Pokharel</div>
                <div>WhatsApp : +977-980-4062054 </div>
                <div>
                  WhatsApp Call :{" "}
                  <Link href="https://d.sriyog.com/neuro" className="ct-p5" target="_blank">
                    Call now
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="ct1-col2 text-center">
            <div data-wow-delay="0.2s">
              <div className="contact-map-frame">
                <iframe
                  className="contact-i-frame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57153.27612643293!2d87.20819204863277!3d26.453157900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef745000000001%3A0x2e285e8569816c06!2sNeuro%20Cardio%20%26%20Multispeciality%20Hospital%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1695881679277!5m2!1sen!2snp"
                  width="450"
                  height="500"
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
        <div className="ct-sec2 text-center ">
          <p className="text-dark h2">Quick Contact</p>
          <p>Quick contact the relevant people.</p>
        </div>
        <br />
        <br />
        <div className="ct-sec3">
          <div className="ct-s3-col1 text-center ">
            <img src="/assets/images/contact/c1.png" alt="img1" />
            <p className="ct-p5">P.R.O.</p>
            <p className="ct-p6">Dibya Rajbhandari (She/Her)</p>
            <p className="ct-p7">pro@neurohospital.com.np</p>
            <Link
            target="_blank"
              href="https://d.sriyog.com/neuro"
              className="ct-s3-btn btn"
            >
              <i className="fa-brands fa-whatsapp text-light"></i>{" "}
              &nbsp;WhatsApp
            </Link>
            
          </div>
          <div className="ct-s3-col1 text-center ">
            <img src="/assets/images/contact/c2.png" alt="img1" />
            <p className="ct-p5">Frontdesk</p>
            <p className="ct-p6">Tanka Gautam (He/Him)</p>
            <p className="ct-p7">frontdesk@neurohospital.com.np</p>
            <Link
            target="_blank"
              href="https://d.sriyog.com/neuro"
              className="ct-s3-btn btn"
            >
              <i className="fa-brands fa-whatsapp text-light"></i>&nbsp;WhatsApp
            </Link>
          </div>
          <div className="ct-s3-col1 text-center ">
            <img src="/assets/images/contact/c3.png" alt="img1" />
            <p className="ct-p5">Counselor</p>
            <p className="ct-p6">Reena Bhattarai (She/Her)</p>
            <p className="ct-p7">counselor@neurohospital.com.np</p>
            <Link
            target="_blank"
              href="https://d.sriyog.com/neuro"
              className="ct-s3-btn btn"
            >
              <i className="fa-brands fa-whatsapp text-light"></i>&nbsp;WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
