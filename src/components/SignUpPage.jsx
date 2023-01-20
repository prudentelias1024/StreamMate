import InputForm from "./Input";
import lightModeLogo from "../trans.png";
import darkModeLogo from "../darkmodelogotext.png";
import bgImg from "../bg.jpg";


export default function SignUpPage(){

    return(
            <>
             <img    src={bgImg} className="object-cover h-full" alt="StreamMate" />
        <div  className="absolute top-0  h-auto flex flex-col">
        <div className="flex flex-row   justify-between">
        <img src={lightModeLogo} className=" md:ml-[4em] mt-3 object-cover h-1/2 " alt="StreamMate" />
       
        </div>
        <form  method="post" className="text-start flex flex-col bg-black p-20 rounded-3xl opacity-[.85] translate-x-[140%] translate-y-[25%] ">
        <p className="font-[Museo] text-white text-3xl mb-12 ">Signup</p>
        <div className="flex flex-col gap-10">
          <InputForm name="Email" type="text" placeholder="Enter your Email"/>
          <InputForm name="Password" type="password" placeholder="Create Your Password"/>
             <button className="bg-blue-500 text-white p-5 w- font-[Museo] h-[4em]" type="submit">Sign Up</button>
     </div>
            </form>
        </div>
            </>
    );
}