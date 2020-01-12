import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div``;

export const UseStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
