import Post from '../components/Post'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
const Blog = ({ getPosts, posts, isAdmin, isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser, }) => {
  return (
<Container fluid>
<Row><Col xs={12}>
  <h2 className="my-5" style={{ fontFamily: 'Satisfy, cursive', color: 'rgba(180, 0, 180, .9', border: 'rgba(180, 0, 180, .9', fontSize: '3em', textShadow: '1px 1px 5px #fff'}}>digital thoughts</h2>
  </Col></Row>
<Row>
  <Col>
<Card>
{posts && posts.reverse().map((post, i) => (
<Post key={post.id} getPosts={getPosts} post={post}  setIsLoggedIn={setIsLoggedIn} loggedUser={loggedUser} setLoggedUser={setLoggedUser} isAdmin={isAdmin} isLoggedIn={isLoggedIn} i={i}/>
))}
</Card>
</Col>
</Row>


    </Container>
  )
}

export default Blog
