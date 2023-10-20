import { Link } from "react-router-dom";


const BrandItem = ({item}) => {

    const {_id, photo, name, brand, details} = item
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name: {name}</h2>
    <h2 className="card-title">Brand Name: {brand}</h2>
    <p>{details}</p>
    <p>{details}</p>
    <p>{details}</p>
    <div className="card-actions justify-between">
      <Link to={`/view/${_id}`}><button className="btn btn-primary">View</button></Link>
      <Link to={`/update-product/${_id}`}>

      <button className="btn btn-primary">Update</button>
      </Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandItem;