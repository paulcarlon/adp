import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/esm/Table';
import Col from 'react-bootstrap/esm/Col';

const Comment = ({ id }) => {
  const [comments, setComments] = useState([])
  
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

return (
<Container>
    {comments.map(comment =>
    id === comment.pid &&
  <Table key={comment.id} className="mx-auto" style={{ borderRadius: '10px', backgroundColor: 'rgba(150, 150, 150, .5)', textAlign: 'center', width: "60vw" }}><Row>
      <Col>
      <h4 style={{ color: '#FFF' }}>{comment.user}</h4>
      </Col>
      </Row>
      <Row>
      <Col>
      <p style={{ color: '#ccc' }}>{new Date(comment.created_at).toDateString()}</p>
      </Col>
      </Row>
      <Row>
      <Col>
      <p style={{ color: '#FFF' }}>{comment.comment}</p>
      </Col>
      </Row>
      </Table>
    )}

</Container>
  )
}

export default Comment
