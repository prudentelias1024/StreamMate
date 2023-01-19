
export default function GetStarted() {
  return(
   <form  method="post" className="text-center inline-block">
   <input type="text" placeholder="Enter your email" name="email" className="font-[Museo] text-xl w-2/5 font-bold placeholder:font-[Museo] placeholder:font-bold placeholder:ml-12 h-[4em]" />
   <button className="bg-blue-500 text-white p-5 w-52 font-[Museo] h-[5em]" type="submit">Sign Up</button>

   </form>

  );

}