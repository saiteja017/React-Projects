import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/auth/'
   
  });
  export const instance1 = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/'
   
  });