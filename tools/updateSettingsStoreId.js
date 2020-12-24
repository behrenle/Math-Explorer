const uuid = require("uuid").v4;
const fs = require("fs");

const path = "./src/store/settings/storeId.json";
const id = uuid();

fs.writeFile(path, JSON.stringify({storeId: id}, null, 2), (err) => {
    if (err)
        console.error(err);
    console.log(`Updated settings store id to ${id}`);
});
