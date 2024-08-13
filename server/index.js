const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose(); // Incluindo verbose para melhor debug
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Inicializa o banco de dados SQLite
const db = new sqlite3.Database('./database.sqlite', (error) => {
    if (error) {
        console.log('Erro ao conectar ao banco de dados:', error);
        return;
    }
    console.log('Conectado ao banco de dados!');

    // Cria a tabela se não existir
    db.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, Nome TEXT, Username TEXT, Email TEXT, Senha TEXT)', (error) => {
        if (error) {
            console.log('Erro ao criar tabela:', error);
            return;
        }

        // Insere um usuário de exemplo (opcional, pode remover se não necessário)
        db.run('INSERT INTO usuarios (Nome, Username, Email, Senha) VALUES (?, ?, ?, ?)', ['Leonardo Minora', 'minora', 'l.m@ifrn', '123'], (error) => {
            if (error) {
                console.log('Erro ao inserir usuário:', error);
                return;
            }

            // Consulta para verificar a inserção (opcional, pode remover se não necessário)
            db.all('SELECT * FROM usuarios', (error, rows) => {
                if (error) {
                    console.log('Erro ao consultar usuários:', error);
                } else {
                    console.log('Usuários:', rows);
                }
            });
        });
    });
});

// Rota para cadastro de usuários
app.post('/Cadastro', (req, res) => {
    const { Email, Name, UserName, Senha } = req.body;

    console.log('Dados recebidos:', req.body); // Log dos dados recebidos

    const SQL = 'INSERT INTO usuarios (Nome, Username, Email, Senha) VALUES (?, ?, ?, ?)';
    const Values = [Name, UserName, Email, Senha];

    db.run(SQL, Values, function (err) {
        if (err) {
            console.error('Erro ao inserir usuário:', err.message); // Log do erro
            res.status(500).send(err.message); // Envia um erro 500 se a inserção falhar
        } else {
            console.log('Usuário inserido com sucesso');
            res.send({ message: 'Usuário adicionado!' });
        }
    });
});

// Rota para login de usuários
app.post('/Login', (req, res) => {
    const { LoginUserName, LoginSenha } = req.body;

    const SQL = 'SELECT * FROM usuarios WHERE Username = ? AND Senha = ?';
    const Values = [LoginUserName, LoginSenha];

    db.all(SQL, Values, (error, rows) => {
        if (error) {
            console.error('Erro ao consultar usuários:', error.message);
            res.status(500).send(error.message);
        } else if (rows.length > 0) {
            res.send(rows[0]);
        } else {
            res.send({ message: 'Erro nas credenciais' });
        }
    });
});

// Inicia o servidor
app.listen(3002, () => {
    console.log('Server rodando na porta 3002');
});
