function login(username, password) {
  if (!username || !password)
    return { success: false, message: "Invalid input" };
  if (username === "admin" && password === "password123")
    return { success: true, message: "Login successful" };
  return { success: false, message: "Invalid username or password" };
}

module.exports = login;
