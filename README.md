# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), the project is going to run together frontend and backend through the same command

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the frontend app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Runs the backend.\
Open [http://localhost:5000](http://localhost:5000) to charge the server.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Frontend

To build the frontend to this application was used a component library called Material UI, the components is not ready yet and as we are currently in the development moment probably we are going to use others libraries and frameworks, currently we are working in creating login and in the sequence we are going to connect frontend and backend.

## Backend

The backend project to virtual library connect the MongoDB database to virtual library aplication, the backend pattern is MVC and the aplication can get the data books from there, the project is currently in development and the idea is to create a way to manager all books that I've had contact.

To access data coming from MongoDB is necessary connect to a database, we are using express server with mongoose to comunicate. It was connecet through the URL from Mongo Atlas, so if you want to connect with your source of data you must use the .env archive to indicate your MongoDB database.
