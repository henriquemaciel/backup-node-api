# Simples API Node com typescript e SQLite

### É um pequeno projeto para monitoramento de backups, permite cadastrar e consultar status de backups realizados.

&nbsp;

### Instalar dependências:

&nbsp;

```bash
yarn
```
&nbsp;

#### Para rodar o projeto, execute:

&nbsp;

```bash
yarn dev
```

&nbsp;

### O Projeto é constituído apenas por uma tabela de backup, possui os seguintes campos:

&nbsp;

```
id: integer
cliente: integer
data: date
status: text
motivo: text
```

&nbsp;

## APIs

&nbsp;

### Inserir um novo registro

&nbsp;

```
POST 

http://localhost:5000/api/backups
```


```json
{
    "cliente": 1,
    "data": "2022-01-01",
    "status": "sucesso",
    "motivo": ""
}
```

&nbsp;

### Consultar todos os registros

&nbsp;

```
GET 

http://localhost:5000/api/backups
```

&nbsp;

### Consultar apenas 1 cliente

&nbsp;

```
GET 

http://localhost:5000/api/backups/:cliente
```

