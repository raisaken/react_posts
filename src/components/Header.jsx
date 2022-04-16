import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/"
            component={NavLink}
            // color="#fff"
            // sx={{ textDecoration: "none" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "#fff" }}
            >
              LOGO
            </Typography>
          </Link>

          <div style={{marginLeft:"auto"}}>
            <Link
              to="/register"
              component={NavLink}
              sx={{ textDecoration: "none" }}
            >
              <Button variant="contained" sx={{ mx: 1 }} color="secondary">
                Register
              </Button>
            </Link>
            <Link
              to="/login"
              component={NavLink}
              sx={{ textDecoration: "none" }}
            >
              <Button variant="contained" sx={{ mx: 1 }} color="secondary">
                Login
              </Button>
            </Link>
            <Link
              to="/logout"
              component={NavLink}
              sx={{ textDecoration: "none" }}
            >
              <Button variant="contained" sx={{ mx: 1 }} color="secondary">
                Logout
              </Button>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
