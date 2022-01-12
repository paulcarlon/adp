import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  const [categories, setCategories] = useState([])
  const fetchData = async () => {
    const res = await fetch('https://aubrey.digital/phpAPI/api/categories/')
    const data = await res.json();
    return data;
  }


  useEffect(() => {
    const getCategories = async () => {
      const apiCategories = await fetchData();
      setCategories(apiCategories.data);
  console.log(categories);

    }

    getCategories()
  }, []);
  
  return (
    <div>
   <div className="card mt-3 p-1 text-white" style={{  backgroundColor: 'rgba(50, 0, 50, 0.8)' }}>
<h2>Categories</h2>
</div>
<div className="card mt-2 py-4 text-white" style={{  backgroundColor: 'rgba(50, 0, 50, 0.8)' }}>
  {categories.map(cat => (
<Link to={`/blog/category/${cat.id}`}><h3>{cat.name}</h3></Link>
))}
</div>
</div>
  )
}

export default Category

