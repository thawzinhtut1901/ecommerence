// import { useContext, useState } from "react";
// import { BsPlus, BsEyeFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";
// import { CartContext } from "../contexts/CartContext";

// // type CartItem = any;
// interface ProductProps {
//   product: ProductType;
// }
// type ProductType = /*unresolved*/ any
// const Product = ({product}:ProductProps) => {
//   const {addToCart} = useContext(CartContext);
// //   const [cart, setCart] = useState<CartItem[] >([]);
  
// //   const addToCart = (product:any, id:any) => {
// //     const newItem = {...product, amount: 1};
// //     const cardItem = cart.find ((item:any) => {
// //       return item.id === id;
// //     });
    

// //     if(cardItem) {
// //       const newCart = [...cart].map((item) => {
// //         if(item.id === id) {
// //           return {...item, amount: cardItem.amount +1 }
// //         }else {
// //           return item;
// //         }
// //       })
// //       setCart(newCart);
// //     }else {
// //       setCart([...cart, newItem]);
// //     }
// //    };
// //    console.log(cart)
 
  
//   const {id , image, category, title, price}= product;

//   return (
//     <div>
//       <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
//         <div className="w-full h-full flex justify-center items-center">
//           <div className="w-[200px] mx-auto flex justify-center items-center">
//             <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt="" />
            
//           </div>
//           <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <button onClick={() => addToCart && addToCart(product)}>
//                 <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
//                   <BsPlus className="text-3xl"/>
//                 </div>
//               </button>
//               <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"><BsEyeFill/></Link>
//             </div>
//         </div>
//       </div>

//       <div>
//         <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
//         <Link to={`/product/${id}`}>
//           <h2 className="font-semibold mb-1">{title}</h2>
//         </Link>
        
//         <div className="font-semibold">$ {price}</div>
//       </div>
      
//     </div>
//   )
// }

// export default Product

import { useContext } from "react";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

type ProductType = /*unresolved*/ any

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt="" />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart (product, id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl"/>
              </div>
            </button>
            <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"><BsEyeFill/></Link>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
