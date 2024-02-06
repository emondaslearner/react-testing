import React, { useState } from "react";

// images
import Logo from "../../../assets/Logo.png";

// components
import TextInput from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "../../../components/shared/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { ChangeUserAuthorizeStatus } from "../../../store/slice/user";
import { ChangeBlogSearchApiCall } from "../../../store/slice/blog";
import { queryClient } from "../../../App";

const Navbar = () => {
  const authorized = useSelector((state) => state.user.authorized);
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // search
  const [search, setSearch] = useState("");

  const items = [
    {
      key: "profile",
      name: "Profile",
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      key: "delete",
      name: "Logout",
      onClick: () => {
        queryClient.clear();
        dispatch(ChangeUserAuthorizeStatus(false));
        localStorage.removeItem("token");
        navigate("/");
      },
    },
  ];

  return (
    <div className="flex justify-between items-center py-[20px] mx-auto max-w-[1500px] w-[95%]">
      <Link data-testid="nav-logo-link" to="/">
        <img src={Logo} alt="Logo" className="max-w-[50px]" />
      </Link>

      {location.pathname === "/" && (
        <div className="flex items-center">
          <TextInput
            data-testid="blog-search"
            className="rounded-tl-[5px] rounded-bl-[5px]"
            placeholder="Search Blogs"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!e.target.value) {
                setTimeout(() => {
                  if (!e.target.value) {
                    dispatch(ChangeBlogSearchApiCall(""));
                  }
                }, 500);
              }
            }}
          />
          <Button
            data-testid="blog-search-btn"
            onClick={() => dispatch(ChangeBlogSearchApiCall(search))}
            className="rounded-tr-[5px] rounded-br-[5px]"
          >
            Search
          </Button>
        </div>
      )}

      {!authorized ? (
        <div className="flex items-center gap-x-[20px]">
          <Link
            to="/login"
            className="border-[1px] border-black_ py-[7.5px] px-8 bg-transparent rounded-[5px] text-black_ transition-all duration-300 hover:bg-black_ hover:text-white_"
            data-testid="login-btn"
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="border-0 py-[9px] px-8 bg-black_ rounded-[5px] text-white_"
            data-testid="register-btn"
          >
            Register
          </Link>
        </div>
      ) : (
        <Dropdown
          openButton={
            <div className="flex gap-x-[20px] cursor-pointer items-center">
              <div className="flex gap-x-[10px] items-center">
                <img
                  src="https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png"
                  alt="User"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <p data-testid="user-name" >{userData?.name && userData.name}</p>
              </div>

              <FaChevronDown data-testid="user-arrow-btn" size={15} />
            </div>
          }
          variant="bordered"
          items={items}
          openButtonClass="border-0 h-full"
        />
      )}
    </div>
  );
};

export default Navbar;
