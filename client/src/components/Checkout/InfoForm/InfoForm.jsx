import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoInput from "./InfoInput";

export default function InfoForm() {
  const methods = useForm();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <Grid container spacing={3}>
          <InfoInput name='firstName' label='First Name' />
          <InfoInput name='lastName' label='Last Name' />
          <InfoInput name='address' label='Address' />
          <InfoInput name='email' label='Email' />
          <InfoInput name='city' label='City' />
          <InfoInput name='postCode' label='Post Code' />
        </Grid>
      </FormProvider>
    </React.Fragment>
  );
}
