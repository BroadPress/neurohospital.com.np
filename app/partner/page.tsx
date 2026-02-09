'use client'
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

const Partner = () => {
  const list1 = [
    {
      name: "Kumari Bank Limited.",
      date: "Date of MoU : 21-Aug-2023",
      img: "/assets/images/partner/kumari.jpg",
      des: "Kumari Bank Limited, came into existence as the fifteenth commercial banks of Nepal, starting its banking operations from Chaitra 21, 2057 B.S (April 03, 2001) with an objective of providing competitive modern banking services in the Nepalese financial market. The Bank has pioneered in providing modern banking services like Internet Banking and Mobile Banking.",
      link: "https://www.kumaribank.com/",
    },
    {
      name: "eSewa Pvt. Ltd.",
      date: "Date of MoU : 21-Aug-2023",
      img: "/assets/images/partner/esewa.jpg",
      des: "eSewa is a subsidiary company of F1Soft International, a leading FinTech company of Nepal. Team eSewa has been working tirelessly to achieve its vision to create a cashless economy. For this, the company has onboarded more than 400k+ merchants, 120k+ agents, 51+ Banks and Financial Institutions (BFIs) and established a wider network of agents nationwide.",
      link: "https://esewa.com.np/#/home",
    },
    {
      name: "Sanima Bank Limited",
      date: "Date of MoU : 10-Nov-2023",
      img: "/assets/images/partner/sanima.jpg",
      des: 'Sanima Bank is promoted by a group of prominent and dynamic Non-Resident Nepalese (NRNs) business persons. The bank initially commenced operations from 2004 as a National Level Development Bank. Since February 2012, Sanima Bank has been functioning as an "A" Class Commercial Bank with its registered office at "Alakapuri", Naxal, Kathmandu.',
      link: "https://www.sanimabank.com/en/know-us",
    },
    {
      name: "Nepal Investment Mega Bank Limited.",
      date: "Date of MoU : 26-Nov-2023",
      img: "/assets/images/partner/nimb.jpg",
      des: "Nepal Investment Bank Limited is a joint venture between Nepalese and French partners was initially named Nepal Indosuez Bank Ltd. The French partner holding 50% of the capital of Nepal Indosuez Bank Ltd. was Credit Agricole Indosuez, a subsidiary of one of the largest banking group in the world. We believe a quality service experience is a paramount to our customers and we are strongly committed in fulfilling this ideal.",
      link: "https://www.nimb.com.np/",
    },
    {
      name: "Siddhartha Bank Ltd.",
      date: "Date of MoU : 11-Dec-2023",
      img: "/assets/images/partner/siddhartha.jpg",
      des: "Relationship Forever, Established in the year 2002, Siddhartha Bank Limited (SBL) is recognized as one of the most efficient and professional banks in Nepal. A core philosophy of the bank lies in nurturing relationships with customers and clients. To ensure convenient access to services, SBL integrates digital banking in most operations. Using online banking or BankSmart App, services can be accessed by customers from anywhere in the world.",
      link: "https://www.siddharthabank.com/",
    },
    {
      name: "Machhapuchhre Bank Limited.",
      date: "Date of MoU : 12-Dec-2023",
      img: "/assets/images/partner/mbl.jpg",
      des: "Machhapuchchhre Bank Limited was registered in 1998 as the first regional commercial bank from the western region of Nepal and started its banking operations from Pokhara since year 2000.The Bank facilitates it's customers' need by delivering the best of services in combination with the latest state of the art technologies and prudent international practices.",
      link: "https://www.machbank.com/",
    },
  ];
  const list2 = [
    {
      name: "Ward No 8, Biratnagar",
      date: "Date of MoU : 1-Mar-2024",
      img: "/assets/images/partner/b8np.png",
      des: "null",
      link: "null",
    },
    {
      name: "Ward No 10, Biratnagar",
      date: "Date of MoU : 1-Mar-2024",
      img: "/assets/images/partner/b10np.png",
      des: "null",
      link: "null",
    },
  ];
  const list3 = [
    {
      name: "Nepal SBI Bank Limited",
      date: "Date of MoU : 4-Apr-2024",
      img: "/assets/images/partner/sbi.png",
      des: "Nepal SBI Bank Ltd. was established in July 1993 and has emerged as one of the leading banks of Nepal, with 937 skilled and dedicated Nepalese employees(as on Poush end 2080) working in a total of 144 outlets that include 97 full-fledged branches, 22 extension counters, 7 Province offices, 17 Branchless Banking Outlets and Corporate Office .",
      link: "https://nsbl.statebank/",
    },
    {
      name: "NMB Bank Limited",
      date: "Date of MoU : 4-Apr-2024",
      img: "/assets/images/partner/nmb.png",
      des: "NMB Bank Limited licensed as “A” class financial institution by Nepal Rastra Bank in May 2008 has been operating in the Nepalese Financial market for over twenty years and is one of the leading commercial banks in the banking industry.",
      link: "https://nmb.com.np/individual",
    },
  ];
  const list4 = [
    {
      name: "Prabhu Bank Limited",
      date: "Date of MoU : 10-May-2024",
      img: "/assets/images/partner/prabhu.jpg",
      des: "Prabhu Bank has gone through the various phases of its growth trajectory over a short period of its existence. Growth of Prabhu Bank was phenomenal, especially after merger of Grand Bank Nepal Limited, Kist Bank Ltd, Prabhu Bikash Bank Ltd, Gaurishankar Development Bank Ltd and Zenith Finance Ltd in, 2016, attaining the status of “A” class financial institution licensed and regulated by the central bank of Nepal, Nepal Rastra Bank.",
      link: "https://www.prabhubank.com/",
    },
    {
      name: "Citizens Bank International Limited",
      date: "Date of MoU : 10-May-2024",
      img: "/assets/images/partner/citizen.png",
      des: "Established on April 20, 2007 (2064/01/07) as 20th commercial bank of the nation, “Citizens Bank International Limited”, has its corporate office at the heart of the financial sector of the country, Narayanhiti Path, Kathmandu. It is promoted by eminent personalities, business and industrial houses and reputed individuals having high social standing and has been managed by a team of experienced bankers and professionals.",
      link: "https://www.ctznbank.com/",
    },
  ];

  const name1 = "Partners Organization";

  return (
    <>
      <Breadcrumb name1={name1} name2={name1} />
      <div className="Ptr" style={{ textAlign: 'justify' }}>
        {list1.map((item) => (
          <div key={item.name} className="ptr-row ">
            <div className="ptr-ptr-1 m-2">
              <div className="ptr-col1">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="ptr-col2 py-2">
                <p className="ptr-p1">{item.date}</p>
                <p className="ptr-p2">{item.name}</p>
                <div className="ptr-p3">
                  {item.des === "null" ? <></> : <p>{item.des}</p>}
                </div>
                <div className="">
                  {item.link === "null" ? (
                    <></>
                  ) : (
                    <Link className="msd2-btn btn " href={item.link} target="_blank">
                      Browse More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {list2.map((item) => (
          <div key={item.name} className="ptr-row-1 ">
            <div className="ptr-ptr-2 mx-2">
              <div className="ptr-col1-1">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="ptr-col2-1 py-2">
                <p className="ptr-p1">{item.date}</p>
                <p className="ptr-p2">{item.name}</p>
                <div className="ptr-p3">
                  {item.des === "null" ? <></> : <p>{item.des}</p>}
                </div>
                <div>
                  {item.link === "null" ? (
                    <></>
                  ) : (
                    <Link className="msd2-btn btn " href={item.link} target="_blank">
                      Browse More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="ptr-row33 ">
          <div className="ptr-ptr-3 mx-2">
            <div className="ptr3-col13">
              <img src="/assets/images/partner/jhipucha.jpg" alt="" />
            </div>
            <div className="ptr3-col23">
              <p className="ptr-p1">Date of MoU : 27-Mar-2024</p>
              <p className="ptr-p2">Jhi Pucha</p>
            </div>
          </div>
        </div>
        {list3.map((item) => (
          <div key={item.name} className="ptr-row-2 ">
            <div className="ptr-ptr-4 mx-2">
              <div className="ptr-col1-2">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="ptr-col2-2 py-2">
                <p className="ptr-p1">{item.date}</p>
                <p className="ptr-p2">{item.name}</p>
                <div className="ptr-p3">
                  {item.des === "null" ? <></> : <p>{item.des}</p>}
                </div>
                <p>
                  {item.link === "null" ? (
                    <></>
                  ) : (
                    <Link className="msd2-btn btn " href={item.link} target="_blank">
                      Browse More
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="ptr-row3-3 ">
          <div className="ptr-ptr-5 mx-2">
            <div className="ptr3-col1-3">
              <img src="/assets/images/partner/gefont.png" alt="" />
            </div>
            <div className="ptr3-col2-3 py-2">
              <p className="ptr-p1">Date of MoU : 1-May-2024</p>
              <p className="ptr-p2">GEFONT</p>
              <p className="ptr-p3">
                General Federation of Nepalese Trade Unions (GEFONT ) was
                established on 20th July 1989. As there was no union right in
                Nepal; GEFONT was launched underground. GEFONT has 21 affiliates
                (as of April 2022), which cover all three fields- agriculture,
                industries and services; covering various sectors such as
                manufacturing, textiles and clothing, carpet industry,
                transport, hotels, restaurants and catering, tourism, ICT, media
                and printing, auto-mechanics, e-rikshaw, food production,
                breweries, chemical and metal industry, tea plantations, street
                vendors, private school, beauticians, employees of security
                sector and sports sector, construction and agriculture.
              </p>
              <p>
                <Link className="msd2-btn btn" href="https://www.gefont.org/" target="_blank">
                  Browse More
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="ptr-row3 ">
          <div className="ptr-ptr-6 mx-2">
            <div className="ptr3-col1">
              <img src="/assets/images/partner/pabson.png" alt="" />
            </div>
            <div className="ptr3-col2 py-2">
              <p className="ptr-p1">Date of MoU : 2-May-2024</p>
              <p className="ptr-p2">PABSON Morang</p>
              <p className="ptr-p3">
                Private schools in Nepal have a significant historical role,
                emerging to complement government efforts in enhancing access
                and quality of education. The growth of private schools before
                and after 2028 BS (1971 AD) highlighted the need for a
                structured institution to guide, promote, protect, and harmonize
                these educational institutions. This organization aimed to
                support professional development, safeguard the rights of
                founders, principals, teachers, staff, and students, ensuring
                comprehensive development and safety within the education
                sector.
              </p>
              <p>
                <Link 
                target="_blank"
                  className="msd2-btn btn"
                  href="http://www.pabsonmorang.org.np/"
                >
                  Browse More
                </Link>
              </p>
            </div>
          </div>
        </div>
        {list4.map((item) => (
          <div key={item.name} className="ptr-row-2 ">
            <div className="ptr-ptr-4 mx-2">
              <div className="ptr4-col1-2">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="ptr4-col2-2 py-2">
                <p className="ptr-p1">{item.date}</p>
                <p className="ptr-p2">{item.name}</p>
                <div className="ptr-p3">
                  {item.des === "null" ? <></> : <p>{item.des}</p>}
                </div>
                <p>
                  {item.link === "null" ? (
                    <></>
                  ) : (
                    <Link className="msd2-btn btn " href={item.link} target="_blank">
                      Browse More
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Partner;
