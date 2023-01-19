
import lightModeLogo from "../trans.png";
import darkModeLogo from "../darkmodelogotext.png";
import bgImg from "../bg.jpg";
import GetStarted from "./GetStarted";
export default function Hero() {
   
    return(
        <>
         <img    src={bgImg} className="object-cover h-full" alt="StreamMate" />
        <div  className="absolute top-0  h-auto flex flex-col">
        <div className="flex flex-row   justify-between">
        <img src={lightModeLogo} className=" md:ml-[4em] mt-3 object-cover h-1/2 " alt="StreamMate" />
       
        <button className="bg-blue-600 text-white h-full px-4 py-2 mr-8 mt-4 rounded-xl font-[Museo]" type="button">Sign Up</button>
        </div>
        <p style={{lineHeight:' 1.6em'}} className="text-5xl text-white font-[Museo] text-center py-40 px-80 leading-20 font-bold">Watch Hot Movies, TV Shows and Dramas On PPV (Pay Per View)</p>
        <GetStarted/>
        </div>

        </>
    );
}