import React from "react";
import useHotkey from "./useHotkey";

const useHotkeyRef = (hotkey: string, ref: React.RefObject<any>, effect: (ref: React.RefObject<any>) => void) => {
    useHotkey(hotkey, () => {
        if (ref.current)
            effect(ref);
    }, []);
};

export default useHotkeyRef;