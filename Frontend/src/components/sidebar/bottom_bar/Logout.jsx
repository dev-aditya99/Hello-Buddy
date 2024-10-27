import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from "../../../Hooks/useLogout";

const Logout = () => {
  const { loading, logoutUser } = useLogout();
  return (
    <button
      className="btn btn-neutral text-xl"
      onClick={!loading && logoutUser}
    >
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <RiLogoutCircleLine />
      )}
    </button>
  );
};

export default Logout;
