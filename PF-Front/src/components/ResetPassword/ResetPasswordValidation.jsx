export const validation = (formData) => {
  const regexEmail = /^(?=.{1,35}$)[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errors = {};

  if (!regexEmail.test(formData.emailAddress)) {
    errors.emailAddress = "Enter a valid Email Address";
  }
  return errors;
};
