import { StyledNews } from "../../components/styles/News.styled";
import NewsArticle from "../../components/ui/NewsArticles";

export default function News() {
  return (
    <>
      <StyledNews>
        <h1>Nos Actualités</h1>
        <NewsArticle />
      </StyledNews>
    </>
  );
}
