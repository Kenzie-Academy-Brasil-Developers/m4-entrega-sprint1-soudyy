import getUsersService from "../services/getUsers.service";

const getUsersController = (request, response) => {
  const users = getUsersService();

  return response.json(users);
};

export default getUsersController;
