import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const collection = new Collection<User, UserProps>(
  "http://localhost:3004/users",
  (json: UserProps) => User.buildUser(json)
);
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
