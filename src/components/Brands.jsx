import { Link } from "react-router-dom";


const Brands = ({ brands }) => {
    const { brand, image } = brands
    return (
        <Link to={`/brand/${brand}`} >

            {/* home cart */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    <div className="card-actions justify-end">

                    </div>
                </div>

            </div></Link>
    );
};

export default Brands;