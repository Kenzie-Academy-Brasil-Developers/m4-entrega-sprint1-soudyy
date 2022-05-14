const userWOPassword = (user) => {
  const { password, ...userWOPwd } = user;
  return userWOPwd;
};

export default userWOPassword;
