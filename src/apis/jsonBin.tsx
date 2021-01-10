const baseUrl = "https://api.jsonbin.io";
const collectionId = process.env.REACT_APP_JSON_BIN_COLLECTION as string;
const apiKey = process.env.REACT_APP_JSON_BIN_API_KEY as string;

export const fetchBin = async (id: string) => {
    return await fetch(`${baseUrl}/b/${id}`, {
        method: "GET",
        headers: {
            "secret-key": apiKey
        }
    })
        .then(response => response.json())
        .catch(console.error);
};

export const updateBin = (id: string, content: Object) => {
    fetch(`${baseUrl}/b/${id}`, {
        method: "PUT",
        headers: {
            "secret-key": apiKey,
            "Content-Type": "application/json",
            "versioning": "false"
        },
        body: JSON.stringify(content)
    }).catch(console.error)
};

export const createBin = async (bin: Object): Promise<string> => {
    return await fetch(`${baseUrl}/b`, {
        method: "POST",
        headers: {
            "secret-key": apiKey,
            "Content-Type": "application/json",
            "collection-id": collectionId
        },
        body: JSON.stringify(bin)
    }).then(response => response.json()).then(data => {console.log(data.id); return data.id;});
};
