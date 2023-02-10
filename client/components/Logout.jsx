import React, { useEffect } from "react";
import { Context } from "../Context";

export const Logout = ({}) => {
  const { setMe } = React.useContext(Context);

  useEffect(() => {
    setMe("");
  }, []);
};
