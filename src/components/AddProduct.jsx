import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const type = form.type.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newProduct = { name, brand, rating, price, type, details, photo }
        console.log(newProduct);
        // send data to the serer

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <div className="container mx-auto p-24">
            <h2 className="text-3xl font-extrabold">Add Product here</h2>
            <form onSubmit={handleAddProduct}>
                {/* form name and quantity row */}
                <div className="md:flex gap-4 mb-8">
                    {/* 1 */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input  w-full" />
                        </label>
                    </div>
                    {/* 2 */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brand" placeholder="Brand Name" className="input  w-full" />
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
                            <input type="text" name="rating" placeholder="Rating" className="input  w-full" />
                        </label>
                    </div>
                    {/* 2 */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input  w-full" />
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
                            <input type="text" name="type" placeholder="Type" className="input  w-full" />
                        </label>
                    </div>
                    {/* 2 */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input  w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input  w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-[#7FB82D]" />
            </form>
        </div>
    );
};

export default AddProduct;