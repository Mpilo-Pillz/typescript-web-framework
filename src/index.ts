import { Collection } from "./models/Collection";

const collection = new Collection("http://localhost:3004/users");
collection.on("change", () => {
  console.log(collection);
});
collection.fetch();

// import axios, { AxiosResponse } from "axios";

// axios.get("http://localhost:3004/users").then((response) => {
//   console.log(response.data);
// });
// import { User } from "./models/User";

// const user = User.buildUser({ id: 1 });
// user.on("change", () => {
//   console.log(user);
// });

// user.fetch();
