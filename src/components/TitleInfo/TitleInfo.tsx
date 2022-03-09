import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ButtonComponent from "../Button/Button";
import classes from "./TitleInfo.module.scss";

const TitleInfo: React.FC<any> = (props: any) => {
  const { maxWidth } = props;
  return (
    <>
      <div className={classes.main}>
        <div className={classes.mainBg}>
          <Container maxWidth={maxWidth} className={classes.container}>
            <div className={classes.titleText}>
              Test assignment for front-end developers
            </div>
            <div className={classes.descriptionsText}>
              Front-end developers make sure the user sees and interacts with
              all the necessary elements to ensure conversion. Therefore,
              responsive design, programming languages and specific frameworks
              are the must-have skillsets to look for when assessing your
              front-end developers.
            </div>
            <div>
              <ButtonComponent
                text="Sign up"
                onClick={() => console.log("Sign up")}
              />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default TitleInfo;
