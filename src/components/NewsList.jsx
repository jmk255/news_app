import { useEffect, useState } from "react";
import axios from "axios";
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

function NewsList ({category}) {
  //useState를 사용하여 뉴스목록과 로딩 상태를 저장
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    //async function fetchData(){}
    const fetchData = async () => {
      setLoading(true); //로딩 상태를 true로 지정
      try{
        //현재 선택된 카테고리가 "all"이면 카테고리 조건 없이 전체 뉴스를 조회, 그렇지 않으면 URL에 category 쿼리 문자열을 추가
        const query = category === "all" ? "" : `&category=${category}`;
        //axios.get메서드를 호출하고 뉴스 데이터를 가져옴
        const response = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_c253602dc54e4509bc93a1cba7a9ddf2&country=kr&language=ko${query}`)
        //가져온 뉴스 목록을 setResults를 사용하여 컴포넌트의 상태에 저장
        setResults(response.data.results)

      }catch(e){ //실패시 에러 메시지 표시
        console.log(e);
      }
      setLoading(false);//데이터를 상태에 저장하면 로딩 상태를 false로 지정
    }
    fetchData(); //fetchData함수 호출
  },[category]) //category값이 변경될때마다 useEffect를 다시 실행하여 해당 카테고리의 뉴스를 다시 조회

  if(loading){ //로딩 상태가 true면 대기중이라는 문구를 출력해서 리턴
    return <NewsListBlock>대기 중...</NewsListBlock>
  }

  if(!results){ //전달된 데이터가 없다면 false면 null을 리턴(이를 통해 컴포넌트가 렌더링 되지 않는다)
    return null;
  }
  //map()메서드를 사용하여 뉴스 목록을 반복하고, NewsItem컴포넌트를 사용해 각 뉴스 항목을 렌더링 한다

  return (
    <NewsListBlock>
      {results.map((result) => (
        <NewsItem key={result.link} result={result}/>
      ))}
    </NewsListBlock>
  )
}

export default NewsList;