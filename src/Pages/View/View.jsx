import { useLoaderData } from "react-router-dom";

const View = () => {

    const productDetails = useLoaderData();
    const {name, brand, rating, price, photo, details, type } = productDetails;
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
      <button className="btn bg-gray-400">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default View;