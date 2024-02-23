const jwt=require('jsonwebtoken')
require('dotenv').config

const authenticateJWT/*itself a middleware*/ = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
};
console.log(authenticateJWT)

module.exports = authenticateJWT;
