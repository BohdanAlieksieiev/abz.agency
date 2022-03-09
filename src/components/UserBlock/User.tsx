import React from "react";
import { splitText } from "../../helpers/helpers";
import classes from "./User.module.scss";

interface Props {
  photo: string;
  name: string;
  position: string;
  email: string;
  phone: string;
}

const MAX_LENGTH_TEXT = 30;
const UserBlock: React.FC<Props> = ({
  photo,
  name,
  position,
  email,
  phone,
}) => {
  return (
    <section className={classes.main}>
      <div className={classes.padding}>
        <div className={classes.blockImage}>
          <img className={classes.image} src={photo} alt="personImage" />
        </div>
        <div className={classes.name}>{splitText(name, MAX_LENGTH_TEXT)}</div>
        <div className={classes.job}>
          {splitText(position, MAX_LENGTH_TEXT)}
        </div>
        <div className={classes.email}>{splitText(email, 33)}</div>
        <div className={classes.phone}>{phone}</div>
      </div>
    </section>
  );
};

export default UserBlock;
