import axios from "axios";
import md5 from "md5";

const publickey = "3fe36066f1bd1e8a5e435af2da06194f";
const privatekey = "b1105209e112f97677fe75d798b02d82e0b3dc14";
const time = Number(new Date());
const hash = md5(time + privatekey + publickey);

const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public`,
    method: "GET",
    params: {
        apikey: publickey,
        ts: time,
        hash: hash,
    },
});

export default api;
