import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../media/ecommercelogo.jpg";
import { Badge, CardMedia } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "center",
      }}>
        <Toolbar>
          <IconButton size="small" color="inherit" sx={{ mr: 2, display: 'flex', justifyContent: 'start' }}>
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
          <Box sx={{flexgrow: 1}} /> 
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="div" sx={{ margin: "8px" }}>
              Hello Guest!
            </Typography>
            <Button variant="outlined" color="secondary">
              Login
            </Button>
            <IconButton>
              <Badge badgeContent={2} fontSize="large" color="shopCart" >
                <ShoppingCartTwoToneIcon
                  aria-label="Show cart items"
                  fontSize="large"
                  color="secondary"
                />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
