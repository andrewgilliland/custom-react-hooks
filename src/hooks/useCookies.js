import {useState, useEffect} from 'react'
import Cookies from "js-cookie";

export const useCookies = ({ key }) => {
  const initial = Cookies.get(key)
  const [cookie, setStateCookie] = useState(initial);

  useEffect(() => {
    Cookies.set(key, cookie)
  }, [cookie]) // eslint-disable-line react-hooks/exhaustive-deps

  return [cookie, setStateCookie];
};
