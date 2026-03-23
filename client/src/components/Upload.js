import { useState } from 'react'
import axios from 'axios'

export default function Upload() {
  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState('')

  const handleUpload = async () => {
    const token = localStorage.getItem('token')
    const formData = new FormData()
    formData.append('file', file)
    formData.append('caption', caption)

    await axios.post('http://localhost:5000/api/posts', formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    alert('Uploaded!')
  }

  return (
    <div className="upload">
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <input placeholder="Caption" onChange={e => setCaption(e.target.value)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
