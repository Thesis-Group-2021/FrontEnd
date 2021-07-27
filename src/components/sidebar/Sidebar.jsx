import "./sidebar.css";

import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <DashboardIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Dashboard</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Manage Admins</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsActiveIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Requests</span>
          </li>
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
