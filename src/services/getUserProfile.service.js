import users from "../database/users.database";

const getUsersProfileService = (id) => {
  const userProfile = users.find((user) => user.id === id);

  return userProfile;
};

export default getUsersProfileService;
