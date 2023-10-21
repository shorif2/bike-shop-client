import { Link } from "react-router-dom";


const BrandItem = ({item}) => {

    const {_id, photo, name, type, brand, details} = item
    
    return (
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
    <div className="card-actions justify-between">
      <Link to={`/view/${_id}`}><button className="btn btn-primary text-white">Details</button></Link>
      <Link to={`/update-product/${_id}`}>

      <button className="btn btn-primary text-white">Update</button>
      </Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandItem;