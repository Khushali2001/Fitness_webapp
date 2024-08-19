import { Box } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 16px",
        color: "#fff",
        background: "#6F6DE8",
      }}>
      <h2>Fitness App</h2>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "16px",
          }}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: "#FFF",
                textDecoration: isActive ? "underline" : "none",
              })}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/exercise/:id"
               style={({ isActive }) => ({
                color: "#FFF",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Exercise
            </NavLink>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

export default Navbar;
