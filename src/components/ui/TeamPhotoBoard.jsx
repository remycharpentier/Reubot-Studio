import { Card, Col, Row } from "react-bootstrap";
import team from "../../constants/Team";
import { StyledTeamPhotoBoard } from "../styles/TeamPhotoBoard.styled";

export default function TeamPhotoBoard() {
  return (
    <>
      <StyledTeamPhotoBoard>
        <Row className="board">
          {team.map((member, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              className="mb-4"
            >
              <Card className={`team-card bg-${index % 12}`}>
                <Card.Img variant="top" src={member.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">
                    {member.name} {member.lastName}
                  </Card.Title>
                  <h6 className="text-center no-indent">{member.role}</h6>
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
