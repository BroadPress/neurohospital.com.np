import React from "react";

const AboutCpnt = () => {
  const list = [
    {
      name: "Professional Team",
      des: " Team-based model requires with a new way of thinking about hospital responsibilities and leadership.",
      icon: "fa-solid fa-user-doctor",
    },
    {
      name: "Modern Equipment",
      des: " Structural elements, mechanisms and control components and include interfaces for convenient use.",
      icon: "fa-solid fa-microscope",
    },
    {
      name: "Premium Care",
      des: "Receive exclusive benefits in a relaxing environment with priority access and appointments to suit your lifestyle",
      icon: "fa-solid fa-bed",
    },
    {
      name: "Emergency Care",
      des: "  We provide services for the public organizations whose job is to take quick action to deal with emergencies when it occur. ",
      icon: "fa-solid fa-truck-medical",
    },
    {
      name: "24 Hrs Services",
      des: " 24-hour emergency line/helpline/hotline. Responding to market pressure, they are offering 24-hour free telephone access.",
      icon: "fa-solid fa-kit-medical",
    },
    {
      name: "Home Service",
      des: " Home Services means performance of or assistance with functions and activities related to housing, personal care and attendance.",
      icon:"fa-solid fa-house-user",
    },
  ];
  return (
    <>
      <div className="abu-row row">
        {list.map((item) => (
          <div key={item.name} className="abu-col cols col-md-5 col-sm-12">
            <div className="abu-col-div d-flex">
              <div className="abucol-1">
                <i className={item.icon}></i>
              </div>
              <div className="abucol-2">
                <div className="abcl-2-1">{item.name}</div>
                <div className="abcl-2-2">{item.des}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutCpnt;
