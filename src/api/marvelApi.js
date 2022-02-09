var api = require("marvel-api");

const publicKey = "3fe36066f1bd1e8a5e435af2da06194f";
const privateKey = "b1105209e112f97677fe75d798b02d82e0b3dc14";

var marvel = api.createClient({
    publicKey: "3fe36066f1bd1e8a5e435af2da06194f",
    privateKey: "b1105209e112f97677fe75d798b02d82e0b3dc14",
});

export default marvel;
