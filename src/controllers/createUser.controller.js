import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
  const { name, email, password, isAdm } = request.body;

  const user = await createUserService(name, email, password, isAdm);

  return response.json(user).status;
};

export default createUserController;
