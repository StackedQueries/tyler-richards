const jwt = require('jsonwebtoken')
const User = require("./models/user")
const secret = process.env.JWT_SECRET;


module.exports.auth = async (req, res, next) => {
    try {
        console.log(req.headers)
        if (process.env.NODE_ENV === "dev") {next(); return}
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            const isCustomAuth = token.length < 500;

            let decodedData;

            if (token && isCustomAuth ) {
                decodedData = jwt.verify(token, secret);
                req.userId = decodedData?.id;
            } else {
                decodedData = jwt.decode(token);

                req.userId = decodedData?.sub;
            }


            next();
        } else {
            res.send('not logged in')
        }
    }
    catch (error) {
        console.log(error);
    }
};

module.exports.admin = async (req, res, next) => {
    try {
        if (process.env.NODE_ENV==='dev') { return next();}
        
        const id = req.userId
        const user = await User.findOne({ '_id': id })
        if (user?.isAdmin) {
            console.log("admin authenticated")
            next()
        } else {
            res.json({ status: false })
        }
    } catch (error) {
        console.log(error);
    }
};