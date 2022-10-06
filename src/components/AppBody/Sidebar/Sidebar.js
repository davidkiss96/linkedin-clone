import { useSelector } from "react-redux";
import { selectUser } from "../../../state/userSlice";
import User from "../../User/User";
import "./Sidebar.scss";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1631507463816-a9972ba0528c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt=""
        />
        {user && <User className="sidebar__avatar" photoUrl={user?.photoUrl} name={user?.displayName} />}
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,455</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,147</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("nextjs")}
        {recentItem("redux")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
