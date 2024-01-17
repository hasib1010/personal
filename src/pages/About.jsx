import React from 'react';
import { FaSchool, FaWhatsapp, FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoSchoolOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";
const About = () => {
    function makePhoneCall() {
        var phoneNumber = "+8801608471414";
        window.open("tel:" + phoneNumber);
    }
    function makeWhatsAppCall() {
        var phoneNumber = "01727480477";
        var whatsappLink = "https://wa.me/" + phoneNumber;
        window.open(whatsappLink);
    }
    function openFacebookApp() {

        var facebookId = "hasib.savage007";
        var facebookAppLink = "fb://profile/" + facebookId;
        var fallbackLink = "https://www.facebook.com/" + facebookId;
        window.open(facebookAppLink, "_blank") || window.open(fallbackLink, "_blank");
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
        >
            <div className=' container mx-auto'>
                <h2 className='text-6xl text-center  font-bold'>About Me</h2>

                <div className='relative'>
                    <p className='btx w-3/6 mx-auto mt-9  text-xl text-center'>
                        <span className=' text-2xl  '>Hello there!</span>
                        <br />
                        <div className='flex items-center justify-between'>
                            <span className='text-2xl ml-20'>I'm MD Haibul Hasan, but you can call me Hasib.</span>

                        </div>
                    </p><br />
                    <hr />
                    <div className='mb-6 flex  justify-around mt-6 gap-6 border p-6 rounded-lg'>
                        <p className='w-1/3 border p-4 rounded-lg '>
                            <br />
                            At 23 years young, I'm a passionate front-end developer with a focus on creating captivating digital experiences. I specialize in using cutting-edge technologies such as React and Next.js to bring creative ideas to life in the digital realm.
                            <br /><br />
                            With a deep understanding of front-end development, I leverage the power of React to build dynamic and interactive user interfaces. React's component-based architecture allows me to create modular and scalable code, providing a foundation for seamless and efficient web applications.
                            <br /><br />
                            In addition to React, I embrace Next.js to take my projects to the next level. Next.js, with its built-in features like server-side rendering and automatic code splitting, enables me to deliver faster and more optimized web applications. This framework empowers me to build not only visually appealing interfaces but also high-performing and SEO-friendly websites.
                            <br /><br />
                            My journey in web development is marked by a commitment to staying at the forefront of industry trends. I am a perpetual learner, always exploring new possibilities and incorporating the latest advancements into my work. This curiosity not only keeps my skills sharp but also ensures that the projects I contribute to are at the forefront of innovation.
                            <br /><br />
                            Collaboration is key in the ever-evolving world of web development, and I thrive in diverse teams where ideas flow freely. Effective communication and a dedication to meeting deadlines are integral to my work ethic, ensuring that projects are executed smoothly and efficiently.
                            <br /><br />
                            I invite you to explore my portfolio, where you'll find a collection of projects showcasing my proficiency in React, Next.js, and other front-end technologies. If you share my enthusiasm for creating exceptional web experiences, I'm eager to connect and explore how we can collaborate to bring your digital vision to life. Let's build something amazing together!
                        </p>
                        <div className='border rounded-lg p-6 w-1/3 flex flex-col items-center justify-center'>
                            <h3 className='text-3xl font-semibold text-center'>Education</h3>
                            <p className='mt-10'>
                                <div className='flex flex-col justify-center items-center gap-14'>
                                    <div className='flex items-center gap-6 '>
                                        <FaSchool className='text-4xl'></FaSchool>
                                        <div className='flex flex-col gap-3'>
                                            <p><span className=' font-bold '>School:</span> Tularampur Secondary School..</p>
                                            <p className=' pl-14 italic text-sm mt-1 '>Narail, Khulna, Bangladesh</p>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-6 '>
                                        <IoSchoolOutline className='text-4xl'></IoSchoolOutline>
                                        <div flex flex-col gap-5>
                                            <p><span className='font-bold '>College:</span> Dhaka Polytechnic Institute..</p>
                                            <p className=' pl-14 italic text-sm mt-1 '>Tetjagon, Dhaka, Bangladesh</p>
                                            <p className='   bold text-base mt-1 '>Diploma in Computer Science and Technology</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-2xl font-semibold text-center  my-9'>Training</h3>
                                <div className='flex flex-col justify-center items-center gap-14'>
                                    <div className='flex items-center gap-6 '>
                                        <GiSkills className='text-4xl'></GiSkills>
                                        <div className='flex flex-col items-center justify-center gap-1'>
                                            <p><span className=' font-bold text-xl'> Programming Hero </span ></p>
                                            <p className=' italic text-sm mt-1 '>Online</p>
                                            <p className='   italic text-sm mt-1 '>Complete Web Development</p>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-6 '>
                                        <GiSkills className='text-4xl'></GiSkills>
                                        <div className='flex flex-col  gap-2 items-center'>
                                            <p><span className='font-bold '>  freeCodeCamp.Org</span></p>
                                            <p className='   italic text-sm mt-1 '>Online</p>
                                            <p className='   bold text-base mt-1 '>Responsive Web Design</p>
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className='border rounded-lg p-6 w-1/3 flex flex-col '>

                            <h4 className='text-4xl font-semibold text-center'>Personal Information</h4>

                            <div className='flex flex-col '>
                                <div className='mt-3 flex flex-col gap-4  '>
                                    <p className='text-xl'><strong>Name:</strong>  MD Hasibul Hasan</p>
                                    <p className='text-xl'><strong>Hometown:</strong> Narail, Khulna, Bangladesh</p>
                                    <p className='text-xl'><strong>Address: </strong>  Green-Way Road, Maghbazar</p>
                                </div>

                                <div>
                                    <h3 className='text-2xl font-semibold text-center mt-7'>Contact Info</h3>
                                    <div className='flex flex-col gap-6 mt-3'>
                                        <p onClick={makePhoneCall} className='flex items-center gap-5 cursor-pointer  hover:text-blue-700   text-blue-500  text-4xl'><IoCallSharp className='text-4xl ' /> +8801608-471414</p>
                                        <p onClick={makeWhatsAppCall} className=' cursor-pointer text-4xl flex gap-3 text-green-500 hover:text-green-800'><FaWhatsapp /> Get Me On Whatsapp</p>
                                        <p onClick={openFacebookApp} className=' cursor-pointer text-4xl flex gap-3 text-blue-400 hover:text-blue-800'><FaFacebook  /> Get Me On Facebook</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mb-5' />
                </div>
            </div>
        </motion.div >
    );
};
export default About;