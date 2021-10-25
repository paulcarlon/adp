import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const CommentForm = ({ setIsLoggedIn, isLoggedIn, loggedUser, pid }) => {
  // const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

    const fetchData = async () => {
    const res = await fetch('https://aubrey.digital/phpAPI/api/comments/')
    const data = await res.json();
    return data;
  }

  
  const onSubmit = async (e) => {
      e.preventDefault();
      console.log(comment)
      let newComment = { pid, user: loggedUser, comment };       
      console.log(newComment);
        try {
          await fetch('https://aubrey.digital/phpAPI/api/comments/create.php', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
    'Content-Type': 'application/json'
          },
          body: JSON.stringify(newComment)
          });
        } catch (err) {
          console.log("Comment not added!");
        }
        fetchData()
        window.location.href = '/blog';
        // setIsLoggedIn(true)
      }

  
  return (
    <>

    <div className="container text-center">
    {isLoggedIn ? 
      <Form onSubmit={onSubmit} >
        <Form.Group controlId='userBody'>
        
          {/* <Form.Label
          >
            User:
          </Form.Label> */}
          {/* <input
            className='rounded'
            name='user'
            type='hidden'
            placeholder='user'
            value={user}
            onChange={(e) => setUser(loggedUser)}
          ></input>
          <br /> */}
          <Form.Label
            
          >
            Add a comment below:
          </Form.Label>

          <textarea
          className="mx-auto"
            style={{ display: 'flex', height: '13em', borderRadius: '10px', width: '40vw', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
            type='text'
            name='comment'
            placeholder='Your comment goes here!'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <br />         
          <div className="form-group">
        
    </div>
        </Form.Group>
        <Form.Group controlId='submit'>
          <input
            type='submit'
            name='submit'
            className='btn btn-success p-3'
            style={{ fontSize: '1.5em', fontWeight: 'bold' }}
            value='Submit'
          ></input>
        </Form.Group>
      </Form> : <Link to="/login">Login</Link> }
    </div>
    </>
  );
};


export default CommentForm;
