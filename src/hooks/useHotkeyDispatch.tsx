import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useHotkey from "./useHotkey";

const hotkeyFilter = () => true;
export const hotkeyOptions = { filter: hotkeyFilter };

interface Action {
  type: string;
}

const useHotkeyDispatch = (
  hotkey: string,
  action: Action | Action[],
  condition: boolean = true
) => {
  const dispatch = useDispatch();
  const [dispatchAction, setDispatchAction] = useState(false);
  useHotkey(
    hotkey,
    (e) => {
      if (condition) {
        e.preventDefault();
        setDispatchAction(true);
      }
    },
    [condition]
  );
  useEffect(() => {
    if (dispatchAction) {
      setDispatchAction(false);
      if (action instanceof Array) {
        action.forEach((a) => dispatch(a));
      } else {
        dispatch(action);
      }
    }
  }, [dispatchAction]);
};

export default useHotkeyDispatch;
