export default function InputForm(props){
    return(
   <div>
   
   <label htmlFor="Email" className="text-white font-[Museo] float-left">{props.name}</label>
       <input type={props.type} placeholder={props.placeholder} name={props.name} className="rounded-md text-white bg-[#464646] border-b border-r-0 border-l-0 border-t-0 outline-none font-[Museo] text-xl w-full font-bold placeholder:font-[Museo] placeholder:font-bold placeholder:ml-12 h-[2em]" />
   
   
   </div>
     
       
    );
}