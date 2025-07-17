const axios = require('axios');
const jwt = require('jsonwebtoken')
// const JWT_SECRET = 'your_super_secret_key';


const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ status: false, message: 'Unauthorized User' })
    }
    const token = authHeader.split(' ')[1]
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode; // this line added user information to the req object
        next(); // Now controller can access the req.user
    } catch (error) {
        res.status(403).json({ status: false, message: "Invalid or expired token" })
    }
}

module.exports = verifyToken;


// // Check User is Existed or not
// const authnicateUser = async (req, res, next) => {
//     const userId = req.header('x-user-id');
//     if (!userId) {
//         res.status(401).json({ status: false, message: "Missing User Id" })
//     }

//     try {
//         const response = await axios.get('http://localhost:3001/users');
//         const users = response.data;
//         const userExists = users.find((user) => user._id === userId)
//         if (!userId) {
//             res.status(401).json({ status: false, message: "Un Authorized" })
//         }

//         req.user = userExists;
//         next();
//     } catch (error) {
//         res.status(500).json({ status: false, error: error.message })
//         console.log(error)
//     }
// }

// module.exports = authnicateUser;