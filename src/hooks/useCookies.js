import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useCookies = ({ key }) => {
  const initial = Cookies.get(key);
  const [cookie, setStateCookie] = useState(initial);

  useEffect(() => {
    Cookies.set(key, cookie);
  }, [key, cookie]);

  return [cookie, setStateCookie];
};
