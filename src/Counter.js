import { useState } from 'react';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  // let like = 10;
  return (
    <div className="App-btn">
    
      <button className="btn-like"
        onClick={() => {
          setLike(like + 1);
          // like++;
          // console.log(like);
        }}
      >
        👍
      </button>
      <p>{like}</p>
      <button
        className="btn-dislike"
        onClick={() => {
          setDislike(dislike + 1);
          // like++;
          // console.log(like);
        }}
      >
        👎
      </button>
      <p>{dislike}</p>
    </div>
  );
}
