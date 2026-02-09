import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const cards = [
  {
    id: 1,
    img: "/assets/images/homepage/sl1.png",
    name: "NEUROLOGY",
    description:
      "The branch of medicine concerned with the study and treatment of disorders of the nervous system. It is a complex system that regulates and coordinates body activities. ",
  },
  {
    id: 2,
    img: "/assets/images/homepage/sl2.png",
    name: "NEUROSURGERY",
    description:
      "The branch of medicine concerned with the study and treatment of disorders of the nervous system. It is a complex system that regulates and coordinates body activities. ",
  },
  {
    id: 3,
    img: "/assets/images/homepage/sl3.png",
    name: "CARDIOLOGY",
    description:
      "A branch of medicine that uses imaging technology to diagnose and treat disease. Radiology may be divided into two different areas, diagnostic radiology and interventional radiology.",
  },
  {
    id: 4,
    img: "/assets/images/homepage/sl4.png",
    name: "ORTHOPEDIC",
    description:
      " An X-ray, also called a radiograph, sends radiation through the body. Areas with high levels of calcium (bones and teeth) block the radiation, causing them to appear white on the image.",
  },
  {
    id: 5,
    img: "/assets/images/homepage/sl5.png",
    name: "GENERAL SURGERY",
    description:
      " Medical specialty dealing with the diagnosis and treatment of diseases and abnormalities involving the heart and blood vessels. Cardiology is a medical, not surgical, discipline.",
  },
  {
    id: 6,
    img: "/assets/images/homepage/sl6.png",
    name: "PEDIATRICS",
    description:
      "It is a noninvasive medical imaging test that produces  detailed images of almost every internal structure in the human body, including the organs, bones, muscles and blood.",
  },
  {
    id: 7,
    img: "/assets/images/homepage/sl7.png",
    name: "GYNAECOLOGY",
    description:
      "Gynaecology is the area of medicine concerned with conditions affecting the female reproductive system. It is often paired with the field of obstetrics.",
  },
  {
    id: 8,
    img: "/assets/images/homepage/sl8.png",
    name: "NEPHROLOGY",
    description:
    "It comprises of both medicine as well as surgical fields.While many of the it illnesses need hormonal and other pharmacological management, cancers, fibroids etc."},
];

const CardSlider = () => {
  return (
    <>
        <Swiper
        className="swiper"
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 3,
          reverseDirection: true,
          pauseOnMouseEnter:true,
        }}
        speed={7000}
        pagination={{ clickable: true }}
        modules={[Autoplay, FreeMode,Pagination]}
        breakpoints={{
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 4 }, 
          1200: { slidesPerView: 4 } 
        }}
      > 
        {cards.map((card) => (
          <SwiperSlide key={card.id}>       
            <div className="card slider-card">
              <div className=" slider-div">
                <img
                  src={card.img}
                  alt={card.name}
                  className="slider-card-img"
                />
                <h3 className="slider-card-h3">{card.name}</h3>
                <p className="slider-card-p mx-2" style={{ textAlign: 'justify' }}>{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
