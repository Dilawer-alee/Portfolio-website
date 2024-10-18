
// import react from react;
import Html from '../../Images/html.png'
import css from '../../Images/css.png'
import javascript from '../../Images/javascript.png'
import react from '../../Images/react.png'
import node from '../../Images/node.png'
import mongodb from '../../Images/mongodb.png'
import google from '../../Images/google.png'
import microsoft from '../../Images/microsoft.png'
import Netflix from '../../Images/netflix.png'






 const Experience = () => {
    return(
        <div id="Experience" className="p-10 md:p-24">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
            <div className="flex flex-wrap items-center justify-around">
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
          <img src={Html} size={50}/>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
          <img src={css} size={50}/>
          </span>
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
          <img src={javascript} alt="JavaScript" className="w-12 h-12" />

          </span> */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
          <img src={react} size={50}/>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
          <img src={node} size={50}/>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
          <img src={mongodb} size={50}/>
          </span>
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
          <img src={Html} size={50}/>
          </span> */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
          <img src={javascript} alt="JavaScript" className="w-20 h-12" />

          </span>
         
          </div>
          <div>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img src={google} sizes={50} className='#4285f4'/>
            <span className='text-white'>
                <h2 className='leading-tight'>Software Engineer,Google</h2>
                <p className='text-sm leading-tight  font-thin'>oct 2023- present</p>
                <ul className='text-sm p-2'></ul>
                <li>Work as Software Developer</li>
                <li>Sinior  SDE developer</li>
            </span>
          </div>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img src={microsoft} sizes={50} className='#E50914'/>
            <span className='text-white'>
                <h2 className='leading-tight'>Software Engineer,Google</h2>
                <p className='text-sm leading-tight  font-thin'>oct 2023- present</p>
                <ul className='text-sm p-2'></ul>
                <li>Work as Software Developer</li>
                <li>Sinior  SDE developer</li>
            </span>
          </div>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img src={Netflix} sizes={50} className='#ff9900'/>
            <span className='text-white'>
                <h2 className='leading-tight'>Software Engineer,Google</h2>
                <p className='text-sm leading-tight  font-thin'>oct 2023- present</p>
                <ul className='text-sm p-2'></ul>
                <li>Work as Software Developer</li>
                <li>Sinior  SDE developer</li>
            </span>
          </div>
          </div>
            </div>
        </div>
    )
}
export default Experience;