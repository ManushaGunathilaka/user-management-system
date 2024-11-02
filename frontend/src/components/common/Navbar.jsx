import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = UserService.isAuthenticated();
  const isAdmin = UserService.isAdmin();

  const handleLogout = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to logout this user?"
    );
    if (confirmDelete) {
      UserService.logout();
      navigate("/"); // Redirect to the login page (assuming "/" is the login route)
      window.location.reload(); // Refresh the page after logout
    }
  };

  return (
    <nav>
      <ul>
        {!isAuthenticated && (
          <li>
            <Link to="/">Manu's User Management System</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {isAdmin && (
          <li>
            <Link to="/admin/user-management">User Management</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
