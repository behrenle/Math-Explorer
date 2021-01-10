import useSession from "./useSession";
import {createBin} from "../apis/jsonBin";
import {useHistory} from "react-router-dom";

const useCloudUpload = () => {
    const document = useSession().document;
    const history = useHistory();

    return () => {
        createBin(document)
            .then(id => history.push(`/upload-document/${id}`))
            .catch(console.error);
    };
}

export default useCloudUpload;