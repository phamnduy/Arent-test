import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  mainBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    backgroundColor: "rgba(255,255,255,0.95)",
  },
  backgroundContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});
export const Loading = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.mainBackground}>
      <div className={classes.backgroundContent}>
        <CircularProgress color="secondary" />
      </div>
    </div>
  );
};
