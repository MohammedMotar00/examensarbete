export const login = ({ commit }, username) => {
    commit("SET_LOGIN", username);
};

export const usernameLoggedIn = ({ commit }) => {
    let username = window.localStorage.getItem("username");
    commit("SET_USERNAME_LOGGED_IN", username);
};
