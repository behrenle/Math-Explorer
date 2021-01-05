import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useHotkeys} from "react-hotkeys-hook";

const hotkeyFilter = () => true;
export const hotkeyOptions = {filter: hotkeyFilter};

interface Action {
    type: string,
}

const useHotkeyDispatch = (hotkey: string, action: Action | Action[], condition: boolean = true) => {
    const dispatch = useDispatch();
    const [dispatchAction, setDispatchAction] = useState(false);
    useHotkeys(hotkey, (e) => {
        if (condition) {
            e.preventDefault();
            setDispatchAction(true);
        }
    }, hotkeyOptions, [condition]);
    useEffect(() => {
        if (dispatchAction) {
            setDispatchAction(false);
            if (action instanceof Array) {
                action.forEach(a => dispatch(a));
            } else {
                dispatch(action);
            }
        }
    }, [dispatchAction]);
}

export default useHotkeyDispatch;