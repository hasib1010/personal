import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaEye } from 'react-icons/fa';
const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
        >
            <div className='container mx-auto'>
                <h3 className='text-6xl font-bold text-center'>My Recent Projects</h3>

                <div className='my-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>

                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/0YkWs6j/Screenshot-2024-01-16-182418.png" alt="Donation Site Pic" className="h-56 rounded-xl shadow-lg mb-5 w-96" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">Event Management Project</h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>Dynamic data load...</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>Firebase user Integration</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>Private Route Integration  </li>
                            </div>

                            <div className=" flex justify-around mt-10 ">
                               <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/programming-hero-web-course-4/b8a9-event-management-hasib1010.git"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a> 
                           <a className='btn btn-warning flex gap-3 items-center' target='_blank' href="https://event-management-aab2e.web.app/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a> 
                            </div>
                        </div>
                    </div>
                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/r0SWMGQ/Screenshot-2024-01-16-162828.png" alt="Donation Site Pic" className="h-56  w-96 rounded-xl shadow-lg mb-5" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">Donation Campaign Project</h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>On click redirect to details page...</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>After Donation Complete it Will Stored in LocalStorage</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>On Statistics page it will show your Donation Stats </li>
                            </div>

                            <div className=" flex justify-around ">
                               <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/programming-hero-web-course-4/b8a8-donation-campaign-hasib1010.git"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a> 
                              <a className='btn btn-warning flex gap-3 items-center' target='_blank' href="https://graceful-pie-c16584.netlify.app/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a> 
                            </div>
                        </div>
                    </div>


                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/zftQfDb/Screenshot-2024-01-16-183451.png" alt="Donation Site Pic" className="h-56  rounded-xl shadow-lg mb-5" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">News Paper Project</h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>On click redirect to details page...</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>After Donation Complete it Will Stored in LocalStorage</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>On Statistics page it will show your Donation Stats </li>
                            </div>

                            <div className=" flex justify-around ">
                                <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/hasib1010/Dragon-News-firebase-authentication.git"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a> 

                           <a className='btn btn-warning  flex gap-3 items-center' target='_blank' href="https://dragon-news-auth-d1623.web.app/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a> 
                            </div>
                        </div>
                    </div>
                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/jVwGxTY/Screenshot-2024-01-16-185225.png" alt="Donation Site Pic" className="h-56  rounded-xl shadow-lg mb-5" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">Course Registration Projects</h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>On click redirect to details page...</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>After Donation Complete it Will Stored in LocalStorage</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>On Statistics page it will show your Donation Stats </li>
                            </div>

                            <div className=" flex justify-around ">
                                <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/programming-hero-web-course2/my-course-roster-hasib1010.git"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a> 

                           <a className='btn btn-warning  flex gap-3 items-center' target='_blank' href="https://tense-representative.surge.sh/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a> 
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </motion.div>
    );
};

export default Projects;