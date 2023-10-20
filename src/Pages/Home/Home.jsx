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
            
            <div className="hidden   gap-6 my-20 container mx-auto" >
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
            <div className="space-y-4 my-10">
                <h2 className="text-5xl text-center font-bold pt-10">FAQ</h2>
                <p className="text-center text-xl font-semibold py-4">Here are some frequently asked questions (FAQ) and answers for our customer</p>
            <div className="collapse collapse-plus bg-base-200 ">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  How do I buy my bike on your website? 
  </div>
  <div className="collapse-content"> 
    <p>To sell your bike, simply create an account on our website and click on the "Sell Your Bike button. Follow the prompts to provide information about your bike, upload photos, set a price, and list your bike for sale.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Is there a fee to list my bike for sale?
  </div>
  <div className="collapse-content"> 
    <p>Listing your bike for sale is free. We only charge a small fee if your bike successfully sells on our platform.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Is international shipping available for bikes?
  </div>
  <div className="collapse-content"> 
    <p>Shipping options may vary depending on the sellers location and shipping preferences. You can discuss shipping arrangements with the seller directly.</p>
  </div>
</div>
            </div>
        </div>

    );
};

export default Home;