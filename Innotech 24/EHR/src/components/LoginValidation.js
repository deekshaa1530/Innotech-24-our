function Validation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  // Email validation
  if (!values.email.trim()) {
    error.email = "Email should not be empty"; // Corrected error message
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email doesn't match the required format"; // Corrected message
  }

  // Password validation
  if (!values.password) {
    error.password = "Password should not be empty"; // Corrected error message
  } else if (!password_pattern.test(values.password)) {
    error.password =
      "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit."; // Improved error message
  }

  return error;
}
export default Validation;
