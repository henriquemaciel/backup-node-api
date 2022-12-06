import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_BACKUP_CREATE = `
    CREATE TABLE backups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cliente INTEGER,
        data DATE,
        status TEXT,
        motivo TEXT
    )`

    const database = new sqlite3.Database(DBSOURCE, (err) => {

    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_BACKUP_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabela backups criada com sucesso.')
            }
        })
    }
})

export default database