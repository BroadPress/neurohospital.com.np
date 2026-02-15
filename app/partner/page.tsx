'use client'
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";
import '@/public/css/partner.css'
const Partner = () => {
  const list = [
    {
      name: "Kumari Bank Limited.",
      date: "Date of MoU : 21-Aug-2023",
      img: "/partner/kumari.jpg",
      des: "Kumari Bank Limited was established as Nepal’s fifteenth commercial bank and began operations on April 03, 2001. It provides modern banking services and pioneered Internet and Mobile Banking.",
      link: "https://www.kumaribank.com/",
    },
    {
      name: "eSewa Pvt. Ltd.",
      date: "Date of MoU : 21-Aug-2023",
      img: "/partner/esewa.jpg",
      des: "eSewa is a subsidiary of F1Soft International and works to build a cashless economy in Nepal. It provides digital payment services and has onboarded merchants, agents, and banks nationwide.",
      link: "https://esewa.com.np/#/home",
    },
    {
      name: "Sanima Bank Limited",
      date: "Date of MoU : 10-Nov-2023",
      img: "/partner/sanima.jpg",
      des: 'Sanima Bank was promoted by prominent Non-Resident Nepali businesspersons and began operations in 2004. It provides modern banking services and became an "A" Class Commercial Bank in 2012.',
      link: "https://www.sanimabank.com/en/know-us",
    },
    {
      name: "Nepal Investment Mega Bank Limited.",
      date: "Date of MoU : 26-Nov-2023",
      img: "/partner/nimb.jpg",
      des: "Nepal Investment Bank Limited is a joint venture between Nepalese and French partners and began operations as Nepal Indosuez Bank Ltd. It provides modern banking services and ensures a quality customer experience.",
      link: "https://www.nimb.com.np/",
    },
    {
      name: "Citizens Bank International Limited",
      date: "Date of MoU : 10-May-2024",
      img: "/partner/citizen.png",
      des: "Citizens Bank International Limited was established on April 20, 2007, as Nepal’s 20th commercial bank. It provides modern banking services and is managed by experienced professionals and eminent business leaders.",
      link: "https://www.ctznbank.com/",
    },
    {
      name: "Machhapuchhre Bank Limited.",
      date: "Date of MoU : 12-Dec-2023",
      img: "/partner/mbl.jpg",
      des: "Machhapuchchhre Bank Limited was registered in 1998 as the first regional commercial bank in western Nepal and began operations in Pokhara. It provides modern banking services using advanced technologies and international best practices.",
      link: "https://www.machbank.com/",
    },
    {
      name: "Jhi Pucha",
      date: "Date of MoU : 27-Mar-2024",
      img: "/partner/jhipucha.jpg",
      des: "null",
      link: "null",
    },
    {
      name: "Ward No 8, Biratnagar",
      date: "Date of MoU : 1-Mar-2024",
      img: "/partner/b8np.png",
      des: "null",
      link: "null",
    },
    {
      name: "Ward No 10, Biratnagar",
      date: "Date of MoU : 1-Mar-2024",
      img: "/partner/b10np.png",
      des: "null",
      link: "null",
    },
    {
      name: "Siddhartha Bank Ltd.",
      date: "Date of MoU : 11-Dec-2023",
      img: "/partner/siddhartha.jpg",
      des: "Siddhartha Bank Limited was established in 2002 and is recognized as one of Nepal’s most trusted banks. It provides modern banking services and fully integrates digital platforms for convenient customer access nationwide.",
      link: "https://www.siddharthabank.com/",
    },
    {
      name: "NMB Bank Limited",
      date: "Date of MoU : 4-Apr-2024",
      img: "/partner/nmb.png",
      des: "NMB Bank Limited licensed as “A” class financial institution by Nepal Rastra Bank in May 2008 has been operating in the Nepalese Financial market for over twenty years and is one of the leading commercial banks in the banking industry.",
      link: "https://nmb.com.np/individual",
    },
    {
      name: "Prabhu Bank Limited",
      date: "Date of MoU : 10-May-2024",
      img: "/partner/prabhu.jpg",
      des: "Prabhu Bank has grown rapidly over a short period, especially after merging with multiple banks in 2016. It provides modern banking services and is now an “A” class financial institution regulated by Nepal Rastra Bank.",
      link: "https://www.prabhubank.com/",
    },
    {
      name: "Nepal SBI Bank Limited",
      date: "Date of MoU : 4-Apr-2024",
      img: "/partner/sbi.png",
      des: "Nepal SBI Bank Ltd. was established in July 1993 and has become one of Nepal’s most prominent leading banks. It provides modern banking services through 144 outlets and a dedicated team of skilled employees.",
      link: "https://nsbl.statebank/",
    },
  ];

  const name1 = "Partners Organization";

  return (
    <>
      <Breadcrumb name1={name1} name2={name1} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-3   max-w-6xl gap-2 w-full mx-auto">
        {list.map((item) => (
          <div key={item.name} className="relative border border-blue-300 rounded-md flex flex-col justify-center ">
            <div className=" m-2 flex flex-col items-start p-2">
              <div className="flex w-full justify-center">
                <div className="w-auto h-32 flex mb-2">
                <img src={item.img} alt={item.name} className="" />
                </div>
              </div>

              <div className=" py-2">
                <p className="text-gray-500 font-semibold">{item.date}</p>
                <p className="ptr-p2">{item.name}</p>
                <div className="text-black">
                  {item.des === "null" ? <></> : <p>{item.des}</p>}
                </div>
                <div className="">
                  <div className={`${item.link != "null" ? "border-2 rounded-md border-blue-800 hover:bg-gray-200  flex items-center w-fit px-2 py-1" : ""}`}>
                    {item.link === "null" ? (
                      <></>
                    ) : (
                      <Link className="" href={item.link} target="_blank">
                        <button className="">Browse More</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Partner;
