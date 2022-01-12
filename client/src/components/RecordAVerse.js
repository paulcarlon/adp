import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
const RecordAVerse = () => {
  return (
<Container fluid>
    <Card style={{ background: 'transparent', height: '400px', marginTop: '30px' }}>
      <Card.Header className="text-center text-seconary h5 mx-5" style={{ color: '#fff' }}>
       Turn down your speakers young grasshopper.<br/><br />It might get loud.
      </Card.Header>
      <Card.Body>
        <Link to='/record'>
        {/* <img alt='collab' src={collab} style={{ width: '350px' }} /> */}
        </Link>
      </Card.Body>
    </Card>
</Container>
    
  )
}

export default RecordAVerse
