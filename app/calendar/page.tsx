'use client'
import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import '@/public/assets/css/hospital-calender.css'

const HospitalCalender = () => {
  const [calendarDates, setCalendarDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const name1 = "Hospital Calendar";

  const englishMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    generateCalendar(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth,selectedDate]);
  console.log(setSelectedDate);

  // Function to generate the calendar based on selected year and month
  const generateCalendar = (year:any, month:any) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = new Date().getDate();

    const datesArray = [];

    // Fill empty spaces before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      datesArray.push({ day: "", isToday: false });
    }

    // Fill the days of the month
    for (let i = 1 as any; i <= daysInMonth; i++) {
      const isToday:any =
        i === currentDay &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth();
      datesArray.push({ day:i, isToday } );
    }

    setCalendarDates(datesArray as any);
  };

  const handlePrevMonth = () => {
    const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
    const prevYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
    setSelectedMonth(prevMonth);
    setSelectedYear(prevYear);
  };

  const handleNextMonth = () => {
    const nextMonth = selectedMonth === 11 ? 0 : selectedMonth + 1;
    const nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
    setSelectedMonth(nextMonth);
    setSelectedYear(nextYear);
  };

  // const handleMonthChange = (e) => {
  //   setSelectedMonth(e.target.value);
  // };

  // const handleYearChange = (e) => {
  //   const selectedYear = parseInt(e.target.value);
  //   if (selectedYear <= new Date().getFullYear()) {
  //     setSelectedYear(selectedYear);
  //   }
  // };
  return (
    <>
      <Breadcrumb name1={name1} name2={name1} />
      <div className="calendar">
        <div className="d-flex flex-wrap">
          <div className="cdr-d1">
            <img
              src="/assets/images/header-logo.png"
              alt="header-logo"
              className="calender-logo"
            />
          </div>
          <div className="cdr-d2">Neuro Hospital - Biratnagar</div>
        </div>

        <div className="h-header">
          <button className="h-btn" onClick={handlePrevMonth}>
            {"<"}
          </button>

          <h3>
          {selectedDate}&nbsp;{englishMonths[selectedMonth]}, {selectedYear}
          </h3>
          <button className="h-btn" onClick={handleNextMonth}>
            {">"}
          </button>
        </div>
{/* 
        <div className="month-year-selector">
          <div className="month">
            <label>Month:</label>
            <select value={selectedMonth} onChange={handleMonthChange}>
              {englishMonths.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div className="year">
            <label>Year:</label>
            <select value={selectedYear} onChange={handleYearChange}>
              {/* Limit the year selection to the current year */}
              {/* {[...Array(new Date().getFullYear() - 1999)].map((_, index) => {
                const year = 2000 + index;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div> */}

        <div className="days text-center">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="day">
              {day}
            </div>
          ))}
        </div> 
        <div className="dates text-center">
          {calendarDates.map((date:any, index) => (
            <div key={index} className={`date ${date.isToday ? "today" : ""}`}
            
            >
              {date.day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HospitalCalender;
