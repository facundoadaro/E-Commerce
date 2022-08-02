import * as React from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { actionTypes } from "../../reducer";

export default function CheckoutProduct({ product: { name, image, price, id } }) {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      payload: id,
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            className={styled.action}
            variant="h5"
            color="textSecondary"
          >
            {`$${price}`}
          </Typography>
        }
        title={name}
      />

      <CardMedia component="img" height="194" image={image} alt={name} />

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <IconButton aria-label="delete product" onClick={removeProduct}>
          <DeleteIcon fontSize="large" sx={{ marginTop: "1vh" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
