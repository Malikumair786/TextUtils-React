import React from "react";

function alert(props) {
  const capitalize = (word) => {
    let wrd = word.toLowerCase();
    return wrd.charAt(0).toUpperCase() + wrd.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default alert;
