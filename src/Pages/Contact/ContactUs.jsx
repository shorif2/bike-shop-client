

const ContactUs = () => {
    return (
        <div className="flex flex-col lg:flex-row container mx-auto px-4 md:px-6 lg:px-20 w-full my-10">
            <div className="flex flex-col justify-center space-y-6 lg:w-2/4">
<h2 className="text-3xl font-bold ">Get in Touch</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat excepturi nihil amet, rerum nulla magni fuga atque </p>
<h3 className="text-2xl font-semibold">4930 Alaska Hwy, Fort Nelson
British Columbia, V0C 1C0</h3>
<h4>+1 (344) 132-3434-34</h4>
<p>support@smarteyeapps.com</p>

            </div>
            <div className="lg:w-2/4">
            <div className="">
  <div className="flex-col">
    <div className="">
      
      
    </div>
    <div className="card flex-shrink-0 w-full p-6 shadow-2xl bg-base-100">
      <form className="w-full">
        <div className="form-control">
          <label className="label">
            
          </label>
          <input type="text" placeholder="Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            
          </label>
          <input type="text" placeholder="Mobile Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            
          </label>
          <input type="text" placeholder="Email Address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            
          </label>
          <input type="text" placeholder="Subject" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            
          </label>
          <input type="text" placeholder="Your Message" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ContactUs;