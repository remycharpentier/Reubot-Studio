import { Card, Col, Row } from "react-bootstrap";
import team from "../../constants/Team";
import { StyledTeamPhotoBoard } from "../styles/TeamPhotoBoard.styled";

export default function TeamPhotoBoard() {
  return (
    <>
      <StyledTeamPhotoBoard>
        <Row className="g-3">
          {team.map((member, index) => (
            <Col key={index} md={3}>
              <Card
                className={`team-card bg-${index % 12}`}
                style={{ height: "100%" }}
              >
                <Card.Img variant="top" src={member.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">
                    {member.name} {member.lastName}
                  </Card.Title>
                  <Card.Text className="text-center">{member.role}</Card.Text>
                  <Card.Text className="text-start">{member.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </StyledTeamPhotoBoard>
    </>
  );
}
