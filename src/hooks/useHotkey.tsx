import { useHotkeys } from "react-hotkeys-hook";

const hotkeyFilter = () => true;
export const hotkeyOptions = { filter: hotkeyFilter };

const useHotkey = (
  hotkey: string,
  callback: (event: KeyboardEvent) => void,
  deps?: any[]
) => {
  useHotkeys(hotkey, callback, hotkeyOptions, deps);
};

export default useHotkey;
