import users from "../database/users.database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return { message: "Wrong email/password" };
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return { message: "Wrong email/password" };
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};

export default loginService;
