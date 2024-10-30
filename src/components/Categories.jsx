import { useLoaderData } from "react-router-dom";

const Categories = () => {
  let categories = useLoaderData();
  categories = categories.categories;

  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-6  bg-gradient-to-r from-blue-400 to-yellow-500 bg-clip-text text-transparent">
        All categories: ({categories.length})
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {categories.map((category) => {
          const {
            idCategory,
            strCategory,
            strCategoryThumb,
            strCategoryDescription,
          } = category;

          return (
            <div
              key={idCategory}
              className="card w-full md:w-80 bg-base-100 shadow-xl rounded-lg overflow-hidden border p-2"
            >
              {/* Image */}
              <figure className="w-full h-48 overflow-hidden">
                <img
                  src={strCategoryThumb}
                  alt={strCategory}
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-105 rounded-lg border p-2"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body p-5">
                <h2 className="card-title text-2xl font-bold">{strCategory}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {strCategoryDescription}
                </p>

                {/* Button */}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">
                    Explore {strCategory}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
