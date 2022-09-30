const Joi = require("joi");

module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const schema = Joi.object()
        .keys({
          username: Joi.string().required(),
          password: Joi.string().required(),
        })
        .required()

      const validation = schema.validate(req.body)
      if (!validation.error) {
        req.body = validation.value;
      } else {
        req.body = null
      }
      next()
    };
  },
};
