import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type SelectInputProps = {
    label: string;
    value: string;
    setValue: (value: string) => void;
    menuItems: string[];
};

export default function SelectInput({ label, value, setValue, menuItems }: SelectInputProps) {

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <TextField
      select
      value={value}
      label={label}
      error={value === "" ? true : false}
      helperText={value === "" ? `${label} is required` : null}
      color="info"
      fullWidth
      onChange={handleTextInputChange}
    >
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} value={menuItem}>{menuItem}</MenuItem>
      ))}
    </TextField>
  );
}