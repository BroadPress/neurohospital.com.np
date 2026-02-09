'use client'
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import '@/public/assets/css/testimonials.css'
const Testimonials = () => {
  const name1 = "Testimonials";
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec5Ref = useRef(null);
  const sec6Ref = useRef(null);
  const sec7Ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isSec3Visible, setIsSec3Visible] = useState(false);
  const [isSec4Visible, setIsSec4Visible] = useState(false);
  const [isSec5Visible, setIsSec5Visible] = useState(false);
  const [isSec6Visible, setIsSec6Visible] = useState(false);
  const [isSec7Visible, setIsSec7Visible] = useState(false);

  useEffect(() => {
    const sec2Element = sec2Ref.current;
    const sec3Element = sec3Ref.current;
    const sec4Element = sec4Ref.current;
    const sec5Element = sec5Ref.current;
    const sec6Element = sec6Ref.current;
    const sec7Element = sec7Ref.current;

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer2.unobserve(sec2Element as any);
        }
      },
      { threshold: 0.3 }
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
    const observer7 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec7Visible(true);
          observer7.unobserve(sec7Element as any);
        }
      },
      { threshold: 0.3 }
    );

    if (sec2Element) observer2.observe(sec2Element);
    if (sec3Element) observer3.observe(sec3Element);
    if (sec4Element) observer4.observe(sec4Element);
    if (sec5Element) observer5.observe(sec5Element);
    if (sec6Element) observer6.observe(sec6Element);
    if (sec7Element) observer7.observe(sec7Element);

    return () => {
      if (sec2Element) observer2.unobserve(sec2Element);
      if (sec3Element) observer3.unobserve(sec3Element);
      if (sec4Element) observer4.unobserve(sec4Element);
      if (sec5Element) observer5.unobserve(sec5Element);
      if (sec6Element) observer6.unobserve(sec6Element);
      if (sec7Element) observer7.unobserve(sec7Element);
    };
  }, []);

  return (
    <>
      <Breadcrumb name1={name1} name2={name1} />
      <div className="tl-sec  mb-3">
        <div className="tl-div mx-2 mt-4">
          <div ref={sec2Ref} className={`tl-col1 my-2 ${isVisible ? "show" : ""}`}>
            <img src="/assets/images/testimonials/t1.jpg" alt="t1" />
          </div>
          <div
            ref={sec3Ref}
            className={`tl-col2 ${isSec3Visible ? "show" : ""}`}
          >
            <p className="tl-p1">Diabetic patient from Inaruwa -2, Sunsari</p>
            <p className="tl-p2">Living healthier life</p>
            <p className="tl-p3">
              My name is Rushanidevi Mehta, and I'm from Laxminarayan Tole,
              Inaruwa-2, Sunsari. I was diagnosed as diabetic before a year in
              the local hospital, and I started taking medicine regularly. I
              felt weak, fatigued, and ill most of the time. A friend of my son
              suggested Neuro Hospital in Biratnagar, and without delay, I
              visited the doctor in October 2023.
            </p>
            <p className="tl-p3">
              After counseling with Dr. Vivek Kattel (Senior Consultant
              Physician and Rheumatologist), he changed my medicines and guided
              me more about the disease. I followed his guidance, and now I'm
              living a healthier life.
              <br />I would like to thank Neuro Hospital, Biranagar, and
              especially Dr. Kattel for his healthier advice.
            </p>
            <p className="tl-p4">Mrs. Rushanidevi Mehta | Inaruwa-2, Sunsari</p>
          </div>
        </div>
      </div>
      <div className="tl-sec1  mb-3">
        <div className="tl-div mx-3 mt-4">
          <div
            ref={sec4Ref}
            className={`tl2-col1 my-2 ${isSec4Visible ? "show" : ""}`}
          >
            <img src="/assets/images/testimonials/t2.jpg" className="my-2" alt="t1" />
          </div>
          <div
            ref={sec5Ref}
            className={`tl2-col2  ${isSec5Visible ? "show" : ""}`}
          >
            <p className="tl-p1">अस्पताल ने मुझे नई जिन्दगि दि हे</p>
            <p className="tl-p2">मै तो दिल्ली जाने वाला था</p>
            <p className="tl-p3">
              मै बिराटनगर मे ५ साल से पेन्टर का काम कर रहा हु । मेरा घर पश्चिम
              बंगाल के मुर्शिदाबाद मे हे । एक दिन अचानक मेरा दिल पे दौरा पडा और
              मुझे बहुत तकलिफ हुवा । मै तो दिल्ली जाने वाला था मगर मुझे बिराटनगर
              के न्युरो अस्पताल के बारेमे मेरे झारखण्ड वाले चाचा ने बताया और
              मेरे बिवी ने न्युरो अस्पताल पहुंचाया और मुझे डा. निकेश राज श्रेष्ठ
              ले मिलावाया । इस अस्पताल के इलाज से मै बहुत ठिक हो गया हु और मुझे
              लगता हे कि अस्पताल ने मुझे नई जिन्दगि दि हे ।
            </p>
            <p className="tl-p3 mb-3">
              {" "}
              पश्चिम बंगाल, बिहार और नदिजिकी जगह के लोगो के लिय यह अस्पताल अच्छी
              और बेहतारिन मुकाम हे । अस्पतालमे फिलिप्स कम्पनिका क्याथ ल्याब
              मेशिन हे। अस्पताल मे बहुत सारी सुबिधाए हे । अस्पताल के इलाज के लिए
              मै बहुत शुक्र गुजार हु ।
            </p>
            <p className="tl-p4 text-bold">गब्बर मियाँ, मुर्शिदाबाद, अभि बिराटनगर</p>
          </div>
        </div>
      </div>
      <div className="tl-sec1" style={{marginBottom:"5rem"}}>
        <div className="tl-div mx-3 mt-4">
          <div
            ref={sec6Ref}
            className={`tl3-col1 ${isSec6Visible ? "show" : ""}`}
          >
            <img src="/assets/images/testimonials/t3.jpg" className="mb-2" alt="t1" />
          </div>
          <div
            ref={sec7Ref}
            className={`tl3-col2  ${isSec7Visible ? "show" : ""}`}
          >
            <p className="tl-p1">धनकुटा -२</p>
            <p className="tl-p2">सर्वोच्च र उत्कृस्ट हस्पिटल</p>
            <p className="tl-p3">
              न्युरो अस्पतालका डाक्टर, नर्स तथा सम्पूर्ण कर्मचारीहरुलाई हृदय
              देखि धन्यबाद । हामीले ल्याएको बिरामीको सफलतापुर्वक सकारात्मक ढंगले
              ठिक पारिदिनु भएकोमा साथै हाम्रो हेरचाह गर्नलाई सहयोग गरिदिनु
              भएकोमा । हामीले आगामी दिनहरुमा यस न्युरो अस्पताललाइ नेपालकै
              सर्वोच्च र उत्कृस्ट अस्पतालको रुपमा चिनिएको, सुन्न, देख्न पाइयोस ।
            </p>
            <p className="tl-p3 mb-3">
              {" "}
              आशा छ यो हाम्रो सम्पूर्ण नेपाली सर्वसाधारण जनताहरुबाट सफलताको
              शुभकामना गर्दै न्यूरो अस्पताल परिवारलाइ हृदय देखि धन्यवाद ब्यक्त
              गर्न चाहन्छु ।
            </p>
            <p className="tl-p4">बिभिषा ठकुरी, धनकुटा -२</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
