import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { images } from "../../constants";
import Image from "next/image";
const Work = () => {
  const Works = [
    {
      title: "Holbos",
      description: "STEM Learning Platform",
      tags: "Website Clone",
      imgUrl: images.about01,
    },
    {
      title: "Demo",
      description: "Best Learning Platform",
      tags: "Web App",
      imgUrl: images.about02,
    },
  ];
  const [work,setWork] = useState([]);
  const [filterWork,setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });



     useEffect(()=>{
         
      const query = '*[_type=="works"]';
      client.fetch(query).then((data)=>{
  
        setWork(data);
        setFilterWork(data);
   
      })
  
        
     },[])
  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100,opacity:0}])
    setTimeout(() => {
      setAnimateCard([{y:0,opacity:1}])
      if(item === 'All'){
        setFilterWork(work);
      } else {
        setFilterWork(work.filter((i)=> i.tags.includes(item)))
      }
    }, 500);
  };

  return (
    <div className="app__works px-4 lg:px-0  py-8 lg:pt-8 lg:pb-20">
      <h2 className="head-text text-center font-bold text-3xl mt-4 tracking-wide mb-12 font-secondary">
        My Creative <span className="text-secondary">Portfolio</span> Section
      </h2>
      <div className="app__work-filter flex justify-center items-center flex-wrap  mb-8">
        {["Web App", "Website Clone", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`${
              activeFilter === item ? "bg-secondary text-white" : ""
            } px-4 py-4 rounded-lg  text-sm font-bold cursor-pointer m-2 bg-white hover:bg-secondary hover:text-white`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio flex flex-wrap justify-center items-center"
      >
        {filterWork.map((work, index) => (
          <div
            className="app__work-item w-72 flex flex-col m-4 p-4 rounded-lg bg-white shadow-md"
            key={index}
          >
            <div className="app__work-img">
              <img src={urlFor(work.imgUrl)} alt={work.title} />
            </div>
            <div className="app__work-content">
              <h4 className="text-base text-center font-medium">
                {work.title}
              </h4>
              <p className="text-sm text-center font-normal text-grey mb-4">
                {work.description}
              </p>
              <div className="flex justify-center">
              <button className="bg-secondary text-white px-3 py-1 rounded">
                <a href={work.projectLink} target="_blank">View</a>
              </button>
              </div>
            
              {/* <div className="app__work-tag">
                <p>{work.tags}</p>
              </div> */}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// export const getStaticProps = async (ctx) => {

//     return {
//         props:{
//             data:null
//         }
//     }
// }

export default Work;
