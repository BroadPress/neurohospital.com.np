'use client'
import Link from 'next/link'
import React from 'react'
import '@/public/css/breadcrumb.css'
const Breadcrumb = ({name1,name2}:any) => {
  return (
    <>
      <div className='breadcrumb'>
        <div className='b-div'>
            <div className='b-div1 d-flex '>
                <Link href="/">Home</Link>
                <i className="fa-solid fa-angles-right"></i>
                <div className='b-p1'>{name1}</div>

            </div>
        <p className='b-p2'>{name2}</p>
        </div>  
      </div>
    </>
  )
}

export default Breadcrumb
