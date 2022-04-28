import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header() {
  const access = localStorage.getItem("access_token");

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" component={NavLink}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "#fff" }}
            >
              LOGO
            </Typography>
          </Link>
         
          <Link to="/province" component={NavLink}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "#fff" }}
            >
              Province
            </Typography>
          </Link>

          <div style={{ marginLeft: "auto" }}>
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
