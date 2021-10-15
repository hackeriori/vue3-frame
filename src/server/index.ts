import AwaitTo from './awaitTo';
import link, {AxiosResponse} from "axios";
import APIResponse from "./types";

let to: AwaitTo;
let axiosInstance = link.create();

to = new To(<T>(x: AxiosResponse<APIResponse<T>>) => {
  if (x.data.code === 200)
    return x.data.data;
  else
    to.showMessage(x.data.info);
});

const token = localStorage.getItem('TOKEN');

if (token) {
  axiosInstance.defaults.headers.common['token'] = token;
}