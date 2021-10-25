import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import Comment from './Comment';
import CommentForm from './CommentForm';


const Post = ({ post, getPosts, isAdmin, setIsLoggedIn, isLoggedIn, loggedUser }) => {
  const [titleEdit, setTitleEdit] = useState(post.title)
  const [bodyEdit, setBodyEdit] = useState(post.body)
  const [show, setShow] = useState(false);
  let [likes, setLikes] = useState(0);
  // let [comments, setComments] = useState([
  //   { id: 1, author: 'Devonte',
  //   date: 'Sun Aug 22, 6:15am',
  //   body: "You've really got something special!"},
  //   { id: 2, author: 'Alexandria',
  //   date: 'Sun Aug 22, 6:18am',
  //   body: 'Girl yo tunes be poppin'}
  // ])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete = async () => {
    try {
      await fetch('https://aubrey.digital/phpAPI/api/posts/delete.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/data'
      },
      body: JSON.stringify({'id': post.id}),
      });
    } catch (err) {
      console.log(err);
    }
    getPosts()
  }


  const onSubmit = async (e) => {
    console.log(e);
    try {
      await fetch('https://aubrey.digital/phpAPI/api/posts/update.php', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/data'
      },
      body: JSON.stringify({
        'id': post.id,
        'title': titleEdit,
        'body': bodyEdit,
        'category_id': 1
      }),
      });
    } catch (err) {
      console.log(err);
    }
    getPosts()
    setShow(false);
  }


  // const likeClick = () => {
  //   setLikes(likes + 1)
  // }
  return (
    <div className="mb-1">
    <div className="card text-white text-center" style={{  backgroundColor: 'rgba(50, 0, 50, 0.8)' }}>
    <div className="card-body">
      <h1 style={{ fontFamily: 'serif', color: 'rgba(250, 0 , 250, .5)', textShadow: '0px 0px 2px #fff, 2px 4px 5px #333'}} className="card-title mt-3">{post.title}</h1>
      <small className="text-white" style={{ textShadow: '0px 0px 4px rgba(250, 0, 250, 1)' }}>{post.date}</small><br />

      <pre style={{  fontFamily: 'sans-serif', fontSize: '1.5em', whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflowX: 'hidden' }} className="text-white card-text m-4 px-5 justify-content">{post.body}</pre>
    </div>
    
      {isLoggedIn && isAdmin && <div className="card-footer"><button type="submit" onClick={handleShow} className="btn btn-sm btn-outline-warning">Edit</button>
      <button type="submit" onClick={onDelete} className="btn btn-sm btn-outline-primary">Delete</button></div>
      }
{/* <Comment id={post.id} /> */}
{/* <CommentForm pid={post.id} loggedUser={loggedUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
      {/* {comments.map((comment) => (
      <Card.Body style={{ backgroundColor: 'rgba(50, 0, 50, 0.8)', borderRadius: '10px', marginBottom: '1em' }}><span style={{ color: 'rgba(250, 0, 250, .5)', backgroundColor: 'rgba(75, 0, 75, .9)', padding: '0.4em', borderRadius: '10px', fontSize: '1.5em' }}>{comment.author} <br /> <span className="text-light" style={{ fontWeight: 500 }}>{comment.date}</span></span><br /><br />{comment.body}</Card.Body>
      ))
    } */}
  </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        edit your post
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
              <Form.Label>Title: </Form.Label>
              <Form.Control type="text" onChange={(e) => setTitleEdit(e.target.value)} defaultValue={post.title}/>           
          </Form.Group>
          <Form.Group>
              <Form.Label>Body: </Form.Label>
              <textarea type="text" style={{ width: '300px', height: '300px' }} onChange={(e) => setBodyEdit(e.target.value)} defaultValue={post.body}/>           
          </Form.Group>

          </Modal.Body>
          <Modal.Footer>
          <Form.Group controlId='submit'>
          <input
            type='submit'
            onClick={onSubmit}
            className='btn btn-success p-3'
            style={{ fontSize: '1.5em', fontWeight: 'bold' }}
            value='Submit'
          ></input>
        </Form.Group>
          </Modal.Footer>
      </Modal>
</div>
  )
}

export default Post
