import { Link } from 'react-router-dom'
import Category from './Category'

const BlogSidebar = ({ posts }) => {
  return (
    <div>
  <div className="card p-1 text-white" style={{  backgroundColor: 'rgba(50, 0, 50, 0.8)' }}>
<h2>Latest Posts</h2>
</div>
<div className="card mt-2 py-4 text-white" style={{  backgroundColor: 'rgba(50, 0, 50, 0.8)' }}>
{posts.slice(0,3).map(post => {
  return <Link key={post.id} to={`/blog/${post.id}`}><h3>{post.title}</h3><h5>{`
    ${post.date.slice(5,7)}-${post.date.slice(8, 10)}-${post.date.slice(0,4)}`}</h5></Link>
})}
</div>
<Category />
</div>
  )
}

export default BlogSidebar
