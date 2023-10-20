import {  useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const navigate = useNavigate()

    const product = useLoaderData()

    const { _id, name, brand, rating, price, type, details, photo } = product;

    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const type = form.type.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const UpdatedProduct = { name, brand, rating, price, type, details, photo }
        console.log(UpdatedProduct);
        // send data to the serer

        fetch(`https://technology-today-server.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0 ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/brand/Yamaha')
                }
            })

    }
    return (
        <div>
            <div>
                <div className="container mx-auto p-24">
                    <h2 className="text-3xl font-extrabold">Update Product : {name}</h2>
                    <form onSubmit={handleUpdateProduct}>
                        {/* form name and quantity row */}
                        <div className="md:flex gap-4 mb-8">
                            {/* 1 */}
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input  w-full" />
                                </label>
                            </div>
                            {/* 2 */}
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input  w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex gap-4 mb-8">
                            {/* 1 */}
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input  w-full" />
                                </label>
                            </div>
                            {/* 2 */}
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={price} name="price" placeholder="Price" className="input  w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex gap-4 mb-8">
                            {/* 1 */}
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={type} name="type" placeholder="Type" className="input  w-full" />
                                </label>
                            </div>
                            {/* 2 */}
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={details} name="details" placeholder="Details" className="input  w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form image row */}
                        <div className="mb-8">
                            {/* 1 */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={photo} name="photo" placeholder="Photo URL" className="input  w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Update Product" className="btn btn-block bg-[#7FB82D]" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;