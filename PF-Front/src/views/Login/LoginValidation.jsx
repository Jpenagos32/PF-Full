export const validation = (formData) => {
  const regexEmail = /^(?=.{1,35}$)[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[\w\d\W_]{6,15}$/
  let errors = {};

  if (!regexEmail.test(formData.emailAddress)) {
    errors.emailAddress = "Enter a valid Email Address";
  }

  if (!regexPassword.test(formData.password)) {
    errors.password = "The Password is Invalid";
  }

  return errors;
};
