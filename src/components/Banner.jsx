const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-600 to-gray-500 p-10 text-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-10 md:space-y-0 mb-10">
        {/* Image Section */}
        <img
          src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
          alt="Delicious Meal"
          className="w-64 h-64 rounded-full shadow-xl border-4 border-white"
        />

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3">
            Delicious Meals Just for You!
          </h1>
          <p className="text-lg mb-5">
            Discover a wide variety of meals from around the world, crafted to
            delight your taste buds and bring new flavors to your table.
          </p>

          {/* Button */}
          <button className="btn btn-primary btn-lg rounded-full px-6 py-3 bg-gradient-to-r from-green-400 to-blue-600 text-white hover:from-green-500 hover:to-blue-700 transition duration-200 ease-in-out">
            Explore Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
