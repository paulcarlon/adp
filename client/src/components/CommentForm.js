import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

const CommentForm = ({ setIsLoggedIn, isLoggedIn, loggedUser, pid }) => {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  let history = useHistory();

    const fetchData = async () => {
    const res = await fetch('https://aubrey.digital/phpAPI/api/comments/')
    const data = await res.json();
    return data;
  }

  
  const onSubmit = async (e) => {
      e.preventDefault();
      console.log(comment)
      let newComment = { pid, user, comment };       
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
        console.log(pid);
        history.push(`/blog`);
        // setIsLoggedIn(true)
      }

  
  return (
    <>

    <div className="container text-center">
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
          <input type="text" name="user" style={{ borderRadius: '10px', textAlign: 'center' }} placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)}></input>
          <textarea
          className="mx-auto"
            style={{ display: 'flex', height: '5em', borderRadius: '10px', width: '20vw', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
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
      </Form>
    </div>
    </>
  );
};


export default CommentForm;
