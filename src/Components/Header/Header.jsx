// import PropTypes from 'prop-types';
import User from '../../assets/user.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-base font-semibold'><a>Home</a></li>
                            <li className='text-base font-semibold'><a>Recipes</a></li>
                            <li className='text-base font-semibold'><a>About</a></li>
                            <li className='text-base font-semibold'><a>Search</a></li>
                        </ul>
                    </div>
                    <h1 className="lg:text-3xl text-lg  lg:font-bold font-medium"><a href="#">Recipe Calories</a></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-base font-semibold'><a>Home</a></li>
                        <li className='text-base font-semibold'><a>Recipes</a></li>
                        <li className='text-base font-semibold'><a>About</a></li>
                        <li className='text-base font-semibold'><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end lg:gap-4 md:gap-2 gap-1">
                    <div className='lg:w-64 md:w-60 w-36 sm:h-14'>
                        <label className="input input-bordered rounded-full flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Search" />
                        </label>
                    </div>
                    <button><img src={User} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;