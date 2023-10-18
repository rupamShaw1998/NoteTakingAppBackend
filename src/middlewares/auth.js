const jwt = require("jsonwebtoken");
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || "ThisIsSampleSecretKeyForTestingTheApp";

const authTokenVerification = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {
        return res.status(404).send("authentication failed");
    }
    
    req.user = jwt.verify(token, SECRET_KEY);
    next();
};

module.exports = authTokenVerification;
