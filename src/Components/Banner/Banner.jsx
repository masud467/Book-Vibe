const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 ">
      <div className="hero h-[550px] bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src='../images/banner.png'
            
          />
          <div>
            <h1 className="text-5xl font-bold ">Books to freshen <br/> up your bookshelf</h1>
            
            <button className="btn bg-green-500 mt-10">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
