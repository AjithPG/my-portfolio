import { images } from '../../constants'
import { motion } from "framer-motion"
import Image from 'next/image'
const Footer = () => {
    return (
        <>
          <h2 className="header-text head-text text-center font-bold text-3xl mt-4 tracking-wide mb-12 font-secondary">Take a coffee <span className="text-secondary">&</span> chat with me</h2>
          <div className="app__footer-cards  flex flex-wrap justify-around items-center mt-4 mx-16 mb-4">
              <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.5}} className="app__footer-card w-72 flex justify-start items-center p-4 my-4 rounded-xl bg-white">
              <Image src={images.email} alt="Logo" width={40} height={40} />
                  <a href="mailto:ajithpg2411@gmail.com" className="p-text mx-2 font-medium font-secondary  md:text-base">ajithpg2411@gmail.com</a>
              </motion.div>
              <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.5}} className="app__footer-card w-72 flex justify-start items-center p-4 my-4 rounded-xl bg-white">
              <Image src={images.mobile} alt="Logo" width={40} height={40} />
                  <a href="tel:9961699106" className="p-text mx-2 font-medium font-secondary  md:text-base">+91 9961699106</a>
              </motion.div>
          </div>
          <footer className=' bg-primary pt-16 pb-8'>
              <div className="container mx-auto">
                  <div className="text-center">
                      <div className="social_icons flex mb-6 justify-center">
                          <a href="#" className="flex justify-center items-center w-10 h-10">
                          <i className="ri-github-fill ri-xl"></i>
                          </a>
                          <a href="#" className="flex justify-center items-center w-10 h-10">
                          <i className="ri-linkedin-box-fill ri-xl"></i>
                          </a>
                          <a href="#" className="flex justify-center items-center w-10 h-10">
                          <i className="ri-twitter-fill ri-xl"></i>
                          </a>
                      </div>
                      <p>© Ajith PG 2022 </p>
                  </div>
              </div>
          </footer>
        </>
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