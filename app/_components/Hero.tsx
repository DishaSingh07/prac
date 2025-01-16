import React from 'react'

function Hero() {
  return (
    <div>
      <section className="bg-black">
        <div className='flex items-baseline justify-center pt-20'>
          <h2 className='text-white border text-center border-white px-3 p-2 rounded-full'>See What's New | <span className='text-sky-400'>AI Diagram</span></h2>
        </div>

        <div className='flex items-baseline justify-center pt-20'>

        </div>
        <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 l6g:flex ">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-2xl text-sky-300 font-extrabold sm:text-5xl whitespace-nowrap">
              Documents and Diagrams
              <strong className="font-extrabold text-white sm:block">for engineering teams.</strong>
            </h1>


            <p className="mt-4 sm:text-xl/relaxed text-slate-200">
              Deliver accurate, consistent designs faster
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* <a
                className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium  shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a> */}

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-black bg-white shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
