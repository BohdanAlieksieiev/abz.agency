import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ButtonComponent from "../Button/Button";
import userInComputerImage from "../../assets/Images/user_in_computer.svg";
import classes from "./MainInfo.module.scss";

const MainInfo: React.FC<any> = (props: any) => {
  const { maxWidth } = props;
  return (
    <Container maxWidth={maxWidth}>
      <section className={classes.mainSection}>
        <div className={classes.blockImage}>
          <img
            className={classes.image}
            src={userInComputerImage}
            alt="userInComputerImage"
          />
        </div>
        <div className={classes.rightText}>
          <div className={classes.title}>Let's get acquainted</div>
          <div className={classes.descriptionsTitle}>
            I'm a good front-end developer
          </div>
          <div className={classes.descriptions}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </div>
          <div>
            <ButtonComponent
              text="Sign up"
              onClick={() => console.log("Sign up")}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default MainInfo;
