import React from 'react'

const ScholarshipSelectionProcess = () => {
  return (
    <div className="pb-10 px-10 flex flex-col gap-10 font-sans font-light">
    <h2 className="text-4xl text-gray-800">Selection<br></br><span className="font-medium text-bgpink">Process</span></h2>
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="xl:w-1/2 flex flex-col gap-3">
      <div className=" w-full flex flex-row items-center gap-3"><div className="bg-bgpink h-10 w-10 rounded-full flex items-center justify-center"><h3 className="font-sans font-light text-2xl text-white">1</h3></div><h3 className="font-sans font-light text-2xl text-gray-800">Apply</h3></div>
      <p className="text-xl text-justify text-gray-800">
      If you have been shortlisted to apply through our AC program, send in module 1 of your application through our portal. Complete your personal statement of 1200 words, fill in your biographical details, and elaborate on any extracurricular achievements attained during high school. Mention and link any past research work conducted, and explain the research you wish to conduct in the future. (Students applying through DOI must complete module 2, which includes additional mandatory fields listing their past educational history and supplemental questions).



    </p>
      </div>
      <div className="xl:w-1/2 flex flex-col gap-3">
      <div className=" w-full flex flex-row items-center gap-3"><div className="bg-bgpink h-10 w-10 rounded-full flex items-center justify-center"><h3 className="font-sans font-light text-2xl text-white">2</h3></div><h3 className="font-sans font-light text-2xl text-gray-800">Evaluative Testing</h3></div>
      <p className="text-xl text-justify text-gray-800">
      Take our specially developed evaluative test, which assesses your logical reasoning, spatial reasoning, quantitative reasoning, and decision-making skills. Students with a SAT score above 1500 or an ACT score above 34 may elect to skip the test (proof of testing is mandatory).



    </p>
      </div>
    </div>
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="xl:w-1/2 flex flex-col gap-3">
      <div className=" w-full flex flex-row items-center gap-3"><div className="bg-bgpink h-10 w-10 rounded-full flex items-center justify-center"><h3 className="font-sans font-light text-2xl text-white">3</h3></div><h3 className="font-sans font-light text-2xl text-gray-800">Individual Interview</h3></div>
      <p className="text-xl text-justify text-gray-800">
      Students who have successfully passed testing are contacted by a single member of our network of students/postgraduates for a one-on-one interview. This interview primarily assesses the student’s personality and verbal skills, and allows for clarification regarding questions around student applications.


    </p>
      </div>
      <div className="xl:w-1/2 flex flex-col gap-3">
      <div className=" w-full flex flex-row items-center gap-3"><div className="bg-bgpink h-10 w-10 rounded-full flex items-center justify-center"><h3 className="font-sans font-light text-2xl text-white">4</h3></div><h3 className="font-sans font-light text-2xl text-gray-800">Committee Interview</h3></div>
      <p className="text-xl text-justify text-gray-800">
      The organizational committee, composed of board-certified psychologists, professors, and educational administrators, conducts individual interviews of 20 selected students. After the interviews, they select one student from the STEM stream and one from the Humanities stream. This interview is designed to assess the student’s competence, potential, and ability to significantly contribute to the research work of their choice.




    </p>
      </div>
    </div>
</div>
  )
}

export default ScholarshipSelectionProcess