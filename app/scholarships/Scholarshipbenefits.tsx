import { Separator } from '@/components/ui/separator'
import React from 'react'

const Scholarshipbenefits = () => {
  return (
    <>
    <div className="pb-10 px-10 flex flex-col gap-10 font-sans font-light">
    <h2 className="text-4xl text-gray-800">Scholarship<br></br><span className="font-medium text-bgpink">Benefits</span></h2>
    <div className="flex flex-col xl:flex-row">
      <div className="flex flex-col">
      
      <div className="text-xl text-justify text-gray-800">
      <ul>
        <li>- 35,000$ in annual funding for tuition fees until completion of an undergraduate degree</li>
        <li>- Access to funds up to 11,000$ annually for research and project work until completion of an undergraduate degree</li>
        <li>- 1500$ travel stipend for initial travel and visa related costs</li>
        <li>- The opportunity to intern at the Pakistan Embassy in Washington, DC, in the final year of your undergraduate education or immediately after        </li>
        <li>- The opportunity to work in the Senate of Pakistan as a temporary legislative director for a period of 1 year after completion of your undergraduate degree
        </li>
      </ul>


    </div>
      </div>
      
    </div>
</div>
<div className="mx-10 mb-16 mt-6">
<Separator className="bg-gray-300"/>
</div>
    </>
  )
}

export default Scholarshipbenefits