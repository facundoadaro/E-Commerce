import * as React from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../media/ecommercelogo.jpg";
import { Badge, CardMedia } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";

export default function NavBar() {
  const basket = useSelector((state) => state.basket);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "6rem" }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "4.5rem",
          }}
        >
          <Box>
            <Link to="/">
              <IconButton size="small" color="inherit" sx={{ mr: 2 }}>
                <CardMedia
                  sx={{
                    borderRadius: "8px",
                    height: "50px",
                    width: "170px",
                  }}
                  component="img"
                  image={logo}
                  alt="Nike Shoes"
                />
              </IconButton>
            </Link>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography variant="h6" component="div" sx={{ margin: "10px" }}>
              Hello Guest!
            </Typography>
            <Link to="/sign-in" >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    maxHeight: "3rem",
                    height: '6vh',
                    color: "white",
                    marginLeft: "35px",
                    marginRight: "20px",
                    marginTop: "5px"
                  }}
                >
                  Login
                </Button>
            </Link>
            <Link to="/checkout">
              <IconButton>
                <Badge
                  badgeContent={basket?.length}
                  fontSize="large"
                  color="shopCart"
                >
                  <ShoppingCartTwoToneIcon
                    aria-label="Show cart items"
                    fontSize="large"
                    color="secondary"
                  />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
