'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import '@/public/assets/css/blogs.css'
const Blogs = () => {

  const router = useRouter();
  const List = [
    {
      pic: "/assets/images/blog/blog-1.png",
      name: "Role of Radiology in Cancer Diagnosis and Treatment",
      date: "09 May 2024",
      des: "Cancer, a word that strikes fear into the hearts of many, has been a formidable opponent throughout human history. However, with advancements ..",
      link: "/blog/role-of-radiology-in-cancer-diagnosis-and-treatment",
    },
    {
      pic: "/assets/images/blog/blog-2.png",
      name: "Anxiety: Recognizing Different Types and Coping Strategies",
      date: "02 May 2024",
      des: "In today's fast-paced and demanding world, many individuals experience anxiety at various levels. Anxiety is a common mental health condition ..",
      link: "/blog/anxiety-recognizing-different-types-and-coping-strategies",
    },
    {
      pic: "/assets/images/blog/blog-3.png",
      name: "Importance of Immunizations for Children",
      date: "25 April 2024",
      des: "Vaccinations, or immunizations, are one of the most important tools we have to protect children from serious diseases. They work by stimulating...",
      link: "/blog/vaccinations-childrens-health",
    },
    {
      pic: "/assets/images/blog/blog-4.png",
      name: "What is Kidney Stone?",
      date: "17 April 2024",
      des: "Kidney stones are a common and painful condition that can affect anyone, but with the right knowledge and habits.....",
      link: "/blog/kidney-stone",
    },
    {
      pic: "/assets/images/blog/blog-5.png",
      name: "When to see a Rheumatologist ?",
      date: "11 April 2024",
      des: "A rheumatologist is a specialized doctor who diagnoses and treats diseases that affect the joints, muscles, bones, and ....",
      link: "/blog/rheumatologist",
    },
    {
      pic: "/assets/images/blog/blog-6.png",
      name: "Kill Your Appendicitis Before It Kills You",
      date: "5 April, 2024",
      des: "Appendicitis is a medical condition that demands swift action. It...",
      link: "/blog/kill-your-appendicitis-before-it-kills-you",
    },
    {
      pic: "/assets/images/blog/blog-7.jpg",
      name: "Migraine Headache",
      date: "07 March, 2024",
      des: "Migraine is a common disorder which causes a disabling headache usually associated with nausea / vomiting and/ or light and Sound sensitivity. ....",
      link: "/blog/migraine-headache",
    },
    {
      pic: "/assets/images/blog/blog-8.jpg",
      name: "What is Anxiety?",
      date: "08 Feburary 2024",
      des: "Anxiety is a natural human emotion characterized by feelings of worry, nervousness, apprehension, and dread. It can manifest.....",
      link: "/blog/what-is-anxiety",
    },
    {
      pic: "/assets/images/blog/blog-9.jpg",
      name: "Autism Spectrum Disorder (ASD)",
      date: "4 January 2024",
      des: "Autism, or autism spectrum disorder (ASD), is a neurodevelopmental disorder characterized by a presence of genetic disorder that is associated ...",
      link: "/blog/autism-spectrum-disorder-asd-3",
    },
    {
      pic: "/assets/images/blog/blog-10.webp",
      name: "Outpatient Management of Knee Osteoarthritis",
      date: "4 January 2024",
      des: "Osteoarthritis {OA} is a leading cause of disability worldwide. As a major weight-bearing joint, the knee..",
      link: "/blog/outpatient-management-of-knee-osteoarthritis",
    },
    {
      pic: "/assets/images/blog/blog-12.png",
      name: "Best Time For Appendicitis Surgery",
      date: "May 27, 2024",
      des: "Appendicitis occurs when the appendix, a small pouch located in the lower right abdomen, becomes . ...",
      link: "/blog/best-time-for-appendicitis-surgery",
    },
    {
      pic: "/assets/images/blog/blog-13.webp",
      name: "Bipolar Disorder",
      date: "Dec 22, 2023",
      des: "Extreme mood swings or episodes of mania and depression are hallmarks of bipolar disorder, formerly known as manic-depressive illness. Periods of...",
      link: "/blog/bipolar-disorder",
    },
    {
      pic: "/assets/images/blog/blog-14.png",
      name: "Difference Migraine And Headache",
      date: "Apr 16, 2024",
      des: "Headaches and migraines are often used interchangeably, but they are distinct conditions with different characteristics, causes, and ...",
      link: "/blog/difference-migraine-and-headache",
    },
    {
      pic: "/assets/images/blog/blog-15.webp",
      name: "Dry Chapped Hands In Winter",
      date: "Dec 28, 2023",
      des: "Winter skin care can be particularly difficult, especially on the hands and other regions of the body that are frequently exposed to cold air...",
      link: "/blog/dry-chapped-hands-in-winter",
    },
    {
      pic: "/assets/images/blog/blog-16.webp",
      name: "How To Control Anxiety Disorder",
      date: "Feb 29, 2024",
      des: "Anxiety is a natural response to stress or perceived threats. It’s a feeling of fear, uneasiness, or worry, typically about something that is about to...",
      link: "/blog/how-to-control-anxiety-disorder",
    },
    {
      pic: "/assets/images/blog/blog-17.png",
      name: "Idiopathic Insomnia",
      date: "Apr 10, 2024",
      des: "Have you ever struggled with persistent sleep difficulties that seem to have no clear cause? For some individuals, a condition known as...",
      link: "/blog/idiopathic-insomnia",
    },
    {
      pic: "/assets/images/blog/blog-18.webp",
      name: "Peripartum Cardiomyopathy",
      date: "Feb 1, 2024",
      des: "Peripartum cardiomyopathy (PPCM) is a form of acute and sometimes severe cardiac degeneration that leads to clinical heart failure ...",
      link: "/blog/peripartum-cardiomyopathy",
    },
    {
      pic: "/assets/images/blog/blog-19.webp",
      name: "Polycystic Ovary Syndrome ",
      date: "Jan 25, 2024",
      des: "Polycystic Ovary Syndrome (PCOS) is a common hormonal condition that affects women of reproductive age. It affects an  estimated 8–13% of ...",
      link: "/blog/polycystic-ovary-syndrome-pcos",
    },
    {
      pic: "/assets/images/blog/blog-20.webp",
      name: "Summer Dandruff",
      date: "Apr 4, 2024",
      des: "Summer dandruff is a common condition that causes the skin on the scalp to flake. It isn’t contagious or serious. ...",
      link: "/blog/summer-dandruff",
    },
    {
      pic: "/assets/images/blog/blog-21.webp",
      name: "The Hidden Toll of Obesity",
      date: "Feb 15, 2024",
      des: "Body image”-in the current generation this term stands out as a highly debated and controversial, often hailed as ...",
      link: "/blog/the-hidden-toll-of-obesity",
    },
    {
      pic: "/assets/images/blog/blog-22.webp",
      name: "What is Abdominal Pain?",
      date: "Nov 29, 2023",
      des: "Abdominal pain is a common symptom that can be caused by a variety of factors, ranging from mild and...",
      link: "/blog/what-is-abdominal-pain",
    },
    {
      pic: "/assets/images/blog/blog-23.png",
      name: "What is Acute Appendicitis ?",
      date: "Jun 6, 2024",
      des: "Acute appendicitis is a common and potentially serious medical condition characterized by inflammation of the appendix...",
      link: "/blog/what-is-acute-appendicitis",
    },
    {
      pic: "/assets/images/blog/blog-24.jpg",
      name: "What is Appendicitis ?",
      date: "Apr 4, 2024",
      des: "Appendicitis is a medical condition characterized by inflammation of the appendix, a small, finger-shaped pouch located at...",
      link: "/blog/what-is-appendicitis",
    },
    {
      pic: "/assets/images/blog/blog-25.png",
      name: "What is Migraine ?",
      date: "Apr 9, 2024",
      des: "A migraine is a neurological condition characterized by recurring moderate to severe headaches, often accompanied by other symptoms such as nausea ...",
      link: "/blog/what-is-migraine",
    },
    {
      pic: "/assets/images/blog/blog-26.jpg",
      name: "Dandruff Demystified",
      date: "8 February 2026",
      des: "Dandruff happens due to scalp imbalance, dryness, or fungal overgrowth, especially in winter. Proper shampoos and scalp care help keep it under control.",
      link: "/blog/dandruff-demystified",
    },
  ];
  return (
    <>
      <div className="blogs">
        <div className="blogs-div">
          <div className="blog-first">
          <p className="blogs-p1">Neuro Hospital Blogs</p>
          <div className="blog-pic">
            <img
              src="/assets/images/blog/phobia.png"
              alt="what-is-phobia"
              className="shadow"
            />
          </div>
          <br />
          <div
            className="blogs-phobia"
            onClick={()=>router.push("/blog/what-is-phobia")}    
          >
            What is Phobia?
          </div>
          <div className="text-center text-dark">Mar 27, 2024</div>
          <br />
          <p>
            A phobia is an uncontrollable, irrational, and lasting fear of a
            certain object, situation, or activity. This fear can be so
            overwhelming that a person may go to great lengths to avoid the
            source of this fear. One response can be a panic attack. This is a
            sudden, intense fear that lasts for several minutes. It happens when
            there is no real danger.
          </p>
          <p className="text-center">
            {" "}
            <Link
              href="/blog/what-is-phobia"
              className="blog-btn btn"
            >
              Read More
            </Link>
          </p>
          <br />
          <br />
          </div>
         
          <div className="blogs-row row ">
            {List.map((card) => (
              <div key={card.name} className="blogs-col cols col-md-4 col-sm-12">
                <div className="blogs-col-div shadow">
                  <img src={card.pic} alt={card.name} className="blogs-img " />
                  <p className="mx-3">
                    <Link
                      href={card.link}
                      className="blogs-card-p1 "
                    >
                      {card.name}
                    </Link>
                  </p>
                  <p
                    className="blogs-p3 mx-3"
                    style={{textAlign:"justify"}}
                  >
                    {card.des}
                  </p>
                  <p className="blog-date mx-3">Date posted : {card.date}</p>
                  <p className="text-center">
                    {" "}
                    <Link
                      href={card.link}
                      className="blogs-btn btn"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
