import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { images } from '../../constants'
import {urlFor,client} from '../../client'
const About = () => {
    // const [abouts,setAbouts] = useState([]);
    // useEffect(()=>{
    //   const query = '*[_type == "abouts"]';
    //   client.fetch(query).then((data)=>{setAbouts(data);});
    // },[]);
    const abouts = [
        {title:'Web Development',description:'I am a good Web developer',imgUrl:images.about01},
        {title:'Web Design',description:'I am a good Web developer',imgUrl:images.about02},
        {title:'UI/UX',description:'I am a good Web developer',imgUrl:images.about03},
        {title:'Web Animation',description:'I am a good Web developer',imgUrl:images.about04}];
    return (
        <div>
            <h2 className="head-text text-center font-bold text-3xl mt-4 tracking-wide">
                I Know that <span className="text-secondary"> Good Design</span>
                <br/>
                means
                <span className="text-secondary"> Good Business</span>
            </h2>
            <div className="app__profiles flex justify-center align-center flex-wrap mt-8">
               
         {
             abouts.map((item,index)=>(
                 <div className="app__profiles-item w-48 flex flex-col  justify-start align-start m-8" key={index}>
                     <Image src={item.imgUrl} alt="profile" className="rounded"/>
                     <h1 className="font-bold text-base mt-2">{item.title}</h1>
                     <p className="text-sm text-grey mt-2">{item.description}</p>
                 </div>
                 
             ))
         }
            </div>
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

export default About;