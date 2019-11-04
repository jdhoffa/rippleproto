import React, { memo } from "react";
import classes from "./Form.module.css";

const Form = ({ children, ...props }) => (
  <form className={classes.Form} {...props}>
    {children}
  </form>
);

export default memo(Form);
