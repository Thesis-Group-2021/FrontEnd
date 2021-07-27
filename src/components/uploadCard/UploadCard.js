import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  Button,
  Progress,
} from "reactstrap";

function uploadCard() {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="d-flex justify-content-between">
          <span>Project Name</span>
          <span className="text-muted h6">16 Apr 2021</span>
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Project Name
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <CardText>Some project description</CardText>
      </CardBody>
      <CardFooter>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Button>Check</Button>
          <span className="bg-blue">Similarity percentage: 75%</span>
        </div>
        <Progress striped color="success" value="75" />
        <div className="mt-4">
          <Button style={{ marginRight: "20px" }}>Approve</Button>
          <Button>Decline</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default uploadCard;
