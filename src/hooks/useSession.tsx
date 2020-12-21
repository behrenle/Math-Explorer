import {useSelector} from "react-redux";
import {RootState} from "../store";

const useSession = () => {
    return useSelector((state: RootState) => state.session);
}

export default useSession;