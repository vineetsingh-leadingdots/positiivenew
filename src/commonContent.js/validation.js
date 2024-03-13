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

export const validateFirstName = (name, setErrorData) => {
  return {
    valid: name.trim() !== "" ? setErrorData((prevErrors) => ({
      ...prevErrors,
      firstNameError: ""
    }))
  : setErrorData((prevErrors) => ({
      ...prevErrors,
      firstNameError: "Password must be at least 8 characters long."
    }))
  };
};

export const validateLastName = (lastName, setErrorData) => {
  return {
    valid: lastName.trim() !== "" ? setErrorData((prevErrors) => ({
      ...prevErrors,
      lastNameError: ""
    }))
  : setErrorData((prevErrors) => ({
      ...prevErrors,
      lastNameError: "Password must be at least 8 characters long."
    })),
  };
};

export const validatePhone = (phone, setErrorData) => {
  const phoneRegex = /^\d{10}$/;
  return {
   
    valid: phoneRegex.test(phone)  ? setErrorData((prevErrors) => ({
      ...prevErrors,
      mobileNumberError: ""
    }))
  : setErrorData((prevErrors) => ({
      ...prevErrors,
      mobileNumberError: "Password must be at least 8 characters long."
    })),
    message: "Please enter a valid phone number (10 digits)."
  };
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return {
    valid: password === confirmPassword,
    message: "Passwords do not match."
  };
};
