import React, { useState } from "react";
import clsx from "clsx";
import { splitText } from "../../helpers/helpers";
import classes from "./InputFile.module.scss";

interface Props {
  rightText?: string;
  leftText?: string;
  accept?: string;
  onChange?: (e: any) => void;
  name?: string;
  id?: string;
  isError?: boolean;
}

const InputFile: React.FC<Props> = ({
  rightText = "Upload your photo",
  leftText = "Upload",
  accept = "image/png, image/jpeg",
  name = "file",
  id = "file",
  isError = false,
  onChange,
}) => {
  const [nameFile, setNameFile] = useState<string>("");
  const onHandlerClick = (e: any) => {
    const newFileName =
      e.target.value.split("\\")[e.target.value.split("\\").length - 1];
    setNameFile(newFileName);
    if (onChange) {
      onChange(e.target.files[0]);
    }
    // console.log(e.target.files[0]);
  };

  return (
    <section className={classes.main}>
      <label>
        <div className={classes.containerBlock}>
          <div className={clsx(classes.leftSide, isError && classes.error)}>
            {leftText}
          </div>
          <div className={clsx(classes.rightSide, isError && classes.error)}>
            {nameFile ? nameFile : splitText(rightText, 30)}
          </div>
        </div>
        <input
          className={classes.inputFile}
          onChange={(e: any) => onHandlerClick(e)}
          type="file"
          name={name}
          id={id}
          accept={accept}
        />
      </label>
    </section>
  );
};

export default InputFile;
