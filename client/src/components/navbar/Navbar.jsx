import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import avatar from "../../assets/avatar.jpg"
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
  const {toggleActive, setToggleActive} = useContext(UserContext);

  return (
    <div className='navbar'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span id='appname'>AnonymousSurf</span>
        </Link>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>AnonymousSurf</span>
        </Link>
        <div className='homeIcon'>
          <HomeOutlinedIcon/>
        </div>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search...' />
        </div>
        <button onClick={() => toggleActive === "off" ? setToggleActive("on") : setToggleActive("off")}>
        <img src='/Images/add.png' width="25px" />
        </button>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
      </div>
      <div className="right">
        <Person2OutlinedIcon className='navlogo'/>
        <EmailOutlinedIcon className='navlogo'/>
        <NotificationsOutlinedIcon className='navlogo'/>
        <div className="user">
          <img src={avatar} className='avatar' alt="" />
          <span>Durgesh Gupta</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
