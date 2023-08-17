import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1LmLfxs3QVGhxfjoH8Vs79VB5rLLJbUdH6/storage");
    return res.data;
}