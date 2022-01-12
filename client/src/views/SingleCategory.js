
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from '../components/Post.js'
import BlogSidebar from '../components/BlogSidebar.js'
import BlogHeader from '../components/BlogHeader.js'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

const SingleCategory = ({ getPosts, posts, isAdmin, isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser, }) => {
  let { id } = useParams();
  

  let postTitle
  let postDate
  let postBody

  return (
<Container fluid>
  <BlogHeader title={id} />

<Row>
  <Col lg={9}>
{posts && posts.map((post, i) => {

    postTitle = post.title
    postBody = post.body;
    postDate = post.date;
    let postMonth = postDate.slice(5,7)
    let postDay = postDate.slice(8, 10)
    let postYear = postDate.slice(0,4)
    let postTime = postDate.slice(11,)
    postDate = `${postMonth}-${postDay}-${postYear} ${postTime}`
  
return post.category_id === id && 
<Card className="bg-transparent mb-1">
<Post key={post.id} getPosts={getPosts} post={post}  setIsLoggedIn={setIsLoggedIn} loggedUser={loggedUser} setLoggedUser={setLoggedUser} isAdmin={isAdmin} isLoggedIn={isLoggedIn} i={i}/>
</Card>
})}

</Col>
<Col lg={3}>
  <Card className="bg-transparent">
    <BlogSidebar posts={posts}/></Card>
</Col>
</Row>

    </Container>
  )
}

export default SingleCategory
