export default function InputForm({label,type, placeholder, kind,required}){
    return(
   <div>
   
   <label htmlFor={label} className="text-white font-[Museo] float-left">{label}</label>
       <input type={type}
        placeholder={placeholder}
         {...kind(label,{required})}
          className="rounded-md text-white bg-[#464646] border-b border-r-0 border-l-0 border-t-0 outline-none font-[Museo] text-xl w-full font-bold placeholder:font-[Museo] placeholder:font-bold placeholder:ml-12 h-[2em]" />
   
   
   </div>
     
       
    );
}