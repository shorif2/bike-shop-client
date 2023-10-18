
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './components/Footer';

const Root = () => {
    return (
        <div className='bg-[#F7FAF4]'>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;