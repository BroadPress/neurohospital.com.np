'use client'
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import '@/public/assets/css/privacy-policy.css'

const PrivacyPolicy = () => {

  const name1 = "Privacy Policy";
  return (
    <>
      <Breadcrumb name1={name1} name2={name1} />
      <div className="pp-div">
        <div className="pp-div1">
          <p className="pp-p1">Privacy Policy</p>
          <p className="pp-p2" style={{ textAlign: 'justify' }}>
            Hospitals have a legal and ethical obligation to protect the privacy
            of their patients' medical information. This information is highly
            sensitive and can be used for a variety of purposes, including
            making decisions about insurance coverage, employment, and housing.
            Most hospitals have a privacy policy in place that outlines how they
            collect, use, and share patient information. This policy should be
            available to patients upon request.
          </p>
          <p className="pp-p3">
            Here are some of the key points that are typically included in a
            hospital's privacy policy:
          </p>
          <div>
            <div className="pp-p-div d-flex">
              <i className="fa-solid fa-angles-right"></i> &nbsp;What information is
              collected?
            </div>
            <p className="pp-p4">
              Hospitals typically collect a variety of information about their
              patients, including name, address, date of birth, insurance
              information, medical history, and treatment plans.
            </p>
          </div>
          <div>
            <div className="pp-p-div d-flex">
              <i className="fa-solid fa-angles-right"></i> &nbsp;How is the
              information used?
            </div>
            <p className="pp-p4">
              Hospitals use patient information to provide care, bill for
              services, and conduct research. They may also share information
              with other healthcare providers, insurance companies, and
              government agencies.
            </p>
          </div>
          <div>
            <div className="pp-p-div d-flex">
              <i className="fa-solid fa-angles-right"></i>&nbsp;Who has access to the
              information?
            </div>
            <p className="pp-p4">
              Hospitals typically only allow employees who need to know the
              information to access it. They may also share information with
              other healthcare providers who are involved in the patient's care.
            </p>
          </div>
          <div>
            <div className="pp-p-div d-flex">
              <i className="fa-solid fa-angles-right"></i> &nbsp;How is the
              information protected?
            </div>
            <p className="pp-p4">
              Hospitals typically have security measures in place to protect
              patient information from unauthorized access, use, or disclosure.
              These measures may include encryption, password protection, and
              physical security.
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            Patients have certain rights under the Health Insurance Portability
            and Accountability Act (HIPAA), which is a federal law that protects
            the privacy of health information. These rights include the right to
            access their medical records, the right to request that their
            information be corrected, and the right to limit how their
            information is used and shared.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Patients should review their hospital's privacy policy to understand
            how their information is being used and to learn about their rights.
            They should also ask questions if they have any concerns about their
            privacy.
          </p>
          <div className="pp-div2">
            <div className="pp-p5">What information do we collect?</div>
            <div className="pp-p6">
              We collect a variety of information about you, including:
            </div>
            <div>
              - Your name, address, date of birth, and contact information.
            </div>
            <div>- Your insurance information.</div>
            <div>
              - Your medical history, including any allergies or sensitivities.
            </div>
            <div>- Your test results and treatment plans.</div>
            <div>- Information about your visits to our hospital.</div>
          </div>
          <div className="pp-div2">
            <div className="pp-p5">How do we use your information?</div>
            <div className="pp-p6">We use your information to:</div>
            <div>- Provide you with care.</div>
            <div>- Bill for services.</div>
            <div>- Conduct research.</div>
            <div>- Comply with legal and regulatory requirements.</div>
          </div>
          <div className="pp-div2">
            <div className="pp-p5">Who has access to your information?</div>
            <p>
              We only allow employees who need to know your information to
              access it. We may also share your information with other
              healthcare providers who are involved in your care, insurance
              companies, and government agencies.
            </p>
          </div>
          <div className="pp-div2">
            <div className="pp-p5">How do we protect your information?</div>
            <p>
              We have security measures in place to protect your information
              from unauthorized access, use, or disclosure. These measures may
              include encryption, password protection, and physical security.
            </p>
          </div>
          <div className="pp-div2">
            <div className="pp-p5">Your rights</div>
            <p>
              You have certain rights under the Health Insurance Portability and
              Accountability Act (HIPAA) regarding your health information.
              These rights include:
            </p>
            <div>- The right to access your medical records.</div>
            <div>
              - The right to request that your information be corrected.
            </div>
            <div>
              - The right to limit how your information is used and shared.
            </div>
          </div>
          <div className="pp-div2">
            <div className="pp-p5">To exercise your rights?</div>
            <p>
              To exercise your rights, please contact our Outreach Department at
              outreach@neurohospital.com.np
            </p>
          </div>
          <div className="pp-div2">
            <div className="pp-p5">Changes to this privacy policy</div>
            <p>
              We may update this privacy policy from time to time. If we make
              any changes, we will post the updated policy on our website.
            </p>
          </div>
          <div className="pp-div2">
            <div className="pp-p5">Contact us</div>
            <p>
              If you have any questions about this privacy policy, please
              contact our Outreach Officer at outreach@neurohospital.com.np
            </p>
          </div>
        </div>
        <div className="pp-div3">
          <hr/>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
