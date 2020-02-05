const express = require('express')

const mc = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

let PORT = 3001

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

app.listen(PORT, () => console.log(`listening on ${PORT}`))