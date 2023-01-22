import { Book } from './Book';
import { INITIAL_BOOK_LIST } from './App';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function BookList() {

  // const bookList = INITIAL_BOOK_LIST;

  const[bookList, setBooklist]=useState(INITIAL_BOOK_LIST)

  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState("")
  const [summary, setSummary] = useState("")

  return (
    <div>
      <div className='add-book-form'>
       
          <TextField  
          onChange={(event) => setName(event.target.value)}
          label="name" variant="standard" />
             <TextField  
          onChange={(event) => setPoster(event.target.value)}
          label="poster" variant="standard" />
            <TextField  
          onChange={(event) => setRating(event.target.value)}
          label="rating" variant="standard" />
          <TextField  
          onChange={(event) => setSummary(event.target.value)}
          label="summary" variant="standard" />
  
          {/* copy the book list and add */}

          <Button onClick={()=>{
            const newBook={
              name:name,
              poster:poster,
              rating:rating,
              summary:summary,
            }
            setBooklist([...bookList,newBook])
          }}variant="contained">Add Book</Button>
    </div>
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book key={index} books={bk} id={index} />
      ))}
    </div>
    </div>
  )
}
