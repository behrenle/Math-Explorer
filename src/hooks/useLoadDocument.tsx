import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadDocument } from "../store/session/actions";
import { Document as DocumentType } from "../store/session/types";

const useLoadDocument = () => {
  const [documentData, setDocumentData] = useState<DocumentType | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (documentData !== null) {
      dispatch(loadDocument(documentData));
      setDocumentData(null);
    }
  });

  return setDocumentData;
};

export default useLoadDocument;
