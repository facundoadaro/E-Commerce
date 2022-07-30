import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "../Products/Product";
import products from "../../product-data";

export default function Products() {
  return (
    <Box 
        sx={{ 
            flexGrow: 1,
            margin: '18px'
        }}>
      <Grid container spacing={2}>
        {products?.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={8} lg={3} key={product.id}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
