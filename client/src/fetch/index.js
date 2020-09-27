export const fetchSignup = async (user) => {
  let res;

  await fetch("/signup", {
    method: "post",
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response;
    })
    .then((data) => {
      res = data;
    })
    .catch((error) => {
      res = "Signup Error";
    });

  return res;
};

export const fetchSignin = async (user) => {
  let res;

  await fetch("/signin", {
    method: "post",
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response;
    })
    .then((data) => {
      res = data;
    })
    .catch((error) => {
      res = "Signin Error";
    });

  return res;
};
