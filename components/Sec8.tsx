import { useRouter } from "next/navigation";
import React from "react";
import '../public/assets/css/blogs.css'

const Sec8 = () => {
  const router = useRouter();
  function load(link:any) {
    router.push(link);
    window.location.reload();
  }
  const List = [
    {
      id: 1,
      pic: "/assets/images/homepage/sec-8-1.jpg",
      name: "Dandruff Demystified",
      date: "8 February 2026",
      des: "Dandruff happens due to scalp imbalance, dryness, or fungal overgrowth, especially in winter. Proper shampoos and scalp care help keep it under control.",
      link: "/blog/dandruff-demystified",
    },
    {
      id: 2,
      pic: "/assets/images/homepage/sec-8-2.jpg",
      name: "Migraine Headache",
      date: "01 Feburary 2024",
      des: "Migraine is a common disorder which causes a disabling headache usually associated with nausea / vomiting and/ or light and Sound sensitivity.",
      link: "/blog/migraine-headache",
    },
    {
      id: 3,
      pic: "/assets/images/homepage/sec-8-3.jpg",
      name: "What is Anxiety?",
      date: "07 Feburary 2024",
      des: "Anxiety is a natural human emotion characterized by feelings of worry, nervousness, apprehension, and dread. It can manifest.",
      link: "/blog/what-is-anxiety",
    },
  ];
  return (
    <>
      <div className="blogs-row row ">
        {List.map((card) => (
          <div key={card.id} className="blogs-col cols col-md-4 col-sm-12">
            <div  className="blogs-col-div shadow ">
              <img src={card.pic} alt={card.name} className="blogs-img" />
              <p className="mx-3">
                <span onClick={() => load(card.link)} className="blogs-card-p1">
                  {card.name}
                </span>
              </p>
              <p className="blogs-p3 mx-3">{card.des}</p>
              <p className="blog-date mx-3">Date posted : {card.date}</p>
              <p className="text-center">
                
                <span onClick={() => load(card.link)} className="blogs-btn btn">
                  Read More
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sec8;
