import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "../../actions";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const basket = useSelector((state) => state.basket);

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "18px",
        maxWidth: "100vw",
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "12vh",
          marginTop: "18vh",
        }}
      >
        <Typography variant="h2">Shopping cart</Typography>
      </Grid>
      <Grid container spacing={2}>
        {basket?.map((product, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CheckoutProduct product={product} />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "11vh",
          marginTop: "12vh",
        }}
      >
        <Box container sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">{`Total: $${getBasketTotal(
            basket
          )}`}</Typography>
            <Button
              component={Link} to="/payment"
              variant="contained"
              color="secondary"
              sx={{ color: "white", maxWidth: "13vw", marginTop: "2.5vh" }}
            >
              Checkout
            </Button>
        </Box>
      </Grid>
    </Box>
  );
}
