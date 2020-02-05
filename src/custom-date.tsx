import * as React from "react";

const CustomDate = () => {
  const [time, setTime] = React.useState();

  const getTime = () => {
    setTime(new Date().toTimeString());
  };

  return (
    <div>
      {time}
      <button onClick={getTime}>Get the date</button>
    </div>
  );
};

CustomDate.displayName = "CustomDate";

export default CustomDate;
