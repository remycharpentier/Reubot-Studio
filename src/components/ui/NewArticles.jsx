import News from "../../constants/News";
import { Row, Col } from "react-bootstrap";
import { StyledNews } from "../styles/News.styled";
import React from "react";

export default function NewArticles() {
  return (
    <StyledNews>
      {News.map((item, index) => (
        <React.Fragment key={item.id}>
          <article>
            <Row className="row-article">
              <Col xl={4} lg={5} xs={12}>
                <img src={item.img} alt={`Image de l'article: ${item.title}`} />
              </Col>
              <Col xl={8} lg={7} xs={12} className="text-box">
                <span className="published-text">
                  Article publié le {item.date}
                </span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </Col>
            </Row>
          </article>
          {/* Afficher <hr /> seulement si ce n'est pas le dernier article */}
          {index < News.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </StyledNews>
  );
}
