import { motion } from "framer-motion"
import { images } from '../../constants'
const Header = () => {
    return (
        <div className="app__header px-4 lg:px-0 lg:py-8">
            <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__header-info container mx-auto ">
                <div className="app__header-badge py-10 lg:py-32 w-full">
                  
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center"><span className="text-secondary">Hey</span> I'm Ajith <span>👋</span></h2>
                        <h1 className=" text-xl lg:text-3xl font-bold mb-2 text-center">Software Developer with 2+ Years of Frond End Development experience Based in Kerala,India</h1>
                   
                </div>
            </motion.div>
            {/* <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 , delayChildren:0.5 }} className="app__header-img">
               <Image src={images.profile} alt="profile image"/>
            </motion.div> */}
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

export default Header;