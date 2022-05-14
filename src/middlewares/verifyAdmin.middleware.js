import users from "../database/users.database";

const verifyAdmin = (req, res, next) => {
  const decodedUser = users.find((user) => user.email === req.decoded.email);
  const paramsUser = req.user;

  if (decodedUser.isAdm) {
    return next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default verifyAdmin;
