import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAddProduct = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newProduct ={ name, quantity, supplier, taste, category, details, photo }
        console.log(newProduct);
         // send data to the serer

         fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
         })
         .then (res => res.json())
         .then(data => {
            console.log(data);
            if (data.insertedId){
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
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Product Name"className="input input-bordered w-full" />
                    </label>
                </div>
                    {/* 2 */}
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="quantity" placeholder="Available Quantity"className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex gap-4 mb-8">
                    {/* 1 */}
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" placeholder="Supplier Name"className="input input-bordered w-full" />
                    </label>
                </div>
                    {/* 2 */}
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="taste" placeholder="Taste"className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-4 mb-8">
                    {/* 1 */}
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="Category"className="input input-bordered w-full" />
                    </label>
                </div>
                    {/* 2 */}
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="details" placeholder="Available Quantity"className="input input-bordered w-full" />
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
                        <input type="text" name="photo" placeholder="Photo URL"className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-[#7FB82D]"/>
            </form>
        </div>
    );
};

export default AddProduct;