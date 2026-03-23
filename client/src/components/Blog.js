import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className="grid">
      {posts.map(p => (
        <div key={p._id} className="post">
          <img src={`http://localhost:5000${p.url}`} alt="" />
          <p>{p.caption}</p>
        </div>
      ))}
    </div>
  )
}
