import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api";

const useFetchProducts = () => useQuery({queryKey: ["products"], queryFn: fetchProduct});

export default useFetchProducts;