import useFetchProducts from "../hooks/useProductsApi"
import {Hero, Loading, Product } from "../components";


const Home = () => {
  const {data, isLoading} = useFetchProducts();

  const fliteredProducts = data?.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
      
    );
    
  });
  console.log(fliteredProducts)

  if (isLoading) {
    return (
        <div className="flex justify-center items-center bg-black w-screen h-screen"><Loading/></div>
    )
  }
  

  return (
    
    <div>
      <Hero/>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {fliteredProducts?.map(data => {
              return <Product product={data} key={data.id}/>
              // <div className="w-full h-[300px] bg-rose-200" key={data.id}>{data.title}</div>
              })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home