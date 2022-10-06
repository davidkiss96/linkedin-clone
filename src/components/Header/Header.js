import "./Header.scss";
import {
  SearchIcon,
  HomeIcon,
  SupervisorAccountIcon,
  NotificationsIcon,
  BusinessCenterIcon,
  ChatIcon,
} from "../../icons";
import HeaderOption from "./HeaderOption/HeaderOption";
import { logout } from "../../state/userSlice";

import { useDispatch } from "react-redux";
import { auth } from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} onClick={logoutOfApp} title="me" />
      </div>
    </div>
  );
};

export default Header;
