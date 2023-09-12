# API Fundamentos

## Sobre o projeto

API desenvolvida no curso de fundamentos de NodeJS da Rocketseat. Para aprender os fundamentos de Nodejs

## Tecnologias utilizadas

- NodeJS
- JavaScript

## Rodando o projeto

Para rodar o projeto, basta executar o comando abaixo:

```
   npm install
   npm run dev
```
Requisições podem ser feitas através do endereço http://localhost:3333

Será criado um arquivo chamado db.json, que será o banco de dados da aplicação.

### Metodos HTTP

- GET: Buscar uma informação do back-end
- POST: Criar uma informação no back-end
- PUT: Alterar uma informação no back-end
- PATCH: Alterar uma informação especifica no back-end
- DELETE: Deletar uma informação no back-end

### Rotas

- POST /users:
```
{
    "name": "John Doe",
    "email": "johndoe@email.com"
}

```

- GET /users:
```
[
    {
        "id": "35a97cb8-54eb-4a21-9e68-0eb53e502eb8",
        "name": "John Doe",
        "email": "johndoe@email.com"
    },
    {
        "id": "1caa1087-4d10-4605-aa15-bdc2812d7f58",
        "name": "Serena",
        "email": "serena@email.com"
    }
]
```

- DELETE /users/:id

```
{
    status: 204
}

```

- PUT /users/:id

```
{
    "name": "John",
    "email": "johndoe@email.com"
}
    
```