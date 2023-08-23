import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1G1TeB6vZV6MSaDR3yZ9ExsQmSnERdgep2/storage");
    return res.data;
}

export const fetchStoryTitle = async (addr) => {
    const res = await axios.get(`https://api.ghostnet.tzkt.io/v1/contracts/${addr}/storage`);
    return res.data.title;
}