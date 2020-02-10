//Adds id to each property of the JSON object
// The output of this must be saved on data.json

const appendIdToObject = (v, i) => ({ ...v, id: i })
const addIDToObject = data => JSON.stringify(data.map(appendIdToObject))
