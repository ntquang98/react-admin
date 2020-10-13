export default {
  // called when the user attempts to log in
  login: ({ email, password }) => {
      localStorage.setItem('auth', email);
      // accept all username/password combinations
      return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
      if (status === 401 || status === 403) {
          localStorage.removeItem('auth');
          return Promise.reject();
      }
      return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
      return localStorage.getItem('auth')
          ? Promise.resolve()
          : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};