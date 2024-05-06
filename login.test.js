const login = require("./login");

describe("login function", () => {
  test("should return true if username and password are correct", () => {
    expect(login("admin", "password123")).toEqual({
      success: true,
      message: "Login successful",
    });
  });

  test("should return false if username is incorrect", () => {
    expect(login("notadmin", "password123")).toEqual({
      success: false,
      message: "Invalid username or password",
    });
  });

  test("should return false if password is incorrect", () => {
    expect(login("admin", "password")).toEqual({
      success: false,
      message: "Invalid username or password",
    });
  });

  test('should return "invalid input" if the username or password is empty', () => {
    expect(login("", "password123")).toEqual({
      success: false,
      message: "Invalid input",
    });
    expect(login("admin", "")).toEqual({
      success: false,
      message: "Invalid input",
    });
    expect(login("", "")).toEqual({ success: false, message: "Invalid input" });
  });

  test('should return "invalid input" if the username or password is null', () => {
    expect(login(null, "password123")).toEqual({
      success: false,
      message: "Invalid input",
    });
    expect(login("admin", null)).toEqual({
      success: false,
      message: "Invalid input",
    });
    expect(login(null, null)).toEqual({
      success: false,
      message: "Invalid input",
    });
  });
});
