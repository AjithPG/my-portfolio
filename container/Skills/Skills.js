import { images } from "../../constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor, client } from '../../client';
import { useEffect, useState } from "react";
const Skills = () => {
  // const skills = [
  //   {
  //     title: "HTML",
  //     imgUrl: images.html,
  //   },
  //   {
  //     title: "CSS",
  //     imgUrl: images.css,
  //   },
  //   {
  //     title: "Javascript",
  //     imgUrl: images.javascript,
  //   },
  //   {
  //     title: "React",
  //     imgUrl: images.react,
  //   },
  //   {
  //     title: "Git",
  //     imgUrl: images.git,
  //   },
  // ];

  // const experience = [
  //   {
  //     year: "2021 - Present",
  //     works: [
  //       {
  //         title: "Javascript Developer",
  //         company: "Tata Consultancy Service",
  //       },
  //     ],
  //   },
  //   {
  //     year: "2020 - 2021",
  //     works: [
  //       {
  //         title: "Front End Developer",
  //         company: "GL Infotech",
  //       },
  //     ],
  //   },
  //   {
  //     year: "2019 - 2020",
  //     works: [
  //       {
  //         title: "Front End Developer",
  //         company: "i-Techtonic System",
  //       },
  //     ],
  //   },
  // ];
  const [skill,setSkill] = useState([]);
  const [expe,setExpe] = useState([]);

  useEffect(()=>{

    const query = '*[_type=="skills"]';
    client.fetch(query).then((data)=>{

      setSkill(data);

    })

    const work = '*[_type=="experiences"]';
    client.fetch(work).then((data)=>{

      setExpe(data);
    
    })

  },[])

  return (
    <div className="app__skills px-4 lg:px-0  py-8 lg:pt-8 lg:pb-20">
      <h2 className="head-text text-center font-bold text-3xl mt-4 tracking-wide mb-12 font-secondary">
        Skills <span className="text-secondary">&</span> Experience
      </h2>
      <div className="app__skills-container flex flex-col lg:flex-row w-4/5 m- mx-auto">
        <div className="app__skills-list flex flex-wrap justify-center lg:justify-start items-start mr-6 flex-1 mb-8 lg:mb-0">
          {skill?.map((skills,index) => (
            <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.8}} className="app_skills-item flex text-center flex-col mr-4 ml-4 mb-4" key={index}>
              <div className="app_skills-img flex w-20 h-20 rounded-full justify-center items-center hover:shadow-md bg-white">
                <img
                  src={urlFor(skills.icon)}
                  alt={skills.name}
                  width={60}
                  height={60}
                />
              </div>
              <p className="app-skills-title text-base font-medium">
                {skills.name}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="app_skills-exp flex-1 flex justify-center">
          <div className="flex flex-col items-center w-full sm:w-4/5 md:w-1/2 lg:w-full lg:items-stretch">
          {expe.map((exp, index) => (
            <motion.div
              whileInView={{opacity:[0,1]}}
              transition={{duration:0.8}}
              className="app_skills-exp-item flex items-start mb-8 w-full"
              key={index}
            >
              <div className="app_skills-exp-year   w-1/2 lg:w-3/12">
                <p className="text-base text-secondary font-medium">{exp.year}</p>
              </div>
              <div className="app_skills-exp-works flex-1">
                {exp?.works?.map((item, index) => (
                 
                    <div className="app_skills-exp-work" key={index}>
                      <h4 className="text-md font-bold">{item.name}</h4>
                      <p className="text-sm text-grey">{item.company}</p>
                    </div>
                
                ))}
              </div>
            </motion.div>
          ))}
          </div>
         
         
          
        </div>
      </div>
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

export default Skills;
