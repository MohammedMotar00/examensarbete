export const login = ({ commit }, username) => {
    commit("SET_LOGIN", username);
};

export const usernameLoggedIn = ({ commit }) => {
    let username = localStorage.getItem("username");
    commit("SET_USERNAME_LOGGED_IN", username);
};
