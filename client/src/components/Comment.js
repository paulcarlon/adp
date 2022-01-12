import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/esm/Table';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card'


const Comment = ({ getPosts, isLoggedIn, isAdmin, id }) => {
  const [comments, setComments] = useState([])
  const {commentId, setCommentId} = useState()
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
  }, []);
  
  const onDelete = async () => {
    try {
      await fetch('https://aubrey.digital/phpAPI/api/posts/delete.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/data'
      },
      body: JSON.stringify({'id': id}),
      });
    } catch (err) {
      console.log(err);
    }
    getPosts()
  }
return (
<Container>
{comments && comments.map(comment => id === comment.pid && <Card.Body style={{ backgroundColor: 'rgba(50, 0, 50, 0.8)', borderRadius: '10px', marginBottom: '1em' }}><span style={{ color: 'rgba(250, 0, 250, .5)', backgroundColor: 'rgba(75, 0, 75, .9)', padding: '0.2em', borderRadius: '10px', fontSize: '1.2em' }}>{comment.user} <br /> <span className="text-light" style={{ fontWeight: 500 }}>{`
    ${comment.created_at.slice(5,7)}-${comment.created_at.slice(8, 10)}-${comment.created_at.slice(0,4)} ${comment.created_at.slice(11,)}`}</span></span><br /><br />{comment.comment}</Card.Body> 
    
    )}

      {isLoggedIn && isAdmin && <div className="card-footer"><button type="submit" onClick={handleShow} className="btn btn-sm btn-outline-warning">Edit</button>
      <button type="submit" onClick={onDelete} className="btn btn-sm btn-outline-primary">Delete</button></div>
      }
      

</Container>
  )
}

export default Comment
