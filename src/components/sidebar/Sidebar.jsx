import "./sidebar.css";

import DashboardIcon from "@material-ui/icons/Dashboard";
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="assets/logo/erhLogo2.jpeg" alt="" />
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <DashboardIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Dashboard</span>
          </li>
          <NavLink
            as="li"
            to="/profile"
            className="sidebarListItem"
            activeClassName="active"
          >
            <PersonIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </NavLink>
          <NavLink as="li" exact to="/manage" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Manage </span>
          </NavLink>

          <li className="sidebarListItem">
            <ExitToAppIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
        </ul>

        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
