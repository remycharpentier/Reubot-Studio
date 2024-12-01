import { StyledNews } from "../../components/styles/StyledNews.styled";
import NewsArticle from "../../components/ui/NewsArticles";

export default function News() {
  return (
    <>
      <StyledNews>
        <br />
        <h1>Nos Actualités</h1>
        <NewsArticle />
      </StyledNews>
    </>
  );
}
