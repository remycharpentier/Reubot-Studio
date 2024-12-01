import NewsArticles from "../../constants/News";
import { Row, Col } from "react-bootstrap";

export default function NewsArticle() {
  return (
    <>
      <ul>
        {NewsArticles.map((item) => (
          <li key={item.id}>
            <article>
              <Row className="row-article">
                <Col xs={4} md={3}>
                  <img src={item.img} alt="" />
                </Col>
                <Col xs={8} md={9}>
                  <span className="published-text">
                    Article publié le {item.date}
                  </span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </Col>
              </Row>
              <hr />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
