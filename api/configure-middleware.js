module.exports = (req, res, next) => {
    if (req.session && req.session.username) {
        next();
    } else {
        res.status(401).json({ you: 'cannot pass!' });
    }
};


// const express = require('express');
// const helmet = require('helmet');
// const cors = require('cors');

// module.exports = server => {
//     server.use(helmet());
//     server.use(express.json());
//     server.use(cors());
// };