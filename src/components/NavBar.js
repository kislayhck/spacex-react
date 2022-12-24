import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png"
          width="100px"
          alt="logo"
        />

        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
