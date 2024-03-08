// validation.js

export const validateEmail = (email, setErrorData) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    valid: emailRegex.test(email)
      ? setErrorData((prevErrors) => ({
          ...prevErrors,
          emailError: ""
        }))
      : setErrorData((prevErrors) => ({
          ...prevErrors,
          emailError: "Please enter a valid email address."
        }))
  };
};

export const validatePassword = (password, setErrorData) => {
  return {
    valid: password.length >= 8 ? setErrorData((prevErrors) => ({
        ...prevErrors,
        passwordError: ""
      }))
    : setErrorData((prevErrors) => ({
        ...prevErrors,
        passwordError: "Password must be at least 8 characters long."
      }))
  };
};

export const validateName = (name) => {
  return {
    valid: name.trim() !== "",
    message: "Please enter your name."
  };
};

export const validateLastName = (lastName) => {
  return {
    valid: lastName.trim() !== "",
    message: "Please enter your last name."
  };
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return {
    valid: phoneRegex.test(phone),
    message: "Please enter a valid phone number (10 digits)."
  };
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return {
    valid: password === confirmPassword,
    message: "Passwords do not match."
  };
};
