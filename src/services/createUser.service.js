import users from "../database/users.database";
import { v4 as uuid4 } from "uuid";
import * as bcrypt from "bcryptjs";
import userWOPassword from "../../utils";

const createUserService = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: uuid4(),
    name,
    email,
    password: hashedPassword,
    isAdm,
    createOn: new Date(),
    updatedOn: new Date(),
  };

  users.push(newUser);
  const userWOP = userWOPassword(newUser);
  return userWOP;
};

export default createUserService;
