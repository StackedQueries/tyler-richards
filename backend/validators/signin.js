const Joi = require('joi');
const ExpressError = require('../utils/ExpressError');


const schema = Joi.object({
password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
})



module.exports.validateUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const value = await schema.validateAsync({ email, password})
        next()
    }
    catch (err) { 
        console.log(err)
        return next(new ExpressError(err.message, 406))
    }
}