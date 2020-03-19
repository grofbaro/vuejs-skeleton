import Config from "../config/Config";

export default {
    saveToken(token) {
        return localStorage.setItem(Config.tokenVariableName, "Bearer " + token);
    },
    removeToken() {
        return localStorage.removeItem(Config.tokenVariableName);
    },
    getToken() {
        return localStorage.getItem(Config.tokenVariableName);
    }
}
