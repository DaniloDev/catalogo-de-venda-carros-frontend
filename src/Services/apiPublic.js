import axios from "axios";

export const apiPublic = axios.create({
	baseURL: "http://localhost:4000",
});
