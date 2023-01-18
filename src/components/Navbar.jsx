import darkModeLogo from "../darkmodelogotext.png";
import lightModeLogo from "../lightmodelogotext.png";
import   Navigationlinks from "./NavigationLinks";
import ProfileNav from "./ProfileNav.jsx";
import Search from "./Search";

function Navbar() {
    return(
    <div className="navbar flex flex-row ">
      <div className="logo">
        <img src={lightModeLogo} className=" md:ml-[4em] mt-3 object-cover h-1/2 " alt="StreamMate" />
        </div>
      
      
      <Navigationlinks/>
      <Search/>
      <ProfileNav/>
    
    </div>

    );
}

export default Navbar;