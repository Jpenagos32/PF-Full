export const validation = (formData) => {
  const regexEmail = /^(?=.{1,35}$)[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*\d)[\w\d]{6,10}$/;
  let errors = {};

  if (!regexEmail.test(formData.emailAddress)) {
    errors.emailAddress = "Enter a valid Email Address";
  }

  if (!regexPassword.test(formData.password)) {
    errors.password = "The Password is Invalid";
  }

  return errors;
};
