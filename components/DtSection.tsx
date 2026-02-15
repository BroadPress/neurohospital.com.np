'use client'
import Link from "next/link";
import React from "react";

const DtSection = () => {
  const list = [
    {
      name: "Dr. Nikesh Raj Shrestha",
      pic: "/doctors/dc3.png",
      prof: "Senior Consultant Interventional Cardiologist",
      link: "/doctors",
      id: "NMC # : 3195",
    },
    {
      name: "Prof. Dr. Shailaja Chhetri (Shrestha)",
      pic: "/doctors/dc4.png",
      prof: "Senior Consultant Gynaecologist",
      link: "/doctors",
      id: "NMC # : 6703",
    },
    {
      name: "Dr. Sudeep Khaniya",
      pic: "/doctors/dc5.png",
      prof: "Senior Consultant GI & Laparoscopic Surgeon",
      link: "/doctors",
      id: "NMC # : 3633",
    },
    {
      name: "Dr. Vivek Kattel",
      pic: "/doctors/dc6.png",
      prof: "Senior Consultant Physician & Rheumatologist",
      link: "/doctors",
      id: "NMC # : 7537",
    },
    {
      name: "Dr. Sunanda Poudel",
      pic: "/doctors/dc7.png",
      prof: "Senior Consultant Neurologist",
      link: "/doctors",
      id: "NMC # : 8863",
    },
    {
      name: "Dr. Roshan Khatiwada",
      pic: "/doctors/dc8.png",
      prof: "Senior Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 8369",
    },
    {
      name: "Dr. Ashish Jung Thapa",
      pic: "/doctors/dc22.png",
      prof: "Senior Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 11347",
    },
    
    {
      name: "Dr. Sunil Kumar Das",
      pic: "/doctors/dc9.png",
      prof: "Senior Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 13007",
    },
    {
      name: "Dr. Suresh Prasad Shah",
      pic: "/doctors/dc10.png",
      prof: "Senior Consultant Paediatrician",
      link: "/doctors",
      id: "NMC # : 13307",
    },
    {
      name: "Dr. Ranjan Thapa",
      pic: "/doctors/dc11.png",
      prof: "Consultant Psychiatrist",
      link: "/doctors",
      id: "NMC # : 3626",
    },
    {
      name: "Dr. Roshan Acharya",
      pic: "/doctors/dc12.png",
      prof: "Senior Consultant ENT Surgeon",
      link: "/doctors",
      id: "NMC # : 4116",
    },
    {
      name: "Dr. Sagar Raj Pandey",
      pic: "/doctors/dc13.png",
      prof: "Senior Consultant Pathologist",
      link: "/doctors",
      id: "NMC # : 2586",
    },
    {
      name: "Dr. Pannalal Shah",
      pic: "/doctors/dc14.png",
      prof: "Senior Consultant Radiologist",
      link: "/doctors",
      id: "NMC # : 3637",
    },
    {
      name: "Dr. Niraj Regmi",
      pic: "/doctors/dc15.png",
      prof: "Consultant Radiologist",
      link: "/doctors",
      id: "NMC # : 5480",
    },
    {
      name: "Dr. Manzil Shrestha",
      pic: "/doctors/dc16.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 4604",
    },
    {
      name: "Dr. Bhuwaneshwor Yadav",
      pic: "/doctors/dc17.png",
      prof: "Consultant Gastroenterologist",
      link: "/doctors",
      id: "NMC # : 10713",
    },
    {
      name: "Dr. Purushuttom Parajuli",
      pic: "/doctors/dc18.png",
      prof: "Consultant Urologist",
      link: "/doctors",
      id: "NMC # : 12015",
    },
     {
      name: "Dr. Gaurav Chettri",
      pic: "/doctors/gaurav.png",
      prof: "Consultant Nephrologist",
      link: "/doctors",
      id: "NMC # : 9731",
    },
    // {
    //   name: "Dr. Nishan Bhurtel",
    //   pic: "/doctors/dc19.png",
    //   prof: "Senior Nephrologist",
    //   link: "/doctors",
    //   id: "NMC # : 9731",
    // },
    // {
    //   name: "Dr. Niraj Dhakal",
    //   pic: "/doctors/dc20.png",
    //   prof: "Consultant Nephrologist",
    //   link: "/doctors",
    //   id: "NMC # : 12283",
    // },
    // {
    //   name: "Dr. Mohan Karki",
    //   pic: "/doctors/dc21.png",
    //   prof: "Consultant Neurosurgeon",
    //   link: "/doctors",
    //   id: "NMC # : 11223",
    // },
    
    {
      name: "Dr. Nisha Adhikari",
      pic: "/doctors/dc23.png",
      prof: "Consultant Gynaecologist",
      link: "/doctors",
      id: "NMC # : 11384",
    },
    {
      name: "Dr. Rajan Karn",
      pic: "/doctors/dc24.png",
      prof: "Consultant Cardiologist",
      link: "/doctors",
      id: "NMC # : 12949",
    },
    {
      name: "Dr. Amit Deo",
      pic: "/doctors/dc25.png",
      prof: "Consultant Orthopedic Surgeon",
      link: "/doctors",
      id: "NMC # : 9572",
    },
    {
      name: "Dr. Richa Sharma",
      pic: "/doctors/dc26.png",
      prof: "Consultant Dermatologist",
      link: "/doctors",
      id: "NMC # : 14810",
    },
    {
      name: "Dr. Arjun Chettri",
      pic: "/doctors/dc27.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 8893",
    },
    {
      name: "Dr. Lokendra Narayan Mandal",
      pic: "/doctors/dc28.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 12683",
    },
    {
      name: "Dr. Amit Pratap Shah",
      pic: "/doctors/dc29.png",
      prof: "Dental Surgeon",
      link: "/doctors",
      id: "NMC # : 6361",
    },
     {
      name: "Dr. Nabin Kumar Chaudhary",
      pic: "/doctors/dc30.png",
      prof: "Physiotherapist",
      link: "/doctors",
      id: "NMC # : 25PHY",
    },   
    {
      name: "Join our Team",
      pic: "/doctors/dc31.png",
      prof: "Apply Now",
      link: "/apply",
      id: "Apply now",
    },
  ];
  // const list1 = [
  //   {
  //     name: "Join our Team",
  //     pic: "/doctors/dc31.png",
  //     prof: "Apply Now",
  //     link: "/apply",
  //     id: "Apply now",
  //   },
  // ];
  // const navigate = useNavigate();
  // const load = (link) => {
  //   navigate(link);
  //   window.location.reload();
  // };
  return (
    <>
      <div className="ul-doc ">
        {list.map((item) => (
          <div key={item.id} className="li-doc">
            <div className="li-doc-1 text-center">
              <img loading="lazy" src={item.pic} alt="dc1" />
              <div className="dcts-1-p1">{item.name}</div>
              <div className="dcts-1-p2">{item.prof}</div>
              <Link href={item.link} className="dcts-btn btn">
                {item.id}
              </Link>
            </div>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default DtSection;
