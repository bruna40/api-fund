# API Fundamentos

## Sobre o projeto

API desenvolvida para o curso de fundamentos de NodeJS da Rocketseat.

## Tecnologias utilizadas

- NodeJS
- JavaScript

## Rodando o projeto

Para rodar o projeto, basta executar o comando abaixo:

```
   npm install
   npm run dev
```

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
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@email.com"
}

```

- GET /users:
```
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@email.com
    },
    {
        "id": 2,
        "name": "Serena",
        "email": "serena@email.com"
    }
]
```
