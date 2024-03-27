import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Listed Books</a>
              </li>
              <li>
                <a>Pages to Read</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
         
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/listed-books'>Listed Books</NavLink>
            <NavLink to='/read-books'>Pages to Read</NavLink>
            {/* <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Read</a>
            </li> */}
        
        </div>
        <div className="navbar-end flex gap-5">
          <a className="btn bg-green-400 text-white">Sign In</a>
          <a className="btn bg-blue-400 text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
