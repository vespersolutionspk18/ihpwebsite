import React from 'react'

const AboutMission = () => {
  return (
    <div className="p-10 flex flex-col gap-10 font-sans font-light">
        <h2 className="text-4xl text-gray-800">Our<br></br><span className="font-medium text-bgpink">Methodology</span></h2>
        <div className="flex flex-row gap-10">
          <div className="w-1/2 flex flex-col gap-3">
          <div className=" w-full flex flex-row items-center gap-3"><div className="bg-bgpink h-10 w-10 rounded-full flex items-center justify-center"><h3 className="font-sans font-light text-2xl text-white">1</h3></div><h3 className="font-sans font-light text-2xl text-gray-800"> The Learning Process</h3></div>
          <p className="text-xl text-justify text-gray-800">
          We begin by learning. Our vast volunteer network investigates groundbreaking global innovations in climate, economics, poverty reduction, gender, healthcare, and social justice. This knowledge fuels our &quot;Developmental Potential Index,&quot; highlighting Pakistan&apos;s development gaps.

        </p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
          <div className=" w-full flex flex-row items-center gap-3"><div className="bg-bgpink h-10 w-10 rounded-full flex items-center justify-center"><h3 className="font-sans font-light text-2xl text-white">2</h3></div><h3 className="font-sans font-light text-2xl text-gray-800"> Identifying Key Issues</h3></div>
          <p className="text-xl text-justify text-gray-800">
          After presenting this report to our board, we vote on issues that we feel are the most important and would lead to the greatest change in Pakistan. These issues must be suited to the current sociopolitical and economic context of Pakistan and must be implementable nationwide, not just restricted to specific provinces.


        </p>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="w-1/2 flex flex-col gap-3">
          <div className=" w-full flex flex-row items-center gap-3"><div className="bg-bgpink h-10 w-10 rounded-full flex items-center justify-center"><h3 className="font-sans font-light text-2xl text-white">3</h3></div><h3 className="font-sans font-light text-2xl text-gray-800"> Project Planning & Execution</h3></div>
          <p className="text-xl text-justify text-gray-800">
          Project execution is paramount. Our team partners with field experts to craft realistic national plans for our Initiatives of Prosperity (IPs). This rigorous process, lasting 4-12 months, culminates in the launch of IPs

        </p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
          <div className=" w-full flex flex-row items-center gap-3"><div className="bg-bgpink h-10 w-10 rounded-full flex items-center justify-center"><h3 className="font-sans font-light text-2xl text-white">4</h3></div><h3 className="font-sans font-light text-2xl text-gray-800"> Constant Evaluation & Improvement</h3></div>
          <p className="text-xl text-justify text-gray-800">
          Constant evaluation reports allow us to continuously improve and address any deficiencies. This iterative process ensures that we remain adaptable and effective in our mission to bring about positive change in Pakistan.


        </p>
          </div>
        </div>
    </div>
  )
}

export default AboutMission