import axios, { AxiosPromise } from "axios";
// import { UserProps } from "./User";

// .then((response: AxiosResponse): void => {
//     this.set(response.data);
//   });

interface HasId {
  id?: number;
}
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // make a put as it has an id meaning it exists
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // make a post as it does not exist
      return axios.post(this.rootUrl, data);
    }
  }
}
