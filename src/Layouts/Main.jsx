import { Outlet } from 'react-router-dom';
import Footer from '../allPages/Others/Footer/Footer';
import Navbar from '../allPages/Others/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );    
};

export default Main;