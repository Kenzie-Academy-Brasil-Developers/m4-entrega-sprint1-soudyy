import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  const { id } = req.param;

  deleteUserService(id);

  return res.status(200).json({ message: "User deleted with success" });
};

export default deleteUserController;
