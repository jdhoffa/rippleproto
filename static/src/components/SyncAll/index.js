import React, { memo } from "react";
import Form from "components/Form";
import useInput from "hooks/useInput";

const SyncAll = () => {
  const fromTimeInput = useInput("from_time");
  const toTimeInput = useInput("to_time");
  return (
    <Form>
      <label>From Time</label>
      <input {...fromTimeInput} />
      <label>To Time</label>
      <input {...toTimeInput} />
    </Form>
  );
};

export default memo(SyncAll);
