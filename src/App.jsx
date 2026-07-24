import { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

function App() {
  //category상태의 초기값을 all로 설정
  const [category, setCategory] = useState("all");
  //카테고리 메뉴를 클릭하면 setCategory메서드를 호출하여 category상태를 변경
  const onSelect = useCallback(category => setCategory(category), [])

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  )
}

export default App
