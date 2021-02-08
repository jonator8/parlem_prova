## Installation

This project requires [Node.js](https://nodejs.org/en/) & [Docker](https://www.docker.com/) installed.

First of all, make sure you are in the `root folder` of the project.

For the correct execution of the project, make sure to follow in order:

### 1. Copy the .env file on root 
On the email, you have an .env file.

### 2. Install npm packages 
```bash
$ npm install
```

### 3. Start DB with Dockerfile
```bash
$ docker-compose up -d
```
If don't use the `-d` flag, you will need a new terminal to follow next steps.

### 4. Run the seed script 
```bash
$ npm run seed
```
The seed will compile the project and seed the database with data.

### 5. Start the server 
```bash
$ npm run start
```

The server will run on port `3000`, if you have the port busy, you can change it on .env file. 
```dotenv
PORT=3000
```

### 6. Server is running
The url is `http://localhost:3000/api/v1/...` 

| Type | Url | Description |
| :--- | :--- | :--- |
| GET | /customers | Get all customers |
| POST | /customers | Create new customer |
| GET | /customers/:id | Get customer |
| DELETE | /customers/:id | Delete customer |
| PUT | /customers/:id | Update customer |
| GET | /customers/:id/products | Get customer products |
| GET | /products | Get all products |
| POST | /products | Create a new product |
| GET | /products/:id | Get a product |
| DELETE | /products/:id | Delete a product |
| PUT | /products/:id | Update product |
| GET | /customerproducts | Get all customerProducts |
| POST | /customerproducts | Create a new customerProduct |
| GET | /customerproducts/:id | Get a customerProduct |
| DELETE | /customerproducts/:id | Delete a customerProduct |
| PUT | /customerproducts/:id | Update customerProduct |
