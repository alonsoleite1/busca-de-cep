export const api = axios.create({
    baseURL: "https://viacep.com.br/ws/",
    Headers: {"Content-Type": "application/json"},
});
