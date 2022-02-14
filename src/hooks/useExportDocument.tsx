import useSession from "./useSession";

const useExportDocument = () => {
  const session = useSession();

  return () => {
    const documentData = JSON.stringify(session.document, null, 4);
    const saveData = async () => {
      const options = {
        types: [
          {
            description: "JSON Files",
            accept: {
              "application/json": [".json"],
            },
          },
        ],
      };
      // @ts-ignore
      const fileHandle = await window.showSaveFilePicker(options);
      const writable = await fileHandle.createWritable();
      writable.write(documentData);
      writable.close();
    };
    saveData().catch(console.error);
  };
};

export default useExportDocument;
