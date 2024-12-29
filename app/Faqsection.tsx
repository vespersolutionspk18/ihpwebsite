"use client";
import React, { useState } from "react";
import ButtonRight from "@/public/assets/right.svg";

const Faqsection = () => {
  // Array of FAQs
  const faqs = [
    {
      question: "What inspired our founders to start this company?",
      answer:
        "At the dawn of the new millennium, one of our founders envisioned a Pakistan that would stand tall as a beacon of hope and progress in Asia. Slowly, this vision turned into a reality as other like-minded individuals joined forces for the same cause. Educated at some of the world&apos;s most prestigious universities, we aimed to utilise our skills in service to our nation.",
    },
    {
      question: "How do you gain access to global best practices?",
      answer:
        "Our extensive network of over 1,000 volunteer Pakistanis spans the globe, from the heart of Silicon Valley to various other prominent locations. These individuals include researchers, engineers, doctors, lawmakers, lawyers, and more. Through this diverse network, we tap into a wealth of global expertise and best practices. In conjunction with this network, our dedicated research team continually evaluates data and relevant information available online, ensuring that we remain at the forefront of innovation and excellence.",
    },
    {
      question: "Why do we restrict ourselves to four IPs?",
      answer:
        "We believe that meaningful change requires focused and sustained effort. Our philosophy is that national transformation can only occur through persistent dedication. Hence, we limit ourselves to four Projects or Initiatives for Prosperity (IPs) at any given time. We remain steadfast and do not shift our focus until we observe tangible impact across every corner of Pakistan.",
    },
  ];

  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle function
  const toggleSection = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="m-5 md:m-10 rounded-3xl flex bg-bgpink flex-col p-7  md:p-10 md:py-24 md:items-center mt-20">
      <h2 className="font-sans font-light text-4xl md:text-5xl text-white">
        Frequently Asked Questions
      </h2>
      <p className="font-sans mt-5 font-light text-lg md:text-xl text-white md:text-center">
      IHP: Impacting Lives, Changing Communities. Driving positive change through community <br></br>development and social justice.
      </p>
      <div className="w-full flex flex-col gap-5 mt-5">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`border-[1px] ${
        expandedIndex === index ? "border-white" : "border-pink-300"
      } rounded-2xl p-3 md:p-5 flex flex-col transition-all duration-500`}
    >
      <div
        onClick={() => toggleSection(index)}
        className="flex flex-row justify-between items-center cursor-pointer"
      >
        <h5 className="font-sans font-light text-xl md:text-2xl text-white">
          {faq.question}
        </h5>
        <div
          className={`rounded-full md:h-[36px] p-1 ml-4 md:ml-0 md:p-0 md:w-[36px] flex items-center justify-center transition-all duration-500 ease-in-out ${
            expandedIndex === index
              ? "bg-bgpink rotate-90"
              : "bg-bgpink border-[1px] border-pink-300 rotate-0"
          }`}
        >
          
          <ButtonRight
            className={`md:h-[24px] md:w-[24px] h-[20px] w-[20px] transition-colors duration-500 ${
              expandedIndex === index ? "stroke-white" : "stroke-white"
            }`}
            style={{ strokeWidth: 1.5 }}
          />
        </div>
      </div>
      {/* Expandable content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expandedIndex === index ? "max-h-[200px] mt-5" : "max-h-0"
        }`}
      >
        <p className="text-white font-sans font-light text-lg">{faq.answer}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Faqsection;
