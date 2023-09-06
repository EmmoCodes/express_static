import express from 'express'

const PORT = 9999
const app = express()

app.use((req, res, next) => {
  console.log('Ein neuer Request', req.method, req.url)
  next()
})

app.get('/', (req, res) => {
  res.send('Hallo Welt')
})

app.get('/car', (req, res) => {
  res.send('Ich habe gar kein Auto')
})

app.post('/car', (req, res) => {
  res.json({ marke: 'Audi', km: 250 })
})

app.listen(PORT, () => console.log('Der Server lauscht auf Port:', PORT))
