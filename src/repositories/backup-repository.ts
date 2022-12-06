import Backup from '../entity/backup.entity'
import database from './database'

const backupsRepository = {
    criar: (backup: Backup, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO backups (cliente, data, status, motivo) VALUES (?, ?, ?, ?)'
        const params = [backup.cliente, backup.data, backup.status, backup.motivo]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },

    lerTodos: (callback: (backup: Backup[]) => void) => {
        const sql = 'SELECT * FROM backups'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback(rows))
    },

    ler: (cliente: number, callback: (backup?: Backup[]) => void) => {
        const sql = 'SELECT * FROM backups WHERE cliente = ?'
        const params = [cliente]
        database.all(sql, params, (_err, rows) => callback(rows))
    },

    apagar: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM backups WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}

export default backupsRepository