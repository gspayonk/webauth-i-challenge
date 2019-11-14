const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session"); // 1: npm i express-session
const KnexSessionStorage = require("connect-session-knex")(session); // <<<<<< for storing sessions in db

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const knexConnection = require("../database/dbConfig.js");

const server = express();
// 2: configure the sessions and cookies
const sessionConfiguration = {
  name: "booger", // default name is sid
  secret: process.env.COOKIE_SECRET || "is it secret? is it safe?",
  cookie: {
    maxAge: 1000 * 60 * 60, // valid for 1 hour (in milliseconds)
    secure: process.env.NODE_ENV === "development" ? false : true, // do we send cookie over https only?
    httpOnly: true // prevent client javascript code from accessing the cookie
  },
  resave: false, // save sessions even when they have not changed
  saveUninitialized: true, // read about it on the docs to respect GDPR
  store: new KnexSessionStorage({
    knex: knexConnection,
    clearInterval: 1000 * 60 * 10, // delete expired sessions every 10 minutes
    tablename: "user_sessions",
    sidfieldname: "id",
    createtable: true
  })
};

server.use(helmet());
server.use(express.json());
server.use(cors()); // research "credentials: true" and "withCredentials" when connecting from your React application
server.use(session(sessionConfiguration)); // 3: use the session middleware globally

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up", session: req.session });
});

module.exports = server;



// const express = require('express');

// const apiRouter = require('./api-router.js');
// const configureMiddleware = require('./configure-middleware.js');
// const server = express();

// configureMiddleware(server);

// server.use('/api', apiRouter);

// module.exports = server;