export const validation = (formData) => {
  const regexEmail = /^(?=.{1,35}$)[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[\w\d\W_]{6,15}$/;

  let errors = {};

  if (formData.firstName.trim() === "") {
    errors.firstName = "The Name Field is Required";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName.trim())) {
    errors.firstName = "The Name field can only contain letters";
  } else if (formData.firstName.trim().length > 30) {
    errors.firstName = "The Name field cannot exceed 30 characters";
  }

  if (formData.lastName.trim() === "") {
    errors.lastName = "The Last Name Field is Required";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName.trim())) {
    errors.lastName = "The Last Name field can only contain letters";
  } else if (formData.lastName.trim().length > 30) {
    errors.lastName = "The Last Name field cannot exceed 30 characters";
  }

  if (!regexEmail.test(formData.emailAddress)) {
    errors.emailAddress = "Enter a valid Email Address";
  }

  if (formData.password.trim() === "") {
    errors.password = "The Password field is required";
  } else if (!regexPassword.test(formData.password)) {
    errors.password = "The Password is Invalid";
  }

  if (formData.phone.trim() === "") {
    errors.phone = "The Phone field is required";
  } else if (!/^\d+$/.test(formData.phone.trim())) {
    errors.phone = "The Phone field can only contain numbers";
  }

  if (formData.billingAddress.trim() === "") {
    errors.billingAddress = "The Billing Address field is required";
  }

  if (formData.city.trim() === "") {
    errors.city = "The City field is required";
  }

  if (formData.country === "") {
    errors.country = "You must select a country";
  }

  if (formData.zipCode.trim() === "") {
    errors.zipCode = "The Zip Code field is required";
  } else if (!/^\d+$/.test(formData.zipCode.trim())) {
    errors.zipCode = "The Zip code field can only contain numbers";
  }

  return errors;
};
