import React from "react";
import { UseStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default function Header() {
  const classes = UseStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid alignItems="center" item xs={2}>
          <div className={classes.container}>Arquivos</div>
        </Grid>
        <Grid alignItems="center" item xs={5}>
          <div className={classes.container}>Texto</div>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.container}>Preview</div>
        </Grid>
      </Grid>
    </div>
  );
}
