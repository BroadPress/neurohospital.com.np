'use client'
import Link from "next/link";
import React, { useState } from "react";

const SectionSix = () => {
  const list = [
    {
      id: 1,
      name: "Neurology",
      firstImg: "./homepage/neurology1.png",
      secondImg: "./homepage/neurology.jpg",
      description:
        "The branch of medicine concerned with the study and treatment of disorders of the nervous system. The nervous system is a complex, sophisticated system that regulates and coordinates body activities. The neurologist treats disorders that affect the brain, spinal cord, and nerves, such as:",
      li1: "Cerebrovascular Disease",
      li2: "Headache Disorders",
      li3: "Infections of the Brain",
      li4: "Movement Disorders",
      li5: "Seizure Disorders",
      li6: "Spinal cord Disorders",
    },
    {
      id: 2,
      name: "Cardiology",
      firstImg: "./homepage/cardiology1.png",
      secondImg: "./homepage/cardiology.jpg",
      description:
        "Cardiologists provide the continuing care of patients with cardiovascular disease, performing basic studies of heart function and supervising all aspects of therapy, including the administration of drugs to modify heart functions.",
      li1: "Coronary Heart Disease",
      li2: "Cerebrovascular Disease",
      li3: "Rheumatic Heart Disease",
      li4: "Peripheral Arterial Disease",
      li5: "Congenital Heart Disease",
      li6: "Deep Vein Thrombosis",
    },
    {
      id: 3,
      name: "Neurosurgery",
      firstImg: "./homepage/neurosurgery1.png",
      secondImg: "./homepage/neurosugery.jpg",
      description:
        "It is the medical specialty concerned with the diagnosis and treatment of patients with injury to, or diseases/disorders of the brain, spinal cord and spinal column, and peripheral nerves within all parts of the body.",
      li1: "Epilepsy disorders",
      li2: "Affecting Nerves",
      li3: "Multiple Sclerosis",
      li4: "Strokes and Aneurysm",
      li5: "Affecting Spinal Cord",
      li6: "Chronic Pain",
    },
    {
      id: 4,
      name: "Orthopedic",
      firstImg: "./homepage/bone1.png",
      secondImg: "./homepage/orthopedic.jpg",
      description:
        "Orthopaedics is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system. This complex system, which includes your bones, joints, ligaments, tendons, muscles, and nerves, allows you to move, work, and be active.",
      li1: "Fever",
      li2: "Loss of Ability to Walk",
      li3: "Swelling of Joints",
      li4: "Crunching Sound",
      li5: "Cerebral Palsy",
      li6: "Down Syndrome",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(list[0]);
  const handleCardClick = (id:any) => {
    const selected = list.find((item) => item.id === id);
    setSelectedCard(selected as any);
  };

  return (
    <>
      <div className="card-list">
        <div className="list-row d-flex row">
          {list.map((items) => (
            <div
              key={items.id}
              className="list-col cols col-md-3 col-sm-12"
              onClick={() => handleCardClick(items.id)}
            >
              <p
                className={`lists-btn btn ${
                  selectedCard.id === items.id ? "selected" : ""
                }`}
              >
                <img
                  src={items.firstImg}
                  alt="list-img"
                  className="lists-img"
                />
                <b className="lists-name">{items.name}</b>
              </p>
            </div>
          ))}
        </div>

        {selectedCard && (
          <div className="show-lists">
            <div className="card-content">
              <div className="card-content-1">
                <img
                  src={selectedCard.secondImg}
                  alt={selectedCard.name}
                  className="img-list-pic"
                />
              </div>
              <div className="card-content-2">
                <h2 className="card-cnt-1">{selectedCard.name}</h2>
                <p className="card-cnt-2">{selectedCard.description}</p>
                <div className="card-cnt-ul">
                  <div className="card-cnt-li">
                    <div>
                      <i className="fa-solid fa-angles-right"></i>&nbsp;
                      {selectedCard.li1}
                    </div>
                    <div>
                      <i className="fa-solid fa-angles-right"></i>&nbsp;
                      {selectedCard.li2}
                    </div>
                    <div>
                      <i className="fa-solid fa-angles-right"></i>&nbsp;
                      {selectedCard.li3}
                    </div>
                  </div>
                  <div className="card-cnt-li">
                    <div>
                      <i className="fa-solid fa-angles-right"></i>&nbsp;
                      {selectedCard.li4}
                    </div>
                    <div>
                      <i className="fa-solid fa-angles-right"></i>&nbsp;
                      {selectedCard.li5}
                    </div>
                    <div>
                      <i className="fa-solid fa-angles-right"></i>&nbsp;
                      {selectedCard.li6}
                    </div>
                  </div>
                </div>
                <Link href ="https://neuro.danphecare.com/"className="card-cnt-btn btn text-light">Book an Appointment</Link>
              </div>
            </div>
           
          </div>

        )}
      </div>
    </>
  );
};

export default SectionSix;
