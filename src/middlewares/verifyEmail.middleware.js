import users from "../database/users.database";

const verifyEmailMiddleware = (req, res, next) => {
  const { email } = req.body;

  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return res.status(400).json({ message: "E-mail already registered" });
  }
  next();
};

export default verifyEmailMiddleware;
