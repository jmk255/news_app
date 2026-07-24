//css코드를 재사용하기 위한 헬퍼 함수(css코드를 변수 처럼 활용 -> 중복되는 코드를 최소화)
import styled, { css } from "styled-components"

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

  ${(props) => 
    props.$active && css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color:#22b8cf;

      &:hover{
        color: #3bc9db;
      }
    `
  }
  
  & + & {
    margin-left: 1rem;
  }
`;

function Categories ({onSelect, category}) {
  return (
    <CategoriesBlock>
      {/*categories 배열을 순회하며 카테고리 버튼 생성 */}
      {categories.map((c) => (
        <Category 
          key={c.name}
          //현재 선택된 카테고리라면 true를 전달, styled-components에서 활성화 스타일을 적용하기 위해 사용
          $active={category === c.name}
          //카테고리를 클릭하면 해당 카테고리 이름을 부모컴포넌트로 전달
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  )
}

export default Categories;