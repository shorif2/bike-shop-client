import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";


const LogIn = () => {

    const {googleSignIn, logInWithPass} = useContext(AuthContext);

// const location = useLocation()
const location = useLocation()
const navigate = useNavigate()

    // google sign in 
    const handledGoogleSignIn = () => {
       
        googleSignIn()
        .then(()=>{
            toast.success('Login Successful')
            navigate(location?.state ? location.state: '/' );
            
        })
        .then((error)=>{
            console.log(error);
        })
        
    }
    const onSubmit = (e)=> {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
    
    
        logInWithPass(email, password)
        .then((res)=>{
            console.log(res);
          toast.success('Login Successful')
        
        navigate(location?.state ? location.state: '/' );
      })
      .catch((error) =>{
          console.log(error);
          toast.error('Email/Password not match')
      })
    }


    return (

        <div className="">
            <div className="hero  bg-base-200 pt-16 pb-48">
                <div className="hero-content flex-col lg:w-1/3 ">
                    <div className="w-full p-10  flex-shrink-0 shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center pb-6">Login now!</h1>

                        
                        <form onSubmit={onSubmit} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>New Here?</p>
                                    <Link to='/register' className="text-[#69A032] font-bold">Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#69A032] text-white">Login</button>
                            </div>

                        </form>

                        {/*   */}
                        <div className="pt-6 flex justify-center text-center w-full ">
                            <button onClick={handledGoogleSignIn} className=" py-2 px-3 rounded-lg border border-[#69A032] w-full" > Register with <span> <FcGoogle className="inline text-3xl"> </FcGoogle></span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;