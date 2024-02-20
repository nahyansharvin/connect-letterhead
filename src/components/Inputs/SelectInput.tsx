import { Select, Option } from "@material-tailwind/react";
import { Dispatch, SetStateAction } from "react";

type SelectInputProps = {
  label: string,
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  menuItems: string[],
  error?: boolean,
};

export default function SelectInput({ label, value, setValue, menuItems, error }: SelectInputProps) {
  return (
    <Select
      error={error}
      size="lg"
      value={value}
      onChange={(val) => setValue(val as string)}
      placeholder={label}
      label={label}
    >
      {menuItems.map((item, i) => (
        <Option key={i} value={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
}