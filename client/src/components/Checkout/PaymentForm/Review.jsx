import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useSelector } from "react-redux";
import { getBasketTotal, postPurchase } from "../../../actions";
import { Box, Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../../reducer/index";

export default function Review({ handleBack }) {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  async function handlePayment() {
    let totalSent = await getBasketTotal(basket);
    console.log(totalSent)
    let paymentLink =  await postPurchase(getBasketTotal(basket));
    // console.log(paymentLink.data);
    // dispatch({
    //   type: actionTypes.EMPTY_BASKET,
    //   payload: [],
    // });
    window.location.assign(`${paymentLink.data}`);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List>
        {basket?.map((product, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            <Typography variant="body1">
              <strong>${product.price}</strong>
            </Typography>
          </ListItem>
        ))}
        <Divider />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={<strong>Total</strong>} />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`$${getBasketTotal(basket)}`}
          </Typography>
        </ListItem>
      </List>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => handleBack()} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>

        <Button
          sx={{ mt: 3, ml: 1 }}
          variant="contained"
          onClick={() => handlePayment()}
        >
          Pay
        </Button>
      </Box>
    </React.Fragment>
  );
}
