import React, { useState, useEffect } from "react";
import { fromJS } from "immutable";

const setGroupCheck = (id, master, checks, setChecks) =>
  setChecks(
    master
      ? checks.map(check => !checks.get(id))
      : checks.set(id, !checks.get(id))
  );
const ICheckBox = props => {
  const [checked, setChecked] = useState(false);
  const { id, master, belongs, checks, setChecks } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={belongs ? checks.get(id) : checked}
        onChange={e => {
          if (belongs) {
            console.log(`Belongs: ${belongs}`);
            setGroupCheck(id, master, checks, setChecks);
          } else {
            setChecked(!checked);
          }
        }}
      />
    </div>
  );
};

export default ICheckBox;
