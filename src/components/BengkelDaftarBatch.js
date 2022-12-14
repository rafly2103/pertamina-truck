import React, { useState, useEffect } from "react";import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputUnstyled from "@mui/base/InputUnstyled";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

export default function PerusahaanDaftarSatuan() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, nokontrak, alamat, email);
  };

  const blue = {
    100: "#DAECFF",
    200: "#80BFFF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E7EBF0",
    200: "#E0E3E7",
    300: "#CDD2D7",
    400: "#B2BAC2",
    500: "#A0AAB4",
    600: "#6F7E8C",
    700: "#3E5060",
    800: "#2D3843",
    900: "#1A2027",
  };

  const StyledInputElement = styled("input")(
    ({ theme }) => `
    width: 260px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  `
  );

  const StyledTextareaElement = styled('textarea', {
    shouldForwardProp: (prop) =>
      !['ownerState', 'minRows', 'maxRows'].includes(prop.toString()),
  })(
    ({ theme }) => `
    width: 260px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  `,
  );

  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled
        slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
        {...props}
        ref={ref}
      />
    );
  });

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="name">Nama Bengkel</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
          <CustomInput id="name" placeholder="Nama Bengkel..." />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="kontrak">No Kontrak</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
          <CustomInput id="kontrak" placeholder="No Kontrak..." />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="alamat">Alamat</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
          <CustomInput id="alamat" multiline placeholder="Alamat???" />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="email">Email</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <CustomInput id="email" placeholder="E-Mail..." />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
