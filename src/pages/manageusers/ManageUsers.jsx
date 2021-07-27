import "./manageusers.css";
import {
  Table,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  CardHeader,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export default function manageUsers() {
  return (
    <div style={{ marginTop: "30px", padding: "0 30px" }}>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
      <div className="table">
        <Card>
          <CardHeader>Users</CardHeader>
          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <UncontrolledDropdown>
                    <DropdownToggle role="button">Actions</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
