import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>프론트엔드 개발자 데이터 스페이스</h1>
      <div>
        <table>
          <tr>
            <th>지원(서류전형)</th>
            <th>TA 스크린콜</th>
            <th>1차 인터뷰(실무)</th>
            <th>코딩테스트</th>
            <th>2차 인터뷰(임원)</th>
            <th>처우 협의</th>
            <th>입사 확정</th>
          </tr>          
        </table>
      </div>
    </>
  )
}

export default App
