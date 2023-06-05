import axios, {AxiosRequestConfig} from "axios";
import {API_BASE_URL, TIMEOUT_AXIOS, token} from "../static";

const config: AxiosRequestConfig = {
    baseURL: API_BASE_URL,
    timeout: TIMEOUT_AXIOS,
    headers: {
        Accept: "application/json",
    },
};

export const AxiosInstance = axios.create(config);

AxiosInstance.interceptors.request.use(
    (config) => {
        const {accessToken} = JSON.parse(localStorage.getItem(token) as string);
        if (accessToken) {
            config.headers["authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.response.use(
    (res) => {
        return res.data;
    },
    async (err) => {
        return Promise.reject(err);
    }
);
