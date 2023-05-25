import React from "react";

export default function Input({
  type,
  name,
  autoComplete,
  value,
  onChange,
  classes,
}) {
  return (
    <input
      type={type}
      name={name}
      autoComplete={autoComplete}
      required
      value={value}
      onChange={onChange}
      className={classes}
    />
  );
}
