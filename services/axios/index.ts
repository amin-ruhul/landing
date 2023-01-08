import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://munchies-api.up.railway.app",
  timeout: 1000,
});

// Add a request interceptor
apiClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    let message =
      typeof error.response !== "undefined"
        ? error.response.data.message
        : error.message;
    console.warn("error", message);
  
    return;

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default apiClient;
