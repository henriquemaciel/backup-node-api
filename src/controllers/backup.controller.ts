import express from 'express'
import Backup from '../entity/backup.entity'
import backupRepository from '../repositories/backup-repository'

const backupsRouter = express.Router()

backupsRouter.post('/backups', (req, res) => {
    const backup: Backup = req.body
    backupRepository.criar(backup, (id) => {
        if (id) {
            res.status(201).location(`/backups/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
})

backupsRouter.get('/backups', (req, res) => {
    backupRepository.lerTodos((backups) => res.json(backups))
})

backupsRouter.get('/backups/:cliente', (req, res) => {
    const cliente: number = +req.params.cliente
    backupRepository.ler(cliente, (backup) => {
        if (backup) {
            res.json(backup)
        } else {
            res.status(404).send()
        }
    })
})

backupsRouter.delete('/backups/:id', (req, res) => {
    const id: number = +req.params.id
    backupRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})

export default backupsRouter