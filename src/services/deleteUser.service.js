import users from "../database/users.database";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((element) => element.id === id);

  const user = users.find((user) => user.id === id);
  if (user.isAdm === false) {
    return "Not Authorized";
  }

  if (userIndex === -1) {
    return response.status(404).json("Missing admin permissions");
  }

  users.splice(userIndex, 1);

  return "User deleted with success";
};

export default deleteUserService;
