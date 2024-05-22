import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function NavItem({ navItem }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = useCallback(({ currentTarget }) => {
    setAnchorEl(currentTarget);
  }, []);

  const handlePopoverClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);

  return (
    <div key={navItem.key}>
      <Typography
        aria-owns={open ? "mouse-over-popover-" + navItem.key : undefined}
        aria-haspopup="true"
        variant="overline"
        onMouseEnter={handlePopoverOpen}
        style={{
          color: open ? " #659a9a" : "black",
          fontFamily: "Montserrat-sans serif",
        }}
      >
        {navItem.label}
      </Typography>
      <Menu
        id="mouse-over-popover"
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />

        <Box display={"flex"} gap={.4} p={1} flexDirection={"column"} onMouseLeave={handlePopoverClose}>
          {navItem.links.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                sx={{
                  color: "gray",
                  fontFamily: "initial",
                }}
                onClick={handlePopoverClose}
              >
                {link.name}
              </MenuItem>
            </Link>
          ))}
        </Box>
      </Menu>
    </div>
  );
}
