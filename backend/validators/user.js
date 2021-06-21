const Joi = require('joi');
const ExpressError = require('../utils/ExpressError');


const schema = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30),

    last_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),


    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
    .with('first_name', 'last_name')
    .with('password', 'email');


module.exports.validateUser = async (req, res, next) => {
    try {
        schema.validate(req.body.post)
        next(new ExpressError(err.message, 406))
    }
    catch (err) { 

    }
}