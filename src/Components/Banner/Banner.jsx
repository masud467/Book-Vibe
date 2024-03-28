import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 ">
      <div className="hero h-[550px] bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="../images/banner.png" />
          <div>
            <h1 className="lg:text-5xl font-bold ">
              Books to freshen <br /> up your bookshelf
            </h1>

            <Link to='/listed-books'>
              <button className="btn bg-green-500 lg:mt-10">View The List</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
