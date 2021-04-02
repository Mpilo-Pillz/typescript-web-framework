import { User } from "./models/User";

const user = new User({ id: 1 });

// console.log(user.get("name"));

user.on("change", () => {
  console.log(user);

  //   console.log("user was changed, we probably need to update some html");
});

user.fetch();

// user.set({ name: "new name" });

// debugger;
// user.trigger("change"); //manual trigger

// user.events.on('change', () => {
//     console.log('change!');
// });
// user.events.trigger('change')

// user.save();
