export const validation = (newPassword, confirmPassword) => {
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[\w\d\W_]{6,15}$/;
    
    let errors = {};
  
    if (newPassword.trim() === "") {
      errors.newPassword = "The Password field is required";
    } else if (!regexPassword.test(newPassword)) {
      errors.newPassword = "The Password is Invalid";
    }
  
    if (confirmPassword.trim() === "") {
      errors.confirmPassword = "The Password field is required";
    } else if (!regexPassword.test(confirmPassword)) {
      errors.confirmPassword = "The Password is Invalid";
    }
  
    return errors;
  };
  