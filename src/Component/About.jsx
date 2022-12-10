import React from "react";


function About() {
  let image =
    "https://cdn.dribbble.com/users/154194/screenshots/11151754/media/676d0fe34678a221085b09b75b5d7e12.jpg?compress=1&resize=400x300&vertical=top";
  return (
      <div id="about">
          
          <section className="body-font text-gray-600">
              
        <div className="container mx-auto flex flex-col items-center px-5 py-12 md:flex-row">
            
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src={image}
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-indigo-600 dark:text-indigo-500 sm:text-4xl">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
                          <a
                              className="inline-flex rounded border-0 bg-indigo-600 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                              href="mailto:sharier369@gmail.com"
                          >
                Email Me
              </a>
              <a href="tel:+8801781663506" className="ml-4 inline-flex rounded border-0 bg-gray-100 py-2 px-6 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                Phone
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
