import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaEye } from 'react-icons/fa';
const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
        >
            <div className='container mx-auto'>
                <h3 className='lg:text-6xl text-2xl font-bold text-center'>My Recent Projects</h3>

                <div className='my-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>

                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/0YkWs6j/Screenshot-2024-01-16-182418.png" alt="Donation Site Pic" className="lg:h-56 rounded-xl shadow-lg mb-5 w-96" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">Event Management Project</h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>Dynamic data load...</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>Firebase user Integration</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>Private Route Integration  </li>
                            </div>

                            <div className=" flex lg:justify-around justify-between gap-3 mt-10 ">
                                <a className='btn btn-success text-white flex lg:gap-3 items-center' target='_blank' href="https://github.com/programming-hero-web-course-4/b8a9-event-management-hasib1010.git"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a>
                                <a className='btn btn-warning flex gap-3 items-center' target='_blank' href="https://event-management-aab2e.web.app/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a>
                            </div>
                        </div>
                    </div>

                    {/* p-2 */}

                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/r0SWMGQ/Screenshot-2024-01-16-162828.png" alt="Donation Site Pic" className="lg:h-56  lg:w-96 rounded-xl shadow-lg mb-5" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">Donation Campaign Project</h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>On click redirect to details page...</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>After Donation Complete it Will Stored in LocalStorage</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>On Statistics page it will show your Donation Stats </li>
                            </div>

                            <div className="  flex lg:justify-around justify-between gap-3 mt-10 ">
                                <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/programming-hero-web-course-4/b8a8-donation-campaign-hasib1010.git"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a>
                                <a className='btn btn-warning flex gap-3 items-center' target='_blank' href="https://graceful-pie-c16584.netlify.app/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a>
                            </div>
                        </div>
                    </div>

                    {/* p-3 */}

                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/zftQfDb/Screenshot-2024-01-16-183451.png" alt="Donation Site Pic" className="lg:h-56  rounded-xl shadow-lg mb-5" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">News Paper Project</h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>Firebase User Create</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>Unable to Read Without Login</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>After Login User Name and DP Displayed on the top </li>
                            </div>

                            <div className=" flex lg:justify-around justify-between gap-3 mt-10 ">
                                <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/hasib1010/Dragon-News-firebase-authentication.git"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a>

                                <a className='btn btn-warning  flex gap-3 items-center' target='_blank' href="https://dragon-news-auth-d1623.web.app/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a>
                            </div>
                        </div>
                    </div>

                    {/* p-4 */}

                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/jVwGxTY/Screenshot-2024-01-16-185225.png" alt="Donation Site Pic" className="lg:h-56  rounded-xl shadow-lg mb-5" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">Course Registration Project</h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>Credit Count after Selecting a course</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>Unable to Add course more than 20 Credit</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>Can't add a course second time  </li>
                            </div>

                            <div className=" flex lg:justify-around justify-between gap-3 mt-10  ">
                                <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/programming-hero-web-course2/my-course-roster-hasib1010.git"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a>

                                <a className='btn btn-warning  flex gap-3 items-center' target='_blank' href="https://tense-representative.surge.sh/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a>
                            </div>
                        </div>
                    </div>
                    {/* p-5 */}

                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/V99ppSt/Screenshot-2024-01-16-230954.png " alt="Donation Site Pic" className="lg:h-56 lg:w-full rounded-xl shadow-lg mb-5" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">E-Commerce Project </h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>OnClick Add Product in Cart</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>If Total price is more than 200 the COUPON can be applied</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>After APPLY the coupon it will give 20% Discount  </li>
                            </div>

                            <div className="flex lg:justify-around justify-between gap-3 mt-10 ">
                                <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/Programming-Hero-Web-Course4/b8a5-summer-sale-hasib1010"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a>

                                <a className='btn btn-warning  flex gap-3 items-center' target='_blank' href="https://fastidious-kheer-7eda27.netlify.app/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a>
                            </div>
                        </div>
                    </div>
                    {/* p-6 */}

                    <div className="p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-base-300 shadow-xl w-full rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/GdwrRV2/Screenshot-2024-01-16-231954.png " alt="Donation Site Pic" className="lg:h-56 w-full rounded-xl shadow-lg mb-5" />
                        </figure>
                        <div className="  ">
                            <h2 className="text-center font-bold text-2xl text-blue-500">Video Sharing JS Project </h2>
                            <div className='ml-4'>  <strong className='text-start'>Features: </strong>
                                <li className='font-semibold  pl-6 items-center mt-2 text-sm'>Responsive to Mobile, Tablet and PC</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm'>OnClick Nav Category Name it displays category's data</li>
                                <li className='font-semibold pl-6 items-center mt-2 text-sm mb-2 '>Sort by View is able to re-order Data by View Count  </li>
                            </div>

                            <div className="flex lg:justify-around justify-between gap-3 mt-10">
                                <a className='btn btn-success text-white flex gap-3 items-center' target='_blank' href="https://github.com/Programming-Hero-Web-Course4/b8a5-summer-sale-hasib1010"><FaGithub className='text-xl'></FaGithub> <span>Github</span></a>

                                <a className='btn btn-warning  flex gap-3 items-center' target='_blank' href="https://resplendent-medovik-240876.netlify.app/"><FaEye className='text-xl'></FaEye> <span>Live Link</span></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </motion.div>
    );
};

export default Projects;