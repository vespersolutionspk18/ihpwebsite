import React from 'react'
import Image from 'next/image'

const Scholarshiphero = () => {
  return (
    <div className="pb-20 w-full flex p-16 flex-row items-end h-[440px] bg-cover bg-center bg-black/30 bg-blend-multiply justify-between" style={{backgroundImage: `url('/assets/scholarshiphero.jpeg')`}}>
        <h1 className="font-sans font-light text-white text-6xl">National Gifted &#38; Talented<br></br><span className="font-medium">Scholarship</span></h1>
        <div className="rounded-2xl  p-5"><Image src="/assets/pakeduministry.png" alt="ihp" width={120} height={120} /></div>
    </div>
  )
}

export default Scholarshiphero