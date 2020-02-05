import * as React from "react";

type FruitLoopsProps = {
  fruit: Array<string>;
};

const FruitLoops = (props: FruitLoopsProps) => {
  const { fruit } = props;
  return (
    <ul>
      {fruit.map((item, index) => {
        return (
          <li style={{ color: `${item}` }} key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

FruitLoops.displayName = "FruitLoops";

export default FruitLoops;
