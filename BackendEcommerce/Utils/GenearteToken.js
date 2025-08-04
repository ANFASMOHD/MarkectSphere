const jwt =require('jsonwebtoken')




const generateToken = (user) => {
    return jwt.sign(
        {
         userId: user._id,
         role:user.role,
        name: user.name

        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2h'
        }
)}

module.exports = generateToken;