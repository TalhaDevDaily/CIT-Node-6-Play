const isValidEmail = function (email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const isValidPassword = function (pass) {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // Password must have at least 1: uppercase, lowercase, digit, special character

  return passPattern.test(pass);
};

module.exports = { isValidEmail, isValidPassword };
