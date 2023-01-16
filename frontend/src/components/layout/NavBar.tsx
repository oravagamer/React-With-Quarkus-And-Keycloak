import { Link } from "react-router-dom";
import LogButton from "../buttons/LogButton";

const NavBar = () => {
  return (
    <nav>
      <Link to="">Home</Link>
      <Link to="profile">Profile</Link>
      <LogButton />
    </nav>
  );
};

export default NavBar;
