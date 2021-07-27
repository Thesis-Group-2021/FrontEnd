import ManageUsers from "./pages/manageusers/ManageUsers.jsx";
import Profile from "./pages/profile/Profile.jsx";

import { Route, Switch } from "react-router-dom";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div style={{ marginLeft: "228px" }}>
        <Switch>
          <Route path="/manage" component={ManageUsers} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </>
  );
}

export default App;
