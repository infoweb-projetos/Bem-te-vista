const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
    console.log('server ta rodando na porta 3002');
});

// MySQL
//
// const db = mysql.createConnection({
//     user: 'root',
//     password: '',
//     host: 'localhost',
//     database: 'bemtevista'
// });

// // Verificando a conexão com o banco de dados
// db.connect((err) => {
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err);
//         return;
//     }
//     console.log('Conectado ao banco de dados!');
// });

// SQlite
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.sqlite', (error) => {
    if (error) {
        console.log(error);
        return;
    }
    db.run('create table if not exists usuarios (id integer primary key, Nome text, Username text, Email text, Senha text)', (error) => {
        if (error) {
            console.log(error);
            return;
        }
        db.run('insert into usuarios (Nome, Username, Email, Senha) values (?, ?, ?, ?)', ['Leonardo Minora', 'minora', 'l.m@ifrn', '123'], (error) => {
            if (error) {
                console.log(error);
                return;
            }
            db.all('select * from usuarios', (error, rows) => {
                console.log(error, rows);
            });
        });
    });
});



app.post('/Cadastro', (req, res) => {
    const sentEmail = req.body.Email;
    const sentName = req.body.Name;
    const sentUserName = req.body.UserName;
    const sentSenha = req.body.Senha;

    console.log('Dados recebidos:', req.body); // Log dos dados recebidos

    const SQL = 'INSERT INTO usuarios (Nome, Username, Email, Senha) VALUES (?, ?, ?, ?)';
    const Values = [sentName, sentUserName, sentEmail, sentSenha];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            console.error('Erro ao inserir usuário:', err); // Log do erro
            res.status(500).send(err); // Envia um erro 500 se a inserção falhar
        } else {
            console.log('Usuário inserido com sucesso');
            res.send({ message: 'Usuário adicionado!' });
        }
    });
});

app.post('/Login', (req, res) => {
    const sentLoginUserName = req.body.LoginUserName;
    const sentLoginSenha = req.body.LoginSenha;

    const SQL = 'SELECT * FROM usuarios WHERE Username = ? AND Senha = ?'; // Correção aqui
    const Values = [sentLoginUserName, sentLoginSenha];

    // MySql
    // db.query(SQL, Values, (err, results) => {
    //     if (err) {
    //        res.send({error: err})
    //     }
    //     if (results.length > 0) { // Correção aqui
    //         res.send(results)
    //     } 
    //     else {
    //         res.send({ message: 'Erro nas credenciais' }) // Resposta apropriada
    //     }
    // });
    db.all(SQL, Values, (error, rows) => {
        console.log(error, rows);
        if (error) {
            res.send({ error: error })
        }
        if (rows.length > 0) { // Correção aqui
            res.send(rows[0])
        }
        else {
            res.send({ message: 'Erro nas credenciais' }) // Resposta apropriada
        }

    });
});