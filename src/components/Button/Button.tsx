import React from "react";
import Button from "@mui/material/Button";
import clsx from "clsx";
import classes from "./Button.module.scss";

interface Props {
  text: string;
  onClick: () => void;
  cssBtn?: string;
  variant?: "contained" | "outlined" | "text";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
}

const ButtonComponent: React.FC<Props> = ({
  text,
  onClick,
  cssBtn,
  variant = "contained",
  color = "warning",
  disabled = false,
}) => {
  return (
    <>
      <Button
        disabled={disabled}
        variant={variant}
        color={color}
        className={clsx(classes.button, cssBtn)}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
