import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Post = ({ post, getPosts, isAdmin, setIsLoggedIn, isLoggedIn, loggedUser }) => {
  const [titleEdit, setTitleEdit] = useState(post.title)
  const [bodyEdit, setBodyEdit] = useState(post.body)
  const [show, setShow] = useState(false);
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
  let postDate
  let postMonth = post.date.slice(5,7)
      let postDay = post.date.slice(8, 10)
      let postYear = post.date.slice(0,4)
      let postTime = post.date.slice(11,)
      postDate = `${postMonth}-${postDay}-${postYear} ${postTime}`
  return (
    <div className="mb-1">
    <Card className="text-white py-2 ps-3" style={{ background: 'rgba(50, 0, 50, 0.8)' }}>
    <Link to={`/blog/${post.id}`}>
    <Row>
    <Card.Body>
      <Col className="my-5 pt-1 ps-1 h-100" style={{ position: 'absolute' }} sm={5} lg={3}>
      <img className="rounded" style={{ display: 'flex', overflow: 'hidden', maxWidth: "100%", maxHeight: '100%',  boxShadow: '0px 0px 10px #fff'}} src={post.image} />
      </Col>
      <Col sm={7} lg={9} className="w-100 pe-3">
        <div className="d-flex flex-column align-items-end">
      <Card.Title style={{ fontSize: '1.8em', fontFamily: 'serif', color: 'rgba(250, 0 , 250, .5)', textShadow: '0px 0px 2px #fff, 2px 4px 5px #333'}} className="mt-3">{post.title}</Card.Title>
      <small className="text-white" style={{ textShadow: '0px 0px 4px rgba(250, 0, 250, 1)' }}>{postDate}</small><br />
    
      <p style={{  fontFamily: 'sans-serif', fontSize: '1em', whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflowX: 'hidden' }} className="text-white card-text m-2 px-3 justify-content">{post.body.substring(0, 40) + '...'}</p><br /><button class="btn" style={{ color: '#fff', fontWeight: '500', background: '#871F78' }}>Read More</button></div>
    
      {isLoggedIn && isAdmin && <><button type="submit" onClick={handleShow} className="btn btn-sm btn-outline-warning">Edit</button>
      <button type="submit" onClick={onDelete} className="btn btn-sm btn-outline-primary">Delete</button></>
      }</Col></Card.Body></Row>
      </Link>
      </Card>
{/* <Comment id={post.id} /> */}
{/* <CommentForm pid={post.id} loggedUser={loggedUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
      {/* {comments.map((comment) => (
      <Card.Body style={{ backgroundColor: 'rgba(50, 0, 50, 0.8)', borderRadius: '10px', marginBottom: '1em' }}><span style={{ color: 'rgba(250, 0, 250, .5)', backgroundColor: 'rgba(75, 0, 75, .9)', padding: '0.4em', borderRadius: '10px', fontSize: '1.5em' }}>{comment.author} <br /> <span className="text-light" style={{ fontWeight: 500 }}>{comment.date}</span></span><br /><br />{comment.body}</Card.Body>
      ))
    } */}

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
