import React, {useEffect} from "react";

const useRefEffect = (ref: React.RefObject<any>, effect: (ref: React.RefObject<any>) => void, deps: any[] = []) => {
    useEffect(() => {
        if (ref.current)
            effect(ref);
    }, deps);
}

export default useRefEffect;