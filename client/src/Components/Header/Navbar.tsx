import React , {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { logout } from "../../lib/AuthApi";
import { useDispatch } from "react-redux";
import { setAuth } from "../../app/feature/AuthSlice";

const Navbar: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [disable, setDisable] = useState <boolean>(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      logout(setDisable , navigate);
      dispatch(setAuth(null));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="w-full px-4 py-2.5 bg-[#1d1d1d] mt-5 flex justify-between items-center">
        <Link to="/">
          <strong className="text-lg font-lato text-white">
            Code <span className="text-green-400">Playground </span>
          </strong>
        </Link>

        <ul className="flex gap-5">
          <Link
            to="/playground"
            className="text-white px-4 py-2 bg-[#141212] rounded-sm opacity-40 hover:opacity-100 transition-all duration-100 hidden min-[540px]:block"
          >
            Create Now
          </Link>

          {isAuth ? (
            <button className="text-white px-6 py-2 bg-blue-600 rounded-sm" onClick={handleLogout} disabled={disable}>
              Logout
            </button>
          ) : (
            <Link
              to="/auth"
              className="text-white px-6 py-2 bg-blue-600 rounded-sm"
            >
              Login
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
