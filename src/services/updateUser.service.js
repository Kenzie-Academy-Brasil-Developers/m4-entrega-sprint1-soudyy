import users from "../database/users.database";

const updateUserService = (id, name, email) => {
  const updateUser = {
    id,
    name,
    email,
    updatedOn: new Date(),
  };

  const userIndex = users.findIndex((el) => el.id === id);
  const user = users.find((user) => user.id === id);
  if (user.isAdm === false) {
    return "Not Authorized";
  }
  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
};

export default updateUserService;
