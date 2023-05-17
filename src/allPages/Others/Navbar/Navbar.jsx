import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarPages = <>
        <li className='text-purple-900 hover:underline'><Link>Home</Link></li>
        <li className='text-purple-900  hover:underline'><Link>Blogs</Link></li>
        <li className='text-purple-900  hover:underline'><Link>All Toys</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                
                <a className="btn btn-ghost normal-case text-4xl font-bold">Genius <span className='text-purple-600'>Play</span></a>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navbarPages}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navbarPages}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;