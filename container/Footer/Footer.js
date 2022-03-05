import { images } from '../../constants'
import { motion } from "framer-motion"
import Image from 'next/image'
const Footer = () => {
    return (
        <div className="app__footer px-4 lg:px-0" id="Contact">
          <h2 className="header-text head-text text-center font-bold text-3xl mt-4 tracking-wide mb-12 font-secondary">Take a coffee <span className="text-secondary">&</span> chat with me</h2>
          <div className="app__footer-cards  flex flex-wrap justify-around items-center mx-2 mt-4 md:mx-16 mb-4">
              <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.5}} className="app__footer-card w-full md:w-72 flex justify-start items-center p-4 my-4 rounded-xl bg-white">
              <Image src={images.email} alt="Logo" width={40} height={40} className="flex flex-shrink"/>
                  <a href="mailto:ajithpg2411@gmail.com" className="p-text mx-2 font-medium font-secondary text-sm   md:text-base">ajithpg2411@gmail.com</a>
              </motion.div>
              <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.5}} className="app__footer-card w-full md:w-72 flex justify-start items-center p-4 my-4 rounded-xl bg-white">
               <Image src={images.mobile} alt="Logo" width={40} height={40}  className="flex flex-shrink"/>
                  <a href="tel:9961699106" className="p-text mx-2 font-medium font-secondary text-sm  md:text-base">+91 9961699106</a>
              </motion.div>
          </div>
          <footer className=' bg-primary pt-16 pb-8'>
              <div className="container mx-auto">
                  <div className="text-center">
                      <div className="social_icons flex mb-6 justify-center">
                          <a href="https://github.com/AjithPG " target="_blank" className="flex justify-center items-center w-10 h-10">
                          <i className="ri-github-fill ri-xl"></i>
                          </a>
                          <a href="#" className="flex justify-center items-center w-10 h-10">
                          <i className="ri-linkedin-box-fill ri-xl"></i>
                          </a>
                          <a href="#" className="flex justify-center items-center w-10 h-10">
                          <i className="ri-twitter-fill ri-xl"></i>
                          </a>
                      </div>
                      <p>Made with ❤️ by <a href="https://github.com/AjithPG/" className="text-secondary">Ajith PG</a> </p>
                      <p>Site built with <a href="https://nextjs.org/" className="text-secondary">Nextjs</a> and <a href="https://www.sanity.io/" className="text-secondary">Sanity</a> </p>
                  </div>
              </div>
          </footer>
        </div>
    );
}

// export const getStaticProps = async (ctx) => {


//     return {
//         props:{
//             data:null
//         }
//     }
// }

export default Footer;