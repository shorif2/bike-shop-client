import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

import toast from "react-hot-toast";

const View = () => {

    const productDetails = useLoaderData();

    const loggedUser = useContext(AuthContext)
    console.log(loggedUser);
    const {name, brand, rating, price, photo, details, type } = productDetails;

    const handledAddToCart =()=>{
   // eslint-disable-next-line no-unused-vars
        const { _id, ...productInfo} = productDetails;

        const loggedUserEmail = loggedUser.user.email;
        const cartItem = { ...productInfo, loggedUserEmail};

        fetch("https://technology-today-server.vercel.app/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(cartItem),
        })
        .then((res) => res.json())
        .then((data) =>{
            if(data.insertedId){
                toast.success('Added Successful')
            }
        })

       
        }

    return (
        <div>
            <div className="hero  w-full bg-base-200">
  <div className="hero-content flex-col w-1/2">
    <div>
      
      
      <div className="h-full">
            <div className="card w-96 h-full bg-base-100 shadow-xl">
  <figure className="h-full"><img className="h-full" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name: {name}</h2>
    <h2 className="card-title">Brand Name: {brand}</h2>
    <p>{details}</p>
    <div className="rating py-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <div className="pb-6">
    <div className="badge badge-outline">{brand}</div> 
      <div className="badge badge-outline">{type}</div>
    </div>
    <button onClick={handledAddToCart} className="btn bg-gray-400">Add to cart</button>
  </div>
  
</div>

        </div>



      
    </div>
  </div>
</div>
        </div>
    );
};

export default View;