import Link from "next/link";
import React from "react";
import '@/public/css/float.css'
const Float = () => {
  return (
    <div>
      <section className="float-1">
        <Link className="float1-link" href="tel:+97721416267">
        <i className="fa-solid fa-phone text-light"></i>
        </Link>
      </section>
      <section className="float-2">
        <Link className="float2-link" target="_blank" href="https://d.sriyog.com/neuro">
        <i className="fa-brands fa-whatsapp text-light"></i>
        </Link>
      </section>
    </div>
  );
};

export default Float;
