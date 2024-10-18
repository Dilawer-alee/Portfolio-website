import react from "react";
import ProjectCards from  "./ProjectCards";

const Project = () => {
    return(
    <div id="Projects" className="p-10 md:p-24 text-white">
       
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-8  flex flex-wrap gap-5">
        <ProjectCards title={'blogging website'} main='this is a blogging website i created  next js and some component libarary used 
        some component libarary'/>
    <ProjectCards title={'Youtube clone'} main='this is a blogging website i created  next js and some 
    component libarary used some component libarary'/>
   <ProjectCards title={'Netflix clone'} main='this is a blogging website i created  next js and some 
    component libarary used some component libarary'/>

        </div>

    </div>
    )
}

export default Project;