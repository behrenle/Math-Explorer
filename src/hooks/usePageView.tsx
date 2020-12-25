import {pageview} from "react-ga";
import useSettings from "./useSettings";
import {useEffect} from "react";

const usePageView = (path: string) => {
    const settings = useSettings();
    useEffect(() => {
        if (settings.useAnalytics)
            pageview(path);
    }, []);
}

export default usePageView;