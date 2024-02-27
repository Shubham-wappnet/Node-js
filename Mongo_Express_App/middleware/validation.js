const Joi = require('joi')

const statusEnum = ['Active', 'Deleted'];
const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
    phone: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    status: Joi.string().valid(...statusEnum).required(),
    password: Joi.string().min(6).max(20).required().custom((value, helper) => {
        if (
            !/[a-z]/.test(value) ||
            !/[A-Z]/.test(value) ||
            !/[0-9]/.test(value)
        ) {
            return helper.message("password must contain one uppercase,one lowercase and one digit")
        }
        return value;
    })

})
const validateRegistration = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = validateRegistration ;