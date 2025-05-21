import axios from "axios";

const auth = {
  username: "admin",
  password: "admin123",
};

const api = axios.create({
  baseURL: "https://webservice-pw0xla.fly.dev/api",
  auth,
});

export const fetchCategoriasComProdutos = async () => {
  const response = await api.get("/categorias/com-produtos");
  
  return response.data;
};