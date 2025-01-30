import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextOverImage from "./TextOverImage";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const Grid2 = () => {
  return (
    <div>
        <div>
            <Box>
            <Typography variant="h2" component={h2}>Deals on new born clothes</Typography>
            </Box>
            
        <Grid container spacing={2}>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
    </Grid>
        </div>
        <div>
        <Grid container spacing={2}>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
    </Grid>
        </div>
        <div>
        <Grid container spacing={2}>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
            <TextOverImage />
        </Item>
      </Grid>
    </Grid>
        </div>
    </div>
  );
};

export default Grid2;
