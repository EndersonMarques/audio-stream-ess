![image](https://github.com/user-attachments/assets/a29e944e-71cf-492c-8492-ef6b3f3905b0)# Rodar projeto do backend
1. Criar arquivo vazio .env.dev na pasta de backend
2. Rodar a imagem do postgres com user postgres e senha docker, com porta 5432 e criar um banco de dados com o nome 'mydb'
3. Selecionar o banco 'mydb'
4. instalar o nodemon -> npm i -g nodemon
5. Criar um arquivo .env com o seguinte conteúdo
```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:docker@localhost:5432/mydb?schema=public"
```

# Gerar uma migration do prisma
```
npx prisma migrate dev --name nomeDaModificacao
```
para rodar as migrations do projeto basta usar
```
npx prisma migrate dev
```
# Fazendo o prisma gerar o client atualizado (depois de rodar as migrations a primeira vez)
```
npx prisma generate
```
# Telas do projeto

![image](https://github.com/user-attachments/assets/6387f4cb-d4f8-4943-a12b-307fa2b63e01)

![image](https://github.com/user-attachments/assets/4d5abb89-ff90-4fb5-84f2-6c7f82f8b76f)

![image](https://github.com/user-attachments/assets/e2bc1cdc-d439-459d-b382-df0920bf6183)


