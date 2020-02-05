import * as React from "react";

// components
import Header from "./Header";
import CustomDate from "./custom-date";
import FruitLoops from "./fruit-loop";

let fruit: Array<string> = [
  "red",
  "green",
  "blue",
  "yellow",
  "brown",
  "pink",
  "orange"
];

const App = () => {
  return (
    <div className="app">
      <Header text="Your dogs jank" />
      <CustomDate />
      <FruitLoops fruit={fruit} />
      This is app component
    </div>
  );
};

export default App;
