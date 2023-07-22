'use client'
import Link from 'next/link'
import React from 'react'

function First() {
  return (
    <div className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        {/* You can addd ur logo here */}
        <Link href={'/'} className="ml-3 text-xl"><span className="text-blue-600">AI-</span>Paraphraser</Link>
      </div>
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href={'/'} className="mr-5 text-blue-400 hover:text-gray-900" >Home</Link>
        <Link href={'aboutus'} className="mr-5 text-blue-400 hover:text-gray-900" >About us</Link>
        <Link href={'https://github.com/PosiGangapavani/AIParaphraizer'} className="mr-5 text-blue-400 hover:text-gray-900" >Git hub repo</Link>
  
  
       
      </div>
     
    </div>
  </div>
  )
}

export default First
