import { IoIosNotifications } from "react-icons/io";
import   MockImage from "../mock.png";
function ProfileNav() {
    return (

        <>
        <a href="#">
        <IoIosNotifications className="text-5xl ml-8 mt-5" />
        </a>
        <img src={MockImage} className="h-16 w-16 rounded-full object-cover mt-3 ml-3" alt="Profile Image" />

        
        </>
    );
}

export default ProfileNav;