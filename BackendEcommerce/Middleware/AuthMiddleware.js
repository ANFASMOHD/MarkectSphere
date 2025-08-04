const jwt = require("jsonwebtoken");


const authentication=(req,res,next)=>{

    const authheader = req.headers.authorization;

    if(! authheader || !authheader.startsWith("Bearer ")){
        return res.status(401).json({message: "Unauthorized access"});
    }

    const token=authheader.split(" ")[1];


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid token"});
    }

}


module.exports = authentication;