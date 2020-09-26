const validSignUpDetails = (user) => {
  const validName =
    typeof user.firstName === "string" && user.firstName.trim().length > 0;

  return validName;
};

module.exports = {
  validSignUpDetails,
};
