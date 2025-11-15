function authenticateUser(username, password) {
  // Simple demo authentication (not real security)
  if (username === "admin" && password === "1234") {
    return "Login successful!";
  } else {
    return "Invalid username or password.";
  }
}

module.exports = authenticateUser;
