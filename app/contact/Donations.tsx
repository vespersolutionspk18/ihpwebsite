import React from 'react'

const Donations = () => {
  return (
    <div id="donations" className="p-10 flex flex-col gap-10 font-sans font-light">
        <h2 className="text-4xl text-gray-800">Donate<br></br><span className="font-medium text-bgpink">To Us</span></h2>
        <div className="flex flex-row gap-10">
          <div className="w-1/2 flex flex-col gap-3">
          <p className="text-xl text-justify text-gray-800">
          Although, many of our operations are run by our vast volunteer network we use donations to fund research, development and execution of our IPs. Donors serve a crucial role in the helping us pursue our passion for novelty. 


        </p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
          <p className="text-xl text-justify text-gray-800">
          Unfortunately our organisation does not accept individual donations without prior vetting of the relevant party. If you are interested in donating please do not hesitate to contact us at <b><b>info@ihppakistan.org</b></b>


        </p>
          </div>
        </div>
        
    </div>
  )
}

export default Donations