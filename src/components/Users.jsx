import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  //   console.log(users);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-6  bg-gradient-to-r from-cyan-400 to-yellow-500 bg-clip-text text-transparent">
        Total users: ({users.length})
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {users.map((user) => {
          const { id, name, username, email } = user;

          return (
            <div
              key={id}
              className="card w-full md:w-80 bg-base-100 shadow-xl rounded-lg overflow-hidden border p-2"
            >
              {/* Card Body */}
              <div className="card-body p-5">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{username}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{email}</p>

                {/* Button */}
                <div className="card-actions justify-end">
                  <Link to={`/users/${id}`} className="btn btn-primary btn-sm">
                    Show details - {name}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
