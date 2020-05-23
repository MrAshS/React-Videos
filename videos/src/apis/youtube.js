import axios from "axios";

const KEY = "AIzaSyBMND3gHRfYDrnLH8HJTrr9fEu8GDBKOvQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
