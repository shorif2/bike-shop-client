
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='bg-[#F7FAF4]'>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;