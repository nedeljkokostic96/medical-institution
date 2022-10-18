import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["home", "about", "books"];

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BOOK - STORE
          </Typography>
          <Box
            className="navigation"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Link
                sx={{ textDecoration: "none" }}
                to={page === "home" ? "/" : page}
              >
                {page.toLocaleUpperCase()}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Shopping cart">
              <IconButton sx={{ p: 0 }}>
                <Link to="/cart">
                  <div
                    className="shopping-cart"
                    style={{
                      width: "auto",
                      padding: "0.5em 0.5em 0.2em 0.5em",
                      borderRadius: "3em",
                      backgroundColor: "white",
                    }}
                  >
                    <ShoppingCartIcon style={{ color: "black" }} />
                  </div>
                </Link>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
