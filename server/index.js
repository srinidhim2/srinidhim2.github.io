const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const path = require('path')
require('dotenv').config()

const User = require('./models/User')
const Post = require('./models/Post')

mongoose.connect(process.env.MONGO_URI)

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'No token' })
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' })
    req.userId = decoded.id
    next()
  })
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})
const upload = multer({ storage })

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body
  const hash = await bcrypt.hash(password, 10)
  const user = await User.create({ username, password: hash })
  res.json({ message: 'User created' })
})

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: 'Invalid credentials' })
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.json({ token })
})

app.post('/api/posts', auth, upload.single('file'), async (req, res) => {
  const post = await Post.create({
    url: `/uploads/${req.file.filename}`,
    caption: req.body.caption,
    user: req.userId
  })
  res.json(post)
})

app.get('/api/posts', async (req, res) => {
  const posts = await Post.find().sort({ created: -1 })
  res.json(posts)
})

app.listen(5000, () => console.log('Server started on port 5000'))
