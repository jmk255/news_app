import styled from "styled-components"
import NewsItem from "./NewsItem"

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width:100%;
    padding: 0 1rem;
  }
`;
//뉴스 목록에 보여지는 각각의 뉴스 항목의 데이터를 담고 있는 객체
const sampleArticle = {
  title: "제목",
  description: "내용",
  link: "https://www.google.com",
  image_url: "https://picsum.photos/160/160"
} 

function NewsList () {
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  )
}

export default NewsList;