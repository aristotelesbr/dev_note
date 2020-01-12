import React from "react";

// import { Container } from './styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  card: {
    maxWidth: 100
  },
  title: {
    fontSize: "14px",
    fontStyle: "bold"
  }
});

export default function File() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Criando API em Node
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
