import "./home.css";
import { Row, Col } from "reactstrap";
import UploadCard from "../../components/uploadCard/UploadCard";

export default function Home() {
  return (
    <div style={{ marginTop: "30px", padding: "0 30px" }}>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
        <Row className="mb-4">
          <Col className="mb-4">
            <UploadCard />
          </Col>
          <Col>
            <UploadCard />
          </Col>
        </Row>
      ))}
    </div>
  );
}
