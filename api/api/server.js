const express = require('express')

const app = express()
app.use(express.json())
const port = 3001

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(user)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
