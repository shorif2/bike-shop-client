import { Link, useNavigate } from "react-router-dom";

import toast from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";


const Register = () => {

  const navigate = useNavigate()
    

    const {createUser,  userProfile} = useContext(AuthContext)
    const onSubmit = (e)=> {

        e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const image = e.target.url.value

    const validation = /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);


      


    if (!(validation)) {
        return toast.error('One capital letter, Special characters and 6 characters Required');
      }

    
    createUser(email, password )

    .then(userCredential=>{
const user = userCredential.user;
        
userProfile(user, name, image)

        toast.success('Account Created Successfully')
        navigate('/');
        
    })
    .catch((error) => {
        toast.error(`${error}`)
    })
    e.target.email.value = '';
      e.target.password.value = '';
      e.target.name.value = '';

    
    }

    return (
        <div className="">
        <div className="hero  bg-base-200 pt-16 pb-44">
<div className="hero-content flex-col lg:w-1/3 ">
<div className="w-full p-10  flex-shrink-0 shadow-2xl bg-base-100">
<h1 className="text-5xl font-bold text-center pb-6">Register now! </h1>
  
  
  <form onSubmit={onSubmit}  className="">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
    </div>
    {/* img */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Image</span>
      </label>
      <input type="text" name="url" placeholder="Image Url" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
      <label className="label">
        <p>Already Register?</p>
        <Link to='/log-in' className="text-[#69A032] font-bold">Login</Link>
      </label>
    </div>
    <div className="form-control mt-6">
      <button type="submit" className="btn bg-[#69A032] text-white">Register</button>
    </div>
  </form>
  
</div>
</div>
</div>

    </div>
    );
};

export default Register;