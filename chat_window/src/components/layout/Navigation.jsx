import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Navigation = () => {
  const { currentUser, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // navigate("/login");
  };

  return (
    <nav className="w-64 bg-white  p-6">
     
      <div className="space-y-2">
        {currentUser ? (
          <>
            <Link
              to="/chat"
              style={{textDecoration:'underline'}}
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition duration-150"
            >
              Chat Window
            </Link>
            <button
              onClick={handleLogout}
              style={{textDecoration:'underline'}}
              className="w-full text-left py-2 px-4 text-red-600 hover:bg-red-50 rounded transition duration-150"
            >
              Logout ({currentUser.userId})
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              style={{textDecoration:'underline'}}
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition duration-150"
            >
              Register User
            </Link>
            <Link
              to="/login"
              style={{textDecoration:'underline'}}
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition duration-150"
            >
              Login User
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
