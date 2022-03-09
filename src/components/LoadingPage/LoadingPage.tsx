import React from "react";
import Button from "@mui/material/Button";
import clsx from "clsx";
import classes from "./LoadingPage.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  isLoading: boolean;
}

const LoadingPage: React.FC<Props> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <>
          <div className={classes.main}>
            <CircularProgress />
          </div>
          <div className={classes.loadingBg}></div>
        </>
      )}
    </>
  );
};

export default LoadingPage;
