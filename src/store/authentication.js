import TokenService from "../core/services/TokenService";
import AuthService from "../core/services/AuthService";
import router from '../router';

const state = {
    token: TokenService.getToken(),
    status: '',
};

const getters = {
};

const actions = {
    login({commit}, credential) {
        commit('login');
        AuthService.login(credential).then(jsonResponse => {
            TokenService.saveToken(jsonResponse.data);
            commit('loginSuccess');
            router.push('/')
        }).catch(() => {
            commit('loginError');
        });
    },
    logout({commit}) {
        AuthService.logout().then(() => {
            commit('logout');
            logout();
        }).catch(() => {
            commit('logout');
            logout();
        });
    }
};

const mutations = {
    ['login'](state) {
        state.status = 'loading';
    },
    ['loginSuccess'](state) {
        state.token = TokenService.getToken();
        state.status = 'success';
    },
    ['loginError'](state) {
        state.status = 'error';
    },
    ['logout'](state) {
        state.token = null;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

function  logout() {
    TokenService.removeToken();
    router.push('/login');
}