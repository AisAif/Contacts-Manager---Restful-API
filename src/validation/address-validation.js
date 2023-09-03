import Joi from "joi"

const createAddressValidation = Joi.object({
    street: Joi.string().max(255).optional(),
    city: Joi.string().max(100).optional(),
    province: Joi.string().max(100).optional(),
    country: Joi.string().max(100).required(),
})

const getAddressValidation = Joi.number().positive().min(1).required()

const updateAddressValidation = Joi.object({
    id: Joi.number().positive().min(1).required(),
    street: Joi.string().max(255).optional(),
    city: Joi.string().max(100).optional(),
    province: Joi.string().max(100).optional(),
    country: Joi.string().max(100).required(),
})


export {
    createAddressValidation,
    getAddressValidation,
    updateAddressValidation
}