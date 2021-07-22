const Joi = require('joi');
const ExpressError = require('../utils/ExpressError');


const schema = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),

    last_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),

    password: Joi.string()
    //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
        .pattern(new RegExp("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")) 
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
})



module.exports.validateUser = async (req, res, next) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const value = await schema.validateAsync({ email, password, first_name:firstName, last_name:lastName })
        next()
    }
    catch (err) { 
        console.log(err)
        return next(new ExpressError(err.message, 406))
    }
}