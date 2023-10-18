import Swal from "sweetalert2";


const ProductCard = ({product}) => {

   

    const { _id, name, quantity, supplier, taste, category, details, photo } = product;
    console.log(name, quantity, supplier);
    const handleDelete =(_id)=>{
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            fetch(`http://localhost:5000/product`)
            }
          })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl p-4 gap-4">
  <figure><img className="w-[150px] h-[150px]" src={photo} alt="Movie"/></figure>
  <div className="flex justify-between w-full pr-4">
    <div>
    <h2 className="card-title">Name: {name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
    </div>
    <div className="card-actions justify-end">
    <div className="btn-group btn-group-vertical space-y-3">
  <button className="btn btn-active">View</button>
  <button className="btn">Edit</button>
  <button onClick={()=> handleDelete(_id)} className="btn">Delete</button>
</div>
    </div>
  </div>
</div>
    );
};

export default ProductCard;