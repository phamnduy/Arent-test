import React from "react";
import Header from "./components/header";
import { Footer } from "./components/footer";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
  layout: {
    overflow: "auto",
  },
  children: {
    // padding: "0 75px 45px",
    marginBottom: 175
  },
}));

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Header />
      {/*<Sidebar />*/}
      <div className={classes.children}>{children}</div>
      <Footer />
    </div>
  );
};
