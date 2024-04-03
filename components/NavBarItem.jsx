import React, { useState } from "react";
import { Box, Divider, Link, Menu, MenuItem, Typography } from "@mui/material";

export default function NavBarItem({ label, nested }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Typography
        aria-owns={id}
        aria-haspopup="true"
        onMouseEnter={handleClick}
        style={{
          color: open ? "#659a9a" : "black",
          fontFamily: "Montserrat-sans serif",
          fontSize: "19px",
          fontWeight: "500",
        }}
      >
        {label}
      </Typography>
      <Menu
        id="simple-popover"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
        <Box onMouseLeave={handleClose}>
          {nested.map((child) => (
            <Link
              key={child.id}
              to={child.link}
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                sx={{
                  p: 1,
                  color: "gray",
                  fontFamily: "initial",
                  fontWeight: "bolder",
                  fontSize: 18,
                }}
                onClick={handleClose}
              >
                {child.label}
              </MenuItem>
            </Link>
          ))}
        </Box>
      </Menu>
    </>
  );
}
