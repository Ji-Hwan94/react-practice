import { useState } from 'react';
import './App.css';

function App(){
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = "여자 코트 추천"
        글제목변경(copy);
      }}>글 수정</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy = copy.sort();
        글제목변경(copy);
      }}>글 정렬</button>

      {
        글제목.map((obj, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => modal ? setModal(false):setModal(true)}>{ obj } <span onClick={() => {따봉변경(따봉 + 1)}}>👍</span> {따봉} </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }
      { 
        modal ? <Modal></Modal> : null
      }
      
    </div>
  )
}

function Modal(){
  return (
    <>
    <div className="modal">   
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
