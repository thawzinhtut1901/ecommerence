import { URL } from "../service/ApiEndPoint"

const fetchProduct = async () => {
    const response:Response = await fetch(`${URL}/products`);
    const result = await response.json();
    if (!response.ok) {
        throw new Error();
    }
    return result as any[];
};

export default fetchProduct;