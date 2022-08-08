import { Grid, TextField } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const InfoInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <br/>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} 
          label={label} 
          fullWidth 
          required
          variant='standard'
          />}
      />
    </Grid>
  );
};

export default InfoInput;
