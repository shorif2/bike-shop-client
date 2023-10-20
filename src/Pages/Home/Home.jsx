import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import { useState } from "react";
import About from "./About";
import Team from "./Team";
import ContactUs from "../Contact/ContactUs";
import Brands from "../../components/Brands";



const Home = () => {
    const brands = useLoaderData()
console.log(brands);

    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct)



    return (
        <div className="container mx-auto">
            <Banner></Banner>

            <h2 className="text-5xl text-center pt-10"> All bikes we are provide  </h2>

<div className="grid md:grid-cols-3 lg:grid-cols-3 px-20 gap-4 my-20">
{
    brands.map(brands => <Brands key={brands._id} brands={brands}></Brands>)
}
</div>
            
            <div className="grid md:grid-cols-2 gap-6 my-20 container mx-auto" >
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
            <ContactUs></ContactUs>
            <About></About>
            <Team></Team>
        </div>

    );
};

export default Home;