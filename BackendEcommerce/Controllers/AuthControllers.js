const Register = require("../Model/User");
const generateToken = require("../Utils/GenearteToken");

const bcrypt = require('bcrypt');


const register =  async(req, res) => {

try {
        const newUser = new Register(req.body)
    const user =await newUser.save();

    const token = generateToken(user);

    res.status(200).json({
        success: true,
        message: "User Registered Successfully",
        user,token});
    
} catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}



const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Register.findOne({ email });
//email check
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
// paswword check
    // Use bcrypt to compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    res.status(200).json({
      success: true,
      message: "User Login Successfully",
      user,
      token: generateToken(user)
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}

const getUser = async (req, res) => {
  try {
    const { userId, role,name } = req.user; // comes from decoded token

    res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      user: {
        id: userId,
        role,
        name
      },
    });
  } catch (error) {
    console.error("Get User Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { register,getUser,login };


