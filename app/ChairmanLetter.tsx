import React from 'react'

const ChairmanLetter = () => {
  return (
    <div className="px-10 pb-10">
    <div className=" bg-dmagenta p-5 mt-8 md:mt-16 flex flex-col md:flex-row gap-10 h-auto min-h-screen rounded-[30px]">
    <div className=" px-0 md:px-5 w-full  md:w-1/2">
        <h3 className="font-sans my-5 font-medium text-white text-3xl md:text-4xl">
            Chairman&apos;s <span className="text-bgpink font-semibold">Message</span>
        </h3>
        <p className="font-sans tracking-tight leading-tight font-light text-lg md:text-xl text-white text-justify mb-5">
            I am honored to be a part of IHP, an organization driven by dedicated and determined professionals committed to improving the lives of underserved citizens and communities. Through diverse interventions in areas such as shelter, livelihoods, education, health, child development, youth development, women empowerment, WASH, peacebuilding, and more, we strive to uplift those who have been neglected and deprived of a dignified standard of living.
            <br /><br />
            Reflecting on our journey, five years ago, IHP was like a fledgling, taking its first steps. Today, it has matured and is not only walking but running with confidence and resilience. This transformation has been made possible through the unwavering trust of our stakeholders—including citizens, communities, donors, NGOs, and government agencies—and the successful execution of community-driven projects with dedication, transparency, and enthusiasm.
            <br /><br />
            I want to express my heartfelt gratitude to our incredible team. This progress would not have been possible without their collective efforts, commitment, and passion. I congratulate each member of the team for helping IHP reach this milestone and commend their hard work.
            <br /><br />
            Looking ahead, I am confident that IHP will continue to grow and expand its impact, serving communities in even better and more meaningful ways in the years to come.
            <br /><br />
            <span className="font-semibold text-bgpink">Imtiaz Akram Wahla</span>
        </p>
    </div>
    <div
        className="px-10 w-full md:w-1/2 bg-cover bg-center min-h-screen rounded-2xl"
        style={{ backgroundImage: `url('/assets/chairman.jpeg')` }}
    >
    </div>
</div>
</div>

  )
}

export default ChairmanLetter