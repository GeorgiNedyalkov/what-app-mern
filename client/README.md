# Whats App Clone MERN stack

- Build the frontend

- Clean up
- Create the skeleton and the basic styling of the project
- Create the components: sidebar and chat
- Install material ui and icons

- Build the backend

- create package json with npm init
- install dependencies: express, mongoose
- add .gitignore file
- setup a database with mongodb

- Create APIs

- Import dependencies
  - Add "type": "module" in package.json to get es6 import syntax
- Configure app
  - Set up import express, create an app instance, specify a port, add a home route, add a listener
  - Install nodemon,and dotenv
  - Add Listener
  - Connect to MongoDB
  - Define our Data Schema
- Middlewares
  - Add express json middleware
  - Add Header: Do not do this in production environment
  - Install Cors
- Api routes

  - POST - create new message
  - GET - retrieve all messages

- Pusher: Connect to Pusher to make MongoDB real time. Similar to Socket IO.
  - Copy the configuration file
  - Install Pusha
  - Require it in
  - Add change streams to trigger pusher
- Connect to Frontend

  - Install Pusher.js
  - Install Axios
  - Set up an instance of axios

- Deploy to Herouku

TODO:

- Secure your database: level 1 security
- Add end to end encryption
- Add authentication: Watch the other whats app build
- Add keys
- Add rooms support
