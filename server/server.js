const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL
}));

app.use(express.json())

const projects = require('./data/projects')

app.get('/', (req, res) => {
  res.json({status: 'ok'});
})

app.get('/api/projects', (req, res) => {
  res.json(projects)
})

app.get('/api/projects/:id', (req, res) => {
  const id = Number(req.params.id);

  const project = projects.find(project => project.id === id);

  if(!project) {
    return res.status(404).json({error: 'Project not found'})
  }
  res.json(project);
})

app.post('/api/contact', (req, res) => {

  const { name, email, message } = req.body

  if (!name) {
    return res.status(400).json({ error: 'Name is required' })
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: "Invalid email" })
  }

  const filePath = path.join(__dirname, 'data', 'contacts.json')

  const contacts = JSON.parse(
    fs.readFileSync(filePath, 'utf8')
  )

  const newContact = {
    id: Date.now(),
    name,
    email,
    message
  }

  contacts.push(newContact)

  fs.writeFileSync(
    filePath,
    JSON.stringify(contacts, null, 2)
  )

  res.status(201).json({
    message: "Contact form submitted successfully",
    contact: newContact
  })

})

app.get('/api/contact', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'contacts.json')

  const contacts = JSON.parse(
    fs.readFileSync(filePath, 'utf8')
  )

  res.status(200).json(contacts)
})

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: "Internal server error"
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:${process.env.PORT}`)
})