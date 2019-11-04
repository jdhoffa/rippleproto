import { useState } from "react";

const useInput = (name, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const onChange = ev => setValue(ev.target.value);
  return { name, value, onChange };
};

export default useInput;
