const sessionAuthentication = async (req, res, next) => {
    const sessionId = req.sessionID;
    const email = req.session.email;
    console.log(sessionId);
    console.log(email);
    if (sessionId && email) {
        req.user.email = email;
        next();
        
    }
   
    else {
        res.status(401).json({ error: "Unautorized or session is expired." })
    }
}

module.exports = sessionAuthentication;


