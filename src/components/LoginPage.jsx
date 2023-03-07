import InputForm from "./Input";
import lightModeLogo from "../trans.png";
import darkModeLogo from "../darkmodelogotext.png";
import bgImg from "../bg.jpg";
import { Link, Router, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"; 
import { useForm } from "react-hook-form";
import schema from "../schema/formSchema";

export default function LoginPage(){
    const {register, handleSubmit, formState: {isDirty,isValid,errors}} = useForm({resolver: yupResolver(schema),mode: 'onChange', defaultValues: {Email : '', Password: ''}})
    // const navigate = useNavigate()
    return(
            <>
             <img    src={bgImg} className="object-cover h-full" alt="StreamMate" />
        <div  className="absolute top-0  h-auto flex flex-col">
        <div className="flex flex-row   justify-between">
        <img src={lightModeLogo} className=" md:ml-[4em] mt-3 object-cover h-1/2 " alt="StreamMate" />
       
        </div>
        <form 
       
        onSubmit={handleSubmit((data) =>{
            
            console.log(data)
            // navigate('/browse')
            })}  method="post" className="text-start flex flex-col bg-black p-20 rounded-3xl opacity-[.85] translate-x-[140%] translate-y-[25%] ">
        <p className="font-[Museo] text-white text-3xl mb-12 ">Login</p>
        <div className="flex flex-col gap-10">
          <InputForm kind={register}  label="Email" name="Email" type="text" placeholder="Enter Your Email"/>
          {isDirty && !isValid && errors.Email && <p className=" mt-[-2em] text-red-600 capitalize ">{errors.Email?.message}</p>}
     
          <InputForm  kind={register} label="Password" name="Password" type="password" placeholder="Enter your Password"/>
          {isDirty && !isValid && errors.Password && <p className=" mt-[-2em] text-red-600 capitalize ">{errors.Password?.message}</p>}
     
             <button className="bg-blue-500 text-white font-bold p-5 w- font-[Museo] h-[4em]" type="submit">Login</button>
             <p className="text-white">
          Not a User?  <Link className="text-blue-500" to="/signup">Sign Up</Link>
            </p> 
     </div>
            </form>
        </div>
            </>
    );
}