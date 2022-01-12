
import CommentForm from '../components/CommentForm'
import BlogSidebar from '../components/BlogSidebar'
import BlogHeader from '../components/BlogHeader'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

const SinglePost = ({ getPosts, posts, isAdmin, isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser, }) => {
  const [comments, setComments] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const fetchData = async () => {
    const res = await fetch('https://aubrey.digital/phpAPI/api/comments/')
    const data = await res.json();
    return data;
  }


  useEffect(() => {
    const getComments = async () => {
      const apiComments = await fetchData();
      setComments(apiComments.data);
    }

    getComments()
    getPosts()
  }, []);
  let { id } = useParams();
  const onDelete = async (commentId) => {
    try {
      await fetch('https://aubrey.digital/phpAPI/api/comments/delete.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/data'
      },
      body: JSON.stringify({'id': commentId}),
      });
    } catch (err) {
      console.log(err);
    }
    getPosts()
  }
  let postTitle
  let postDate
  let postBody
  let postImage
  let commentUser
  let commentBody
  let commentDate
  return (
<Container fluid>
<BlogHeader />
<Row>
  <Col sm={12} lg={9}>
  {posts && posts.forEach(post => {

    if (post.id === id) {
      postTitle = post.title
      postBody = post.body;
      postDate = post.date;
      postImage = post.image;
      let postMonth = postDate.slice(5,7)
      let postDay = postDate.slice(8, 10)
      let postYear = postDate.slice(0,4)
      let postTime = postDate.slice(11,)
      postDate = `${postMonth}-${postDay}-${postYear} ${postTime}`
    }
  })}
<Card className="text-white text-center" style={{ background: 'rgba(50, 0, 50, 0.8)' }}>
    <Card.Body>
    <img className="rounded" style={{ boxShadow: '0px 0px 10px #fff', maxWidth: "500px" }} src={postImage} />
      <h1 style={{ fontFamily: 'serif', color: 'rgba(250, 0 , 250, .5)', textShadow: '0px 0px 2px #fff, 2px 4px 5px #333'}} className="card-title mt-3">{postTitle}</h1>
      <small className="text-white" style={{ textShadow: '0px 0px 4px rgba(250, 0, 250, 1)' }}>{postDate}</small><br />
    
      <pre style={{  fontFamily: 'sans-serif', fontSize: '1em', whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflowX: 'hidden' }} className="text-white card-text m-4 px-5 justify-content">{postBody}</pre><br />
    </Card.Body>
    
  
    <Card style={{ backgroundColor: 'rgba(50, 0, 50, 0.8)', borderRadius: '10px', marginBottom: '1em' }}>
    {comments && comments.map(comment => id === comment.pid ? <Card.Body style={{ backgroundColor: 'rgba(50, 0, 50, 0.8)', borderRadius: '10px', marginBottom: '1em' }}><span style={{ color: 'rgba(250, 0, 250, .5)', backgroundColor: 'rgba(75, 0, 75, .9)', padding: '0.2em', borderRadius: '10px', fontSize: '1.2em' }}>{comment.user} <br /> <span className="text-light" style={{ fontWeight: 500 }}>{`
    ${comment.created_at.slice(5,7)}-${comment.created_at.slice(8, 10)}-${comment.created_at.slice(0,4)} ${comment.created_at.slice(11,)}`}</span></span><br /><br />{comment.comment}</Card.Body> : id === comment.pid && isLoggedIn && isAdmin && <div className="card-footer"><button type="submit" onClick={handleShow} className="btn btn-sm btn-outline-warning">Edit</button>
      <button type="submit" onClick={console.log('not working yet')} className="btn btn-sm btn-outline-primary">Delete</button></div>
    )}</Card>
    <CommentForm pid={id} loggedUser={loggedUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    </Card>
    

</Col>
<Col lg={3}>
  <BlogSidebar posts={posts}/>
</Col>
</Row>


    </Container>
  )
}

export default SinglePost
