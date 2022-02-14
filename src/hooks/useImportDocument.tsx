import { v4 as uuid } from "uuid";
import useLoadDocument from "./useLoadDocument";

const useImportDocument = () => {
  const loadDocument = useLoadDocument();

  return () => {
    const loadData = async () => {
      // @ts-ignore
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const content = await file.text();
      const data = JSON.parse(content);
      if (typeof data === "object") {
        if (typeof data.title === "string") {
          if (data.cells instanceof Array) {
            data.cells.forEach((cell: any) => {
              if (
                cell.type === "MATH" &&
                typeof cell.input === "string" &&
                typeof cell.output === "string"
              )
                return;
              if (cell.type === "TEXT" && typeof cell.content === "string")
                return;
              throw "file data validation failed";
            });
            loadDocument({
              title: data.title,
              cells: data.cells.map((cell: any) =>
                cell.type === "MATH"
                  ? {
                      type: "MATH",
                      uuid: uuid(),
                      input: cell.input,
                      output: cell.output,
                    }
                  : { type: "TEXT", uuid: uuid(), content: cell.content }
              ),
            });
            return;
          }
        }
      }
      throw "file data validation failed";
    };
    loadData().catch(console.error);
  };
};

export default useImportDocument;
