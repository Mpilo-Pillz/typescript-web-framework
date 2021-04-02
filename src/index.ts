import { User } from "./models/User";

const user = new User({ id: 1, name: "newer anme", age: 26 });
user.on("save", () => {
  console.log(user);

  //   console.log("user was changed, we probably need to update some html");
});
// console.log(user.get("name"));

// user.on("change", () => {
//   console.log(user);

//   //   console.log("user was changed, we probably need to update some html");
// });

user.save();
// user.fetch();

// user.set({ name: "new name" });

// debugger;
// user.trigger("change"); //manual trigger

// user.events.on('change', () => {
//     console.log('change!');
// });
// user.events.trigger('change')

// user.save();
