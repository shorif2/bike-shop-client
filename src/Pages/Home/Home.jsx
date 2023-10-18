import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ProductCard from "./ProductCard";



const Home = () => {

    const product = useLoaderData();
    



    return (
        <div>
            <Banner></Banner>
         
            <h2 className="text-5xl text-center pt-10"> Total Product: {product.length}</h2>

        <div className="grid md:grid-cols-2 gap-6 my-20" >
        {
            product.map((product) => 
                <ProductCard key={product._id} product={product}></ProductCard>
            )
        }

        </div>
        
        </div>
        
    );
};

export default Home;