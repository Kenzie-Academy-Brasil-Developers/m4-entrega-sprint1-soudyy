import getUsersProfileService from "../services/getUserProfile.service";
import users from "../database/users.database";

const getUsersProfileController = (req, res) => {
  const id = users.find((user) => user.email === req.decoded.email);

  const user = getUsersProfileService(id.id);

  return res.json(user);
};

export default getUsersProfileController;
