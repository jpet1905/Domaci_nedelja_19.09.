import axios from "axios";
import { BASE, VERSION, ALL_COUNTRIES } from "./constants.js"

export const getCountries = () => {
    return axios.get(`${BASE}${VERSION}${ALL_COUNTRIES}`)
}