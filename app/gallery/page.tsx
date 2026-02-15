'use client'
import React, {  useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import '@/public/css/gallery.css'
const Gallery = () => {

  const name1 = "Our Gallery";
  const name2 = "Hospital Gallery";
  const list1 = [
    { id: 1, pic: "/gallery/g1.jpg" },
    { id: 2, pic: "/gallery/g2.jpg" },
    { id: 3, pic: "/gallery/g4.jpg" },
    { id: 4, pic: "/gallery/g5.jpg" },
    { id: 5, pic: "/gallery/g6.jpg" },
    { id: 6, pic: "/gallery/g8.jpg" },
    { id: 7, pic: "/gallery/g9.jpg" },
    { id: 8, pic: "/gallery/g10.jpg" },
    { id: 9, pic: "/gallery/g12.jpg" },
    { id: 10, pic: "/gallery/g13.jpg" },
    { id: 11, pic: "/gallery/g14.jpg" },
    { id: 12, pic: "/gallery/g15.jpg" },
    { id: 13, pic: "/gallery/g16.jpg" },
    { id: 14, pic: "/gallery/g17.jpg" },
    { id: 15, pic: "/gallery/g18.jpg" },
    { id: 16, pic: "/gallery/g19.jpg" },
  ];
  const list2 = [
    { id: 17, pic: "/gallery/g3.jpg" },
    { id: 18, pic: "/gallery/g7.jpg" },
    { id: 19, pic: "/gallery/g11.jpg" },
    { id: 20, pic: "/gallery/g20.jpg" },
  ];

  const images = [...list1, ...list2];
  const [showImage, setShowImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const show = (imgId:any) => {
    const index = images.findIndex((img) => img.id === imgId);
    if (index !== -1) {
      setCurrentIndex(index as any);
      setShowImage(images[index].pic as any);
    }
  };

  const closeImage = () => {
    setShowImage(null);
    setCurrentIndex(null);
  };

  const next = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex as any);
      setShowImage(images[newIndex].pic as any);
    }
  };

  const prev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex as any);
      setShowImage(images[newIndex].pic as any);
    }
  };

  return (
    <>
      <Breadcrumb name1={name1} name2={name2} />
      <div className="gallery">
        <div className="g-col-div1">
          {list1.map((item) => (
            <div key={item.id} className="gd1-c1">
              <img src={item.pic} alt="img" />
              <div className="overlay1">
                <div className="ov-ch">
                  <i onClick={() => show(item.id)} className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="g-col-div2">
          {list2.map((item) => (
            <div key={item.id} className="gd2-c1">
              <img src={item.pic} alt="img" />
              <div className="overlay2">
                <div className="ov-ch1">
                  <i onClick={() => show(item.id)} className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showImage && (
          <div className="g-pic">
            <div className="g-pic-overlay">
              <img src={showImage} alt="img" />
              <button className="g-btn btn" onClick={closeImage}>X</button>
            </div>
          
            <button className="g-prev-btn " onClick={prev} disabled={currentIndex === 0}
            style={{ display: currentIndex === 0 ? "none" : " block" }}>
                <i className="fa-solid fa-less-than text-light"></i>
              </button>
              <button className="g-next-btn  " onClick={next} disabled={currentIndex === images.length - 1}
               style={{ display: currentIndex === images.length - 1 ? "none" : "block" }}>
                <i className="fa-solid fa-greater-than text-light"></i>
              </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
