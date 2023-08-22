import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1EKEtkRgpFzZL7vdHuFetAALUw6QnZRkEZ/storage");
    return res.data;
}