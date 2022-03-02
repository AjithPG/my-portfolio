import { images } from '../../constants'
import Image from 'next/image'
import { useState } from 'react';
import { motion } from "framer-motion"
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='app__navbar flex items-center justify-between w-100 px-4 py-6  bg-white shadow-sm'>
            <div className='app__navbar-logo flex items-center justify-center'>
                <Image src={images.logo} alt="Logo" width={90} height={20} />
            </div>
            {/* <ul className='app__navbar-links  flex-1 items-center justify-center hidden lg:flex'>
                {
                    ['Home', 'About', 'Work', 'Skills', 'Testimonial', 'Contact'].map((item) => (
                        <li key={`link-${item}`} className='mr-4 cursor-pointer flex-col'>
                            <div />
                            <a href={`#${item}`} className='text-grey font-medium hover:text-secondary'>{item}</a>
                        </li>
                    ))
                }
            </ul> */}
            <div className="app__navbar-menu bg-secondary text-white flex items-center justify-center w-8 h-8 rounded-full lg:hidden cursor-pointer">
                <i className="ri-menu-line ri-lg" onClick={() => setToggle(true)}></i>
                {
                    toggle && (
                        <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} className="fixed top-0 bottom-0 right-0 w-80 z-10 h-screen flex flex-col justify-end items-end bg-white shadow-lg p-4">

                            <i className="ri-close-line ri-xl text-brown top-3" onClick={() => setToggle(false)}></i>
                            <ul className="h-full w-full flex flex-col justify-start items-start">


                                {
                                    ['Contact'].map((item) => (
                                        <li key={item} className='mr-4 cursor-pointer flex-col m-3'>

                                            <a href={`#${item}`} className='text-grey font-medium hover:text-secondary text-sm uppercase'>{item}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </nav>
    );
}

export default Navbar;