import "./HeaderOption.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../../state/userSlice";
import User from "../../User/User";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <User className="headerOption__icon" photoUrl={user?.pohotUrl} name={user?.displayName} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
