import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import { useState } from "react";
import About from "./About";
import Team from "./Team";



const Home = () => {

    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct)



    return (
        <div>
            <Banner></Banner>
         
            <h2 className="text-5xl text-center pt-10"> Total Product: {products.length}</h2>

        <div className="grid md:grid-cols-2 gap-6 my-20" >
        {
            products.map((product) => 
                <ProductCard
                key={product._id}
                product={product}>
                products={products}
                setProducts{setProducts}
                </ProductCard>
            )
        }

        </div>
        <About></About>
        <Team></Team>
        </div>
        
    );
};

export default Home;