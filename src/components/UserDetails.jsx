import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { userId } = useParams();
  console.log(userId);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Beautiful card using Tailwind CSS */}
      <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4 object-cover"
              src={user?.avatar?.url || "https://via.placeholder.com/150"}
              alt="User Avatar"
            />
            <h1 className="text-2xl font-semibold">{user?.name}</h1>
          </div>
        </div>
        <hr className="my-4 border-gray-200" />
        <div>
          <p className="text-gray-700">
            <span className="font-bold">Username:</span>{" "}
            {user?.username || "N/A"}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Phone:</span> {user?.phone}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Website:</span>{" "}
            <a href={user?.website} target="_blank" rel="noopener noreferrer">
              {user?.website}
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Company:</span> {user?.company?.name}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Catchphrase:</span>{" "}
            {user?.company?.catchPhrase}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Website:</span> {user?.company?.bs}
          </p>
          <hr className="my-4 border-gray-200" />
          <p className="text-gray-700">
            <span className="font-bold">Address:</span>
            <br />
            {user?.address?.street} {user?.address?.suite},{" "}
            {user?.address?.city} {user?.address?.zipcode}
            <br />
            <span className="text-gray-500">
              Lat: {user?.address?.geo?.lat || "N/A"}, Lng:{" "}
              {user?.address?.geo?.lng || "N/A"}
            </span>
          </p>
        </div>
      </div>

      {/* Go back button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
