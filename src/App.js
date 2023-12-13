import { useState } from 'react';
import './App.css';

function App(){
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  const titlefun = () => {
    let copy = [...글제목];
    copy[0] = "여자 코트 추천"
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={() => {
        titlefun();
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
              <h4>{ obj } <span onClick={() => {
                let cpoy = [...따봉];
                cpoy[i] = cpoy[i] + 1;
                따봉변경(cpoy)
              }}>👍</span> { 따봉[i] } </h4>
              <p onClick={() => {
                  modal ? setModal(false):setModal(true);
                  setTitle(i);
                }}>2월 17일 발행</p>
            </div>
          );
        })
      }
      { 
        modal ? <Modal title={title} titlefun={titlefun} 글제목={글제목}></Modal> : null
      }
      
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">   
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.titlefun}>글수정</button>
    </div>
  )
}

export default App;
