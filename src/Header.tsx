import * as React from "react";

type HeaderProp = {
  text: string;
};

const Header = (props: HeaderProp) => {
  const { text } = props;
  return <h1 className="primary">{text}</h1>;
};

Header.headerName = "Header";

export default Header;
