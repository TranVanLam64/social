import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      throw err.response;
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>vnlmsocial</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>
            <HomeOutlinedIcon
              style={{ cursor: "pointer" }}
            />
          </span>
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={toggle}
          />
        ) : (
          <DarkModeOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={toggle}
          />
        )}
        <GridViewOutlinedIcon
          style={{ cursor: "pointer" }}
        />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon
          style={{ cursor: "pointer" }}
        />
        <EmailOutlinedIcon style={{ cursor: "pointer" }} />
        <NotificationsNoneOutlinedIcon
          style={{ cursor: "pointer" }}
        />
        <div
          className="user"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
          {openMenu && (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
