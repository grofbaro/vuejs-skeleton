import axios from "axios";
import Config from "../config/Config";
import TokenService from "./TokenService";
import router from "../../router";

const apiClient = axios.create({
    baseURL: Config.apiUrl,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

apiClient.interceptors.request.use(
    config => {
        const token = TokenService.getToken();
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

apiClient.interceptors.response.use(
    response => successHandler(response),
    err => errorHandler(err)
);

const errorHandler = (err) => {
    if (err.response.status === 401) {
        TokenService.removeToken();
        router.push("/login");
    }

    return Promise.reject(err);
};

const successHandler = (response) => {
    return response;
};

export default {
    get(path, params) {
        return apiClient.get(`/${path}`, {params});
    },
    post(path, body) {
        return apiClient.post(`/${path}`, body);
    },
    put(path, body) {
        return apiClient.put(`/${path}`, body);
    },
    delete(path) {
        return apiClient.delete(`/${path}`);
    },
}