import Post from '../components/Post'
import BlogSidebar from '../components/BlogSidebar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { useEffect } from 'react'
import BlogHeader from '../components/BlogHeader'
const Blog = ({ getPosts, posts, isAdmin, isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser, }) => {
// getPosts();
console.log(posts);
  return (
<Container fluid>
<BlogHeader title="digital thoughts" />
<Row>
  <Col sm={12} lg={9}>

{posts && posts.map((post, i) => (
  <Card className="mb-1 bg-transparent">
<Post key={post.id} getPosts={getPosts} post={post}  setIsLoggedIn={setIsLoggedIn} loggedUser={loggedUser} setLoggedUser={setLoggedUser} isAdmin={isAdmin} isLoggedIn={isLoggedIn} i={i}/>
</Card>

))}
</Col>
<Col lg={3}>
  <Card className="bg-transparent">
    <BlogSidebar posts={posts}/></Card>
</Col>
</Row>


    </Container>
  )
}

export default Blog
