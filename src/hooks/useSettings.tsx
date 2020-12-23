import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Settings} from "../store/settings/types";

const useSettings = (): Settings => {
    return useSelector((state: RootState) => state.settings);
}

export default useSettings;