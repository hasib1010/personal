import React from 'react'; 
import Typeanimations from './Typeanimations';

const Bio = () => {
    return (
        <div className="bio lg:px-20 md:px-5">
            <div className="flex flex-col lg:flex-row md:flex-row gap-8 justify-between my-20 items-center">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
                  {/* Introduction Heading */}
                  <h2 className="bio-head text-3xl lg:text-4xl font-semibold">
                    Web Developer.
                    <div>
                        <Typeanimations />
                    </div>
                  </h2>

                  {/* Bio Description */}
                  <div className="bio-txt mt-6 text-base px-4 lg:px-0 w-full lg:w-2/3">
                    <p>
                        I specialize in crafting clean and efficient code to build exceptional digital experiences. 
                        With expertise in <strong>React</strong>, <strong>Next.js</strong>, and modern web development technologies, 
                        I thrive on solving complex problems and delivering robust, user-friendly solutions.
                    </p>
                    <p className="mt-4">
                        My passion lies in creating dynamic, responsive, and scalable web applications that not only meet but exceed client expectations. 
                        From front-end to back-end integration, I ensure every project is handled with precision and attention to detail.
                    </p>
                  </div>
              </div>

              {/* Display Picture */}
              <div className="dp w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
                {/* Add your image or avatar */}
           
              </div>
            </div>
        </div>
    );
};

export default Bio;
