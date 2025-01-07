import React from 'react'
import { Separator } from '@/components/ui/separator'

const ScholarshipBody = () => {
  return (
    <div className="px-10 pt-10 pb-16 flex flex-col gap-10 font-sans font-light ">
        
        <div className="w-full">
        <h2 className="text-4xl text-gray-800 "><span className="font-medium text-bgpink">Overview</span></h2>
        <p className="text-xl mt-3 text-justify text-gray-700">
        In collaboration with the Government of Pakistan, IHP sponsors the National Youth Research Grants (NYRG) for 2 select students each year. The NYRG is based on global models of funded scholarships, which serve as cornerstone mechanisms for developing future leaders and professionals.</p>
<Separator className="my-8 bg-gray-300" />
<p className="text-xl mt-3 text-justify text-gray-700">
We believe that high school students in Pakistan are among the brightest in the world. Their vast achievements in both academic and extracurricular fields serve as a testament to that. However, the glaring issue of poverty remains the biggest barrier preventing gifted students from becoming leaders in their fields.

<br></br><br></br>
To help students who have the ability to contribute meaningfully to their country by receiving education from some of the world&apos;s best institutions, IHP established a permanent scholarship that assists students who wish to study abroad with an annual research grant. This scholarship is open to all students under the age of 20, from both public and private institutions. Students are selected through two programs: the Automatic Consideration (AC) program, which primarily identifies outstanding students from public schools across Pakistan, and the Demonstration of Interest (DOI) program, which is for high schoolers from other backgrounds.

<br></br><br></br>
Students can apply under either the STEM or Humanities grant streams. The decision to apply in a specific stream must be representative of the students&apos; extracurricular and academic profiles. The selection board strongly prefers students who have conducted groundbreaking research, achieved international accolades, and have a meaningful story of growth and development.


        </p>
        <Separator className="mt-12 bg-gray-300" />
        </div>
    </div>
  )
}

export default ScholarshipBody