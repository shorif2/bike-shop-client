import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import UserCards from "../../components/UserCards";


const MyCart = () => {
    const [cartData, setCartData] = useState([])
    const currentUser = useContext(AuthContext)

    const { user } = currentUser
    useEffect(() => {
        fetch(`https://technology-today-server.vercel.app/cart/${user.email}`)
            .then(res => res.json())
            .then(data => setCartData(data))

    }, [user])
    console.log(cartData);
    return (
        <div>
            {/* cart */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
                {cartData.map(cart => <UserCards key={cart._id} cart={cart} cartData={cartData} setCartData={setCartData}></UserCards>) }
            </div>
        </div>
    );
};

export default MyCart;