import darkModeLogo from "../darkmodelogo.png";
import lightModeLogo from "../lightmodelogotext.png";
import   Navigationlinks from "./NavigationLinks";
import ProfileNav from "./ProfileNav.jsx";
import Search from "./Search";

function Navbar() {
    return(
    <div className="navbar flex flex-row gap-32 ">
      <div className="logo">
        <img src={darkModeLogo} className=" md:ml-[4em] mt-3 object-cover h-4/6 " alt="StreamMate" />
        </div>
      
      
      <Navigationlinks/>
      <Search/>
      <ProfileNav/>
    
    </div>

    );
}

export default Navbar;