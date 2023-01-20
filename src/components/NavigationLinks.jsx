import { Link } from "react-router-dom";
import Browse from "./Browse";

function Navigationlinks() {
    return(
        <ul className="flex flex-row gap-5 text-xl font-bold font-[Mulish] -ml-9 mt-8">
            <li><Link to='/browse' >Home</Link></li>
            <li><Link >Trending</Link></li>
            <li><Link >Oldies</Link></li>
            <li><Link className="no-underline " >My List</Link></li>
            <li><Link >Popular</Link></li>
        </ul>
    );
}

export default Navigationlinks;