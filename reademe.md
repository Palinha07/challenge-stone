This api has born from the challenge of this selective process (Stone)

Used dependencies: 
express 
mongoose
jsonwebtoken
bcrypt
nodemon

This api have post routes

POST create-account - http://localhost:3000/accounts/create-account
Body: {"name": "string",
"email": "email",
"password": "string"}

POST signin (access token) - http://localhost:3000/signin/
Body: {"clientName": "string",
    "password": "string"}

POST transfers - http://localhost:3000/accounts/transfers/:id
Body: {"recipientsName": "string",
    "amount": number}

POST withdraw - http://localhost:3000/accounts/withdraw/:id
Body: {"amount": 10}

The database used is the mongocompass 

Access on localhost

Api created by Manoela Paloma