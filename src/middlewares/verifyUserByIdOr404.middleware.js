import users from "../database/users.database";

const verifyUserByIdOr404 = (req, res, next) => {
  const decodedUser = users.find((user) => user.email === req.decoded.email);

  if (!decodedUser) {
    return res.status(404).json({ message: "User not found." });
  }

  return next();
};

export default verifyUserByIdOr404;
