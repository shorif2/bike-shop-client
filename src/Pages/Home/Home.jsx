import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import { useState } from "react";
import About from "./About";
import Team from "./Team";
import ContactUs from "../Contact/ContactUs";



const Home = () => {

    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct)



    return (
        <div className="container mx-auto">
            <Banner></Banner>

            <h2 className="text-5xl text-center pt-10"> Total Product: {products.length}</h2>


            <div className="grid grid-cols-3 gap-4 px-28 my-10">
                {/* Samsung */}
                <div className="card w-96  bg-base-100 shadow-xl">
                    
                    <figure ><img className="" src="https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png" alt="Samsung" /></figure>
                    
                    <div className="card-body">
                        <h2 className="card-title">
                            Samsung
                        </h2>
                        <div className="card-actions justify-end">
                            <button className="px-[14px]  border border-black rounded-3xl text-base">View</button>
                        </div>
                    </div>
                </div>
                {/* Samsung */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <figure ><img className="" src="https://www.freepnglogos.com/uploads/google-text-logo-png-26.png" alt="Samsung" /></figure>
                    
                    <div className="card-body">
                        <h2 className="card-title">
                            Google
                        </h2>
                        <div className="card-actions justify-end">
                            <button className="px-[14px]  border border-black rounded-3xl text-base">View</button>
                        </div>
                    </div>
                </div>
                {/* Samsung */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <figure ><img className="" src="https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png" alt="Samsung" /></figure>
                    
                    <div className="card-body">
                        <h2 className="card-title">
                            Xiaomi
                        </h2>
                        <div className="card-actions justify-end">
                            <button className="px-[14px]  border border-black rounded-3xl text-base">View</button>
                        </div>
                    </div>
                </div>
                {/* Samsung */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <figure ><img className="" src="https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png" alt="Samsung" /></figure>
                    
                    <div className="card-body">
                        <h2 className="card-title">
                            Vivo
                        </h2>
                        <div className="card-actions justify-end">
                            <button className="px-[14px]  border border-black rounded-3xl text-base">View</button>
                        </div>
                    </div>
                </div>
                {/* Samsung */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <figure ><img className="" src="https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png" alt="Samsung" /></figure>
                    
                    <div className="card-body">
                        <h2 className="card-title">
                            Apple
                        </h2>
                        <div className="card-actions justify-end">
                            <button className="px-[14px]  border border-black rounded-3xl text-base">View</button>
                        </div>
                    </div>
                </div>
                {/* Samsung */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    
                    <figure ><img className="" src="https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png" alt="Samsung" /></figure>
                    
                    <div className="card-body">
                        <h2 className="card-title">
                            One Plus
                        </h2>
                        <div className="card-actions justify-end">
                            <button className="px-[14px]  border border-black rounded-3xl text-base">View</button>
                        </div>
                    </div>
                </div>
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