import cors from 'cors'
import express from 'express'
import backupsRouter from './controllers/backup.controller'

// Porta do servidor
const PORT = process.env.PORT || 5000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('ON')
})

// Cors
app.use(cors({
    origin: ['*']
}))

// Rotas
app.use('/api', backupsRouter)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})
