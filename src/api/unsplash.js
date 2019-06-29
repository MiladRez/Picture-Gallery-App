import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID f363a7a7bef2a76136865c0ac868ea20ec02b69442ea4ad7d31a3b06c341370c"
    }
});