import { useQuery } from "@tanstack/react-query";
import { fetchCategoriasComProdutos } from "../api/categorias";

export const useCategoriasComProdutos = () => {
  return useQuery({
    queryKey: ['categorias-com-produtos'],
    queryFn: fetchCategoriasComProdutos
  });
};