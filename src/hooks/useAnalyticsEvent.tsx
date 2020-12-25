import {event} from "react-ga";
import useSettings from "./useSettings";

const useAnalyticsEvent = () => {
    const settings = useSettings();

    return (category: string, action: string, label?: string, value?: number) => {
        if (settings.useAnalytics)
            event({
                category,
                action,
                label,
                value
            });
    };
};

export default useAnalyticsEvent();