# crud-mongodb-nodejs

Este pacote é um exemplo simples de CRUD (Create, read, update and delete) com nodejs + mongodb.

- [crud-mongodb-nodejs](#crud-mongodb-nodejs)
  - [Instalação](#instalação)
  - [Configuração do MongoDB](#configuração-do-mongodb)
  - [Configuração das variáveis de ambiente para conexão ao MongoDB](#configuração-das-variáveis-de-ambiente-para-conexão-ao-mongodb)
  - [Utilização](#utilização)

## Instalação
```bash
$ npm install
```

## Configuração do MongoDB
- Instalando localmente:
```bash
sudo apt-get install mongodb
sudo systemctl status mongodb
Para acessar o mongo shell - sudo mongo
```
- Comandos mongo shell:
https://docs.mongodb.com/manual/reference/mongo-shell/
- Para desinstalar:
```bash
sudo systemctl stop mongodb
sudo apt purge mongodb
sudo apt autoremove
```

## Configuração das variáveis de ambiente para conexão ao MongoDB
Editar o arquivo .env:
```bash
MONGO_URI='mongodb://127.0.0.1/testdb'
```

## Utilização

Comandos disponíveis:

```bash
$ node create.js # para inserir dados
$ node read.js # para ler dados
$ node update.js # para fazer update dos dados
$ node delete.js # para deletar os dados
```
