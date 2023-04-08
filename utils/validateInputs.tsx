type Inputs = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};

const validateInputs = (...args: Array<string | undefined>): {} => {
  const [name, email, password, passwordConfirmation] = args;
  const errors: { [key: string]: string } = {};
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!name) {
    errors.name = "Name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email format";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length <= 5) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!passwordConfirmation) {
    errors.passwordConfirmation = "Password confirmation is required";
  } else if (passwordConfirmation !== password) {
    errors.passwordConfirmation = "Passwords do not match";
  }

  return errors;
};


export default validateInputs