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
                toast.success('Login Successful')
            }
        })

       
        }

    return (
        <div>
            <div className="hero  w-full bg-base-200">
  <div className="hero-content flex-col w-1/2">
    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold py-6">{name}</h1>
      <p className="">{details}</p>
      <p className="">{details}</p>
      <p className="">{details}</p>
      <p className="">{details}</p>
      <button onClick={handledAddToCart} className="btn bg-gray-400">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default View;