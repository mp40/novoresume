const validSignUpDetails = (user) => {
  const validName =
    typeof user.firstName === "string" &&
    user.firstName.trim().length > 0 &&
    typeof user.lastName === "string" &&
    user.lastName.trim().length > 0;

  const validEmail =
    typeof user.email === "string" && user.email.trim().length > 0;

  const validPassword =
    typeof user.password === "string" && user.password.trim().length > 5;

  return validName && validEmail && validPassword;
};

module.exports = {
  validSignUpDetails,
};
