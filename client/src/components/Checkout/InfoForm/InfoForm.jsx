import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import InfoInput from "./InfoInput";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../../reducer/index";

export default function InfoForm({ handleNext }) {
  const methods = useForm();
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <Grid container spacing={3}>
          <InfoInput name="firstName" label="First Name" />
          <InfoInput name="lastName" label="Last Name" />
          <InfoInput name="address" label="Address" />
          <InfoInput name="email" label="Email" />
          <InfoInput name="city" label="City" />
          <InfoInput name="postCode" label="Post Code" />
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button component={Link} to="/checkout" sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>

          <Button
            onClick={methods.handleSubmit((data) => {
              dispatch({
                type: actionTypes.SET_SHIPPINGDATA,
                payload: data,
              });
              handleNext();
            })}
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        </Box>
      </FormProvider>
    </React.Fragment>
  );
}
