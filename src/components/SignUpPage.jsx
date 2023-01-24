import InputForm from "./Input";
import lightModeLogo from "../trans.png";
import darkModeLogo from "../darkmodelogotext.png";
import bgImg from "../bg.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {yupResolver} from '@hookform/resolvers/yup';
import schema from '../schema/formSchema'
export default function SignUpPage(){
  
  const { register, handleSubmit, formState: {errors, isDirty, isValid} }  = useForm({resolver: yupResolver(schema), mode: 'onChange',defaultValues: {Email: '', Password: ''}})
   const [email, setEmail] = useState(null) 
   const [password, setPassword] = useState(null) 
    
 
  
    return(
            <>
          
             <img    src={bgImg} className="object-cover h-full" alt="StreamMate" />
        <div  className="absolute top-0  h-auto flex flex-col">
        <div className="flex flex-row   justify-between">
        <img src={lightModeLogo} className=" md:ml-[4em] mt-3 object-cover h-1/2 " alt="StreamMate" />
  
        </div>
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}  method="post" className="text-start flex flex-col bg-black p-20 rounded-3xl opacity-[.85] translate-x-[140%] translate-y-[25%] ">
        <p className="font-[Museo] text-white text-3xl mb-12 ">Signup</p>

        <div className="flex flex-col gap-10">
       
          <InputForm  kind={register} label="Email" type="text" placeholder="Enter your Email"/>
          {isDirty && !isValid && errors.Email && <p className=" mt-[-2em] text-red-600 capitalize ">{errors.Email?.message}</p>}
         
          <InputForm kind={register} label="Password"  type="password" placeholder="Create Your Password"/>
             {isDirty && !isValid && errors.Password && <p className=" 
             mt-[-2em] text-red-600 capitalize ">{errors.Password?.message}</p>}
         
             <button className="bg-blue-500 text-white p-5 w- font-[Museo] h-[4em]" type="submit">Sign Up</button>
          <p className="text-white">
          Have an account?   <Link className="text-blue-500" to="/login">Login</Link>
            </p> 
     </div>
            </form>
        </div>
            </>
    );
}