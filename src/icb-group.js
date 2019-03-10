import React, { useState } from "react";
import { fromJS, toJS } from "immutable";
import ICheckBox from "./icheckbox";

const getArrRec = (first, last, lastArr) => {
  if (lastArr.size == last) {
    return lastArr;
  } else {
    const newArr = fromJS(lastArr).push(first);
    return getArrRec(first + 1, last, newArr);
  }
};

const getInitialState = (first, last, state) => {
  if (state.size == last) {
    return state;
  } else {
    const newState = fromJS(state).set(first, false);
    return getInitialState(first + 1, last, newState);
  }
};

const CBGroup = ({ count = 0 }) => {
  const arr = getArrRec(1, count, fromJS([]));
  const initialState = getInitialState(1, count, fromJS({}));
  const [checks, setChecks] = useState(initialState);
  return (
    <div>
      {arr.map(id => {
        return (
          <ICheckBox
            belongs
            key={id}
            id={id}
            master={id == 1}
            checks={checks}
            setChecks={newChecks => {
              setChecks(checks.merge(newChecks));
            }}
          />
        );
      })}
    </div>
  );
};

export default CBGroup;
