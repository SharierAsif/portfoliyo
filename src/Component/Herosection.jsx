import React from 'react'


export default function Herosection() {
  return (
    <>
      <div id='hero' className="flex ">
        <div className=" container mx-auto flex flex-col px-5 py-24 text-center justify-center items-center">
          <h1
            className=" text-3xl md:text-5xl"
          >
            Hi, I am Asif Frontend devloper
          </h1>
          <p
            className="max-w-md lg:max-w-lg py-4 font-semibold text-base text-slate-700"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <a
            href="#a"
            className="dark:text-white inline-block bg-indigo-600 py-2 px-5 text-white hover:bg-indigo-500 border border-indigo-600 rounded-md"
          >
            See Works
          </a>
        </div>
      </div>
    </>
  )
}


