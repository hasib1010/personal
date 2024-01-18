import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-black text-white '>
            {/* <div className='container mx-auto min-h-20'>
               <div className='py-4'>
               <h2 className='text-3xl font-semibold italic pt-6'>MD. Hasibul Hasan (HASIB)</h2>
                <p className='italic'>Dhaka, Bangladesh</p>
                 
               </div>
               <small>All right reserved by @ hasib</small>
            </div> */}
            <footer class="bg-gray-800 text-white py-8">
                <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">

                    <div class="mb-4 md:mb-0">
                        <h3 class="text-lg font-semibold mb-2">Contact Information</h3>
                        <p>Email: mdhasibulhasan360@gmail.com</p>
                        <p>Phone: +8801608-471414</p>
                    </div>


                    <div class="mb-4 md:mb-0">
                        <h3 class="text-lg font-semibold mb-2">Connect with Me</h3>
                        <div class="flex space-x-4">

                            <div className='w-fit mx-auto'>
                                <a className='text-5xl hover:text-blue-600' href="https://github.com/hasib1010" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
                            </div>
                            <div className='w-fit mx-auto'>
                                    <a className='text-5xl hover:text-blue-600' href="https://www.linkedin.com/in/md-hasibul-hasan77/" target="_blank" rel="noopener noreferrer"><FaLinkedin ></FaLinkedin ></a>
                                </div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>


                    <div>
                        <p>&copy; 2024 hasib. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
