import React from "react";
import {useHotkeys} from "react-hotkeys-hook";
import {hotkeyOptions} from "./useHotkeyDispatch";

const useHotkeyRef = (hotkey: string, ref: React.RefObject<any>, effect: (ref: React.RefObject<any>) => void) => {
    useHotkeys(hotkey, () => {
        if (ref.current)
            effect(ref);
    }, hotkeyOptions, []);
};

export default useHotkeyRef;