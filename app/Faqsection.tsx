"use client";
import React, { useState } from "react";
import ButtonRight from "@/public/assets/right.svg";

const Faqsection = () => {
  // Array of FAQs
  const faqs = [
    {
      question: "What Services do personal accountants provide?",
      answer:
        "Personal accountants provide a variety of services, including tax preparation, financial planning, and investment advice. They also help manage budgets, track expenses, and ensure compliance with financial regulations.",
    },
    {
      question: "How can accountants help with financial planning?",
      answer:
        "Accountants assist in creating budgets, managing investments, and developing long-term financial strategies tailored to individual needs.",
    },
    {
      question: "What is the importance of tax compliance?",
      answer:
        "Tax compliance ensures that individuals and businesses meet their legal obligations, avoiding penalties and fostering financial stability.",
    },
  ];

  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle function
  const toggleSection = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col p-7 md:p-10 md:items-center mt-20">
      <h2 className="font-sans font-light text-4xl md:text-5xl text-bgpink">
        Frequently Asked Questions
      </h2>
      <p className="font-sans mt-5 font-light text-lg md:text-xl text-gray-600 md:text-center">
        We prioritize your satisfaction, ensuring a secure financial future.
        Choose us for peace of mind
        <br />
        in your financial endeavours.
      </p>
      <div className="w-full flex flex-col gap-5 mt-5">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`border-[1px] ${
        expandedIndex === index ? "border-gray-500" : "border-gray-300"
      } rounded-2xl p-3 md:p-5 flex flex-col transition-all duration-500`}
    >
      <div
        onClick={() => toggleSection(index)}
        className="flex flex-row justify-between items-center cursor-pointer"
      >
        <h5 className="font-sans font-light text-xl md:text-2xl text-gray-700">
          {faq.question}
        </h5>
        <div
          className={`rounded-full md:h-[36px] p-1 ml-4 md:ml-0 md:p-0 md:w-[36px] flex items-center justify-center transition-all duration-500 ease-in-out ${
            expandedIndex === index
              ? "bg-bgpink rotate-90"
              : "bg-white border-[1px] border-gray-300 rotate-0"
          }`}
        >
          
          <ButtonRight
            className={`md:h-[24px] md:w-[24px] h-[20px] w-[20px] transition-colors duration-500 ${
              expandedIndex === index ? "stroke-white" : "stroke-gray-700"
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
        <p className="text-gray-600 font-sans font-light text-lg">{faq.answer}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Faqsection;
