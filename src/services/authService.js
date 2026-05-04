export const AuthService = {
  
  // REGISTER USER (SIGNUP)
  register: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  },

  // LOGIN USER (CHECK CREDENTIALS)
  login: (email, password) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return {
        success: false,
        message: "No account found. Please sign up first."
      };
    }

    if (user.email === email && user.password === password) {
      localStorage.setItem("loggedIn", "true");
      return {
        success: true,
        user
      };
    }

    return {
      success: false,
      message: "Invalid email or password"
    };
  },

  // CHECK IF LOGGED IN
  isLoggedIn: () => {
    return localStorage.getItem("loggedIn") === "true";
  },

  // GET CURRENT USER
  getUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },

  // LOGOUT
  logout: () => {
    localStorage.removeItem("loggedIn");
  }

};