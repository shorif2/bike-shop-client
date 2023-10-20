import { Link } from "react-router-dom";


const Brands = ({ brands }) => {
    const { brand, image } = brands
    return (
        <Link to={`/brand/${brand}`} >

            {/* home cart */}
            <div className="card h-full card-compact  bg-base-100 shadow-xl">
                <figure><img className="h-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    
                </div>

            </div></Link>
    );
};

export default Brands;