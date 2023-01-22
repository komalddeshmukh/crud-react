import { Counter } from './Counter';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

export function Book({ books, id}) {
  // const books=
  //   {
  //   name:"Mahabharat",
  //   poster:"https://i1.wp.com/ringmar.net/irhistorynew/wp-content/uploads/2018/10/mahabharata.png",
  //   rating:8,
  //   summary:"The Mahābhārata is one of the two major Sanskrit epics of ancient India, the other being the Rāmāyaṇa. It narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pāṇḍava princes and their successors."
  // }
  const [show, setShow] = useState(true);
  // conditional styling
  const styles = {
    color: books.rating > 8 ? "green" : "red",
  };

  // true- visible-block
  // false- hide-none
  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const navigate=useNavigate();
  return (
    <div className="book-container">
      <img className="book-poster" src={books.poster} alt={books.name} />
      <div className="book-spec">
        <h1 className="book-name">{books.name}-{id}</h1>
        <h2 style={styles} className="book-rating">⭐{books.rating}</h2>
      </div>
      <button
      onClick={()=>navigate("/books/"+id)}>Info</button>
      <button
        onClick={() => setShow(!show)}
      >Toggele description</button>
      <p style={summaryStyle} className="book-summary">{books.summary}</p>
      <Counter />

    </div>
  );
}
