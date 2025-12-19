// utils/validate.js
const { body, validationResult } = require("express-validator");

const validateRegister = [
  body("name")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Имя должно содержать минимум 2 символа"),
  body("email").isEmail().normalizeEmail().withMessage("Некорректный email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Пароль должен содержать минимум 6 символов"),
];

const validateLogin = [
  body("email").isEmail().normalizeEmail().withMessage("Некорректный email"),
  body("password").notEmpty().withMessage("Пароль обязателен"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateRegister, validateLogin, handleValidationErrors };
