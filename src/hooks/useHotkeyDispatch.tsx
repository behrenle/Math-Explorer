import {useState} from "react";
import {useDispatch} from "react-redux";
import {useHotkeys} from "react-hotkeys-hook";

const hotkeyFilter = () => true;
export const hotkeyOptions = {filter: hotkeyFilter};

interface Action {
    type: string,
}

const useHotkeyDispatch = (hotkey: string, action: Action | Action[]) => {
    const dispatch = useDispatch()
    const [dispatchAction, setDispatchAction] = useState(false);
    useHotkeys(hotkey, (e) => {
        e.preventDefault();
        setDispatchAction(true)
    }, hotkeyOptions, []);

    if (dispatchAction) {
        setDispatchAction(false);
        if (action instanceof Array) {
            action.forEach(a => dispatch(a));
        } else {
            dispatch(action);
        }
    }
}

export default useHotkeyDispatch;