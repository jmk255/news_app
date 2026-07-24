import styled from "styled-components"

const categories = [
  {name : "all", text : "전체보기"},
  {name : "breaking", text : "뉴스속보"},
  {name : "business", text : "비즈니스"},
  {name : "crime", text : "범죄뉴스"},
  {name : "domestic", text : "국내뉴스"},
  {name : "education", text : "교육"},
  {name : "entertainment", text : "연예"}
]

//CategoriesBlock스타일 컴포넌트의 스타일
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

//Category스타일 컴포넌트의 스타일
const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

function Categories () {
  return (
    <CategoriesBlock>
      {/*categories 배열을 순회하며 카테고리 버튼 생성 */}
      {categories.map((c) => (
        <Category key={c.name}>{c.text}</Category>
      ))}
    </CategoriesBlock>
  )
}

export default Categories;